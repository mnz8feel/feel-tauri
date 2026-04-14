import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { invoke } from '@tauri-apps/api/core';
import { Layout, Table, Tabs, Tag, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import 'antd/dist/reset.css';

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

const columns: TableColumnsType<InfoRow> = [
  { title: '中文含义', dataIndex: 'zhName', key: 'zhName', width: 220 },
  { title: '英文标识', dataIndex: 'enName', key: 'enName', width: 220 },
  {
    title: '当前平台是否支持',
    dataIndex: 'supported',
    key: 'supported',
    width: 180,
    render: (supported: boolean) => (supported ? <Tag color="success">支持</Tag> : <Tag color="error">不支持</Tag>),
  },
  {
    title: '获取到的值',
    dataIndex: 'value',
    key: 'value',
    render: (value: string) => (
      <Typography.Text code copyable={{ text: value }}>
        {value}
      </Typography.Text>
    ),
  },
];

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
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

  return (
    <Layout
      style={{
        minHeight: '100vh',
        padding: 24,
        background: 'radial-gradient(circle at top right, rgba(22,119,255,0.12), transparent 50%), #f5f7fb',
      }}
    >
      <Typography.Title level={3} style={{ marginTop: 0 }}>
        Tauri API 能力展示（Desktop）
      </Typography.Title>
      <Tabs
        defaultActiveKey="path"
        items={[
          {
            key: 'path',
            label: '路径目录',
            children: <Table<InfoRow> bordered rowKey="key" dataSource={pathRows} columns={columns} pagination={false} scroll={{ x: 1080 }} />,
          },
          {
            key: 'app',
            label: '应用信息',
            children: <Table<InfoRow> bordered rowKey="key" dataSource={appRows} columns={columns} pagination={false} scroll={{ x: 1080 }} />,
          },
          {
            key: 'os',
            label: '系统信息',
            children: <Table<InfoRow> bordered rowKey="key" dataSource={osRows} columns={columns} pagination={false} scroll={{ x: 1080 }} />,
          },
        ]}
      />
    </Layout>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
