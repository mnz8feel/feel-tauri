import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { invoke } from '@tauri-apps/api/core';
import { Card, DotLoading, List, SafeArea, Tabs, Tag } from 'antd-mobile';
import 'antd-mobile/es/global';

type InfoRow = {
  key: string;
  zhName: string;
  enName: string;
  supported: boolean;
  value: string;
};

const pathDefinitions: Array<{ key: string; zhName: string }> = [
  { key: 'appCacheDir', zhName: '应用缓存目录' },
  { key: 'appConfigDir', zhName: '应用配置目录' },
  { key: 'appDataDir', zhName: '应用数据目录' },
  { key: 'appLocalDataDir', zhName: '应用本地数据目录' },
  { key: 'appLogDir', zhName: '应用日志目录' },
  { key: 'audioDir', zhName: '音频目录' },
  { key: 'cacheDir', zhName: '缓存目录' },
  { key: 'configDir', zhName: '配置目录' },
  { key: 'dataDir', zhName: '数据目录' },
  { key: 'desktopDir', zhName: '桌面目录' },
  { key: 'documentDir', zhName: '文档目录' },
  { key: 'downloadDir', zhName: '下载目录' },
  { key: 'executableDir', zhName: '可执行文件目录' },
  { key: 'fontDir', zhName: '字体目录' },
  { key: 'homeDir', zhName: '用户主目录' },
  { key: 'localDataDir', zhName: '本地数据目录' },
  { key: 'pictureDir', zhName: '图片目录' },
  { key: 'publicDir', zhName: '公共目录' },
  { key: 'resourceDir', zhName: '应用资源目录' },
  { key: 'runtimeDir', zhName: '运行时目录' },
  { key: 'tempDir', zhName: '临时目录' },
  { key: 'templateDir', zhName: '模板目录' },
  { key: 'videoDir', zhName: '视频目录' },
];

const appDefinitions: Array<{ key: string; zhName: string }> = [
  { key: 'getName', zhName: '应用名称' },
  { key: 'getVersion', zhName: '应用版本' },
  { key: 'getTauriVersion', zhName: 'Tauri 版本' },
  { key: 'getIdentifier', zhName: '应用标识符' },
  { key: 'getBundleType', zhName: '打包类型' },
  { key: 'fetchDataStoreIdentifiers', zhName: '数据存储标识列表' },
];

const osDefinitions: Array<{ key: string; zhName: string }> = [
  { key: 'arch', zhName: '系统架构' },
  { key: 'eol', zhName: '换行标记' },
  { key: 'exeExtension', zhName: '可执行文件扩展名' },
  { key: 'family', zhName: '系统家族' },
  { key: 'hostname', zhName: '主机名' },
  { key: 'locale', zhName: '系统语言区域' },
  { key: 'platform', zhName: '系统平台' },
  { key: 'type', zhName: '操作系统类型' },
  { key: 'version', zhName: '操作系统版本' },
];

const toErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

const buildErrorRows = (definitions: Array<{ key: string; zhName: string }>, error: unknown): InfoRow[] =>
  definitions.map((item) => ({
    key: item.key,
    zhName: item.zhName,
    enName: item.key,
    supported: false,
    value: `命令调用失败：${toErrorMessage(error)}`,
  }));

// eslint-disable-next-line react-refresh/only-export-components
const DataList = ({ rows }: { rows: InfoRow[] }) => (
  <Card style={{ marginTop: 14, borderRadius: 14 }}>
    <List>
      {rows.map((item) => (
        <List.Item key={item.key}>
          <div style={{ display: 'grid', gap: 6, width: '100%' }}>
            <div style={{ fontWeight: 700 }}>{item.zhName}</div>
            <div style={{ color: '#8a94a6', fontSize: 12 }}>{item.enName}</div>
            <div>
              {item.supported ? (
                <Tag color="success" fill="outline">
                  支持
                </Tag>
              ) : (
                <Tag color="danger" fill="outline">
                  不支持
                </Tag>
              )}
            </div>
            <code
              style={{
                fontSize: 12,
                background: '#eef2f7',
                borderRadius: 8,
                padding: '8px 10px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
              }}
            >
              {item.value}
            </code>
          </div>
        </List.Item>
      ))}
    </List>
  </Card>
);

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const [activeTab, setActiveTab] = useState<'path' | 'app' | 'os'>('path');
  const [pathRows, setPathRows] = useState<InfoRow[]>(
    pathDefinitions.map((item) => ({
      key: item.key,
      zhName: item.zhName,
      enName: item.key,
      supported: false,
      value: '加载中...',
    }))
  );
  const [appRows, setAppRows] = useState<InfoRow[]>(
    appDefinitions.map((item) => ({
      key: item.key,
      zhName: item.zhName,
      enName: item.key,
      supported: false,
      value: '加载中...',
    }))
  );
  const [osRows, setOsRows] = useState<InfoRow[]>(
    osDefinitions.map((item) => ({
      key: item.key,
      zhName: item.zhName,
      enName: item.key,
      supported: false,
      value: '加载中...',
    }))
  );

  useEffect(() => {
    let cancelled = false;

    const loadPath = async () => {
      try {
        const rows = await invoke<InfoRow[]>('get_all_paths');
        if (!cancelled) {
          setPathRows(rows);
        }
      } catch (error) {
        if (!cancelled) {
          setPathRows(buildErrorRows(pathDefinitions, error));
        }
      }
    };

    const loadApp = async () => {
      try {
        const rows = await invoke<InfoRow[]>('get_all_app_info');
        if (!cancelled) {
          setAppRows(rows);
        }
      } catch (error) {
        if (!cancelled) {
          setAppRows(buildErrorRows(appDefinitions, error));
        }
      }
    };

    const loadOs = async () => {
      try {
        const rows = await invoke<InfoRow[]>('get_all_os_info');
        if (!cancelled) {
          setOsRows(rows);
        }
      } catch (error) {
        if (!cancelled) {
          setOsRows(buildErrorRows(osDefinitions, error));
        }
      }
    };

    void loadPath();
    void loadApp();
    void loadOs();

    return () => {
      cancelled = true;
    };
  }, []);

  const currentRows = activeTab === 'path' ? pathRows : activeTab === 'app' ? appRows : osRows;
  const stillLoading = currentRows.some((item) => item.value === '加载中...');

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, rgba(22,119,255,0.08) 0%, rgba(22,119,255,0.02) 260px, #f7f8fa 260px)',
        padding: '16px 12px 24px',
      }}
    >
      <h1 style={{ margin: '4px 0 8px', fontSize: 24 }}>Tauri API 能力展示（Mobile）</h1>
      <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key as 'path' | 'app' | 'os')} style={{ marginTop: 12 }}>
        <Tabs.Tab title="路径目录" key="path" />
        <Tabs.Tab title="应用信息" key="app" />
        <Tabs.Tab title="系统信息" key="os" />
      </Tabs>
      {stillLoading ? (
        <div style={{ marginTop: 12, color: '#637381' }}>
          正在获取数据 <DotLoading />
        </div>
      ) : null}
      <DataList rows={currentRows} />
      <SafeArea position="bottom" />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
