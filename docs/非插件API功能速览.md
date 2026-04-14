# Tauri 非插件 API 功能速览（@tauri-apps/api）

本文对应 Tauri v2 `reference/javascript/api`（不含 plugin-\* 插件包），用于快速了解核心 API 能力。

## 总览

`@tauri-apps/api` 主要是应用内置能力的 JavaScript 接口层，常见导入方式：

```ts
import { app, core, event, path, window, webview } from '@tauri-apps/api';
```

## 命名空间一览

| 命名空间        | 主要功能                                             | 常见场景                               |
| --------------- | ---------------------------------------------------- | -------------------------------------- |
| `app`           | 应用信息与生命周期相关能力（如版本、名称、包类型等） | 关于页、版本展示、运行环境判断         |
| `core`          | 调用 Rust 命令、资源/通道等底层核心能力              | `invoke` 后端命令、前后端通信骨架      |
| `dpi`           | 逻辑像素/物理像素与尺寸位置类型                      | 多屏与缩放适配、窗口定位计算           |
| `event`         | 事件总线（监听/发送应用事件）                        | 模块解耦通信、状态广播                 |
| `image`         | 图像资源对象（RGBA 等）                              | 图标/图像资源在原生侧交互              |
| `menu`          | 原生菜单相关类型与操作                               | 应用菜单、右键菜单、菜单项行为         |
| `mocks`         | 测试用模拟能力（例如 mock IPC / 事件）               | 单元测试、前端脱离后端调试             |
| `path`          | 路径与目录工具（系统目录、路径拼接等）               | 读写配置路径、缓存路径、跨平台路径处理 |
| `tray`          | 系统托盘图标与托盘交互                               | 托盘应用、后台驻留控制                 |
| `webview`       | Webview 实例管理与交互                               | 多 webview 通信、webview 级别事件      |
| `webviewWindow` | WebviewWindow 组合对象（窗口 + webview）             | 创建/管理复杂窗口实例                  |
| `window`        | 窗口管理与窗口间通信                                 | 窗口创建、尺寸位置控制、窗口事件       |

## 易混概念

- `window`：偏“原生窗口”能力。
- `webview`：偏“窗口里的网页视图”能力。
- `webviewWindow`：两者组合后的高层对象，常用于统一创建和管理。

## 使用建议

- 先用 `window` / `event` / `path` 这类稳定基础模块搭框架。
- 需要调用 Rust 时集中走 `core`，避免前端散落调用。
- 多窗口项目优先明确 `label` 命名规范，避免事件与实例混乱。
- 测试阶段可用 `mocks` 降低对真实后端的依赖。

## 参考入口

- JS API 总览：`https://v2.tauri.app/reference/javascript/api/`
- app：`https://v2.tauri.app/reference/javascript/api/namespaceapp/`
- core：`https://v2.tauri.app/reference/javascript/api/namespacecore/`
- window：`https://v2.tauri.app/reference/javascript/api/namespacewindow/`
- webview：`https://v2.tauri.app/reference/javascript/api/namespacewebview/`
