---
title: 'path'
editUrl: false
sidebar:
  label: 'path'
tableOfContents:
  maxHeadingLevel: 5
---

`path` 模块提供了用于处理文件与目录路径的实用工具。

当 `tauri.conf.json` 中的 [`app.withGlobalTauri`](https://v2.tauri.app/reference/config/#withglobaltauri) 设为 `true` 时，也可以通过 `window.__TAURI__.path` 访问该包。

建议仅将实际使用的 API 加入白名单，以获得更优的包体积与安全性。

## 枚举

<a id="basedirectory" name="basedirectory"></a>

### BaseDirectory

#### 版本要求

2.0.0

#### 枚举成员

<a id="appcache" name="appcache"></a>

##### AppCache

```ts
AppCache: 16;
```

###### 另见

[appCacheDir](/zh-cn/reference/javascript/api/namespacepath/#appcachedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L83

<a id="appconfig" name="appconfig"></a>

##### AppConfig

```ts
AppConfig: 13;
```

###### 另见

[appConfigDir](/zh-cn/reference/javascript/api/namespacepath/#appconfigdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L71

<a id="appdata" name="appdata"></a>

##### AppData

```ts
AppData: 14;
```

###### 另见

[appDataDir](/zh-cn/reference/javascript/api/namespacepath/#appdatadir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L75

<a id="applocaldata" name="applocaldata"></a>

##### AppLocalData

```ts
AppLocalData: 15;
```

###### 另见

[appLocalDataDir](/zh-cn/reference/javascript/api/namespacepath/#applocaldatadir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L79

<a id="applog" name="applog"></a>

##### AppLog

```ts
AppLog: 17;
```

###### 另见

[appLogDir](/zh-cn/reference/javascript/api/namespacepath/#applogdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L87

<a id="audio" name="audio"></a>

##### Audio

```ts
Audio: 1;
```

###### 另见

[audioDir](/zh-cn/reference/javascript/api/namespacepath/#audiodir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L23

<a id="cache" name="cache"></a>

##### Cache

```ts
Cache: 2;
```

###### 另见

[cacheDir](/zh-cn/reference/javascript/api/namespacepath/#cachedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L27

<a id="config" name="config"></a>

##### Config

```ts
Config: 3;
```

###### 另见

[configDir](/zh-cn/reference/javascript/api/namespacepath/#configdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L31

<a id="data" name="data"></a>

##### Data

```ts
Data: 4;
```

###### 另见

[dataDir](/zh-cn/reference/javascript/api/namespacepath/#datadir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L35

<a id="desktop" name="desktop"></a>

##### Desktop

```ts
Desktop: 18;
```

###### 另见

[desktopDir](/zh-cn/reference/javascript/api/namespacepath/#desktopdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L91

<a id="document" name="document"></a>

##### Document

```ts
Document: 6;
```

###### 另见

[documentDir](/zh-cn/reference/javascript/api/namespacepath/#documentdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L43

<a id="download" name="download"></a>

##### Download

```ts
Download: 7;
```

###### 另见

[downloadDir](/zh-cn/reference/javascript/api/namespacepath/#downloaddir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L47

<a id="executable" name="executable"></a>

##### Executable

```ts
Executable: 19;
```

###### 另见

[executableDir](/zh-cn/reference/javascript/api/namespacepath/#executabledir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L95

<a id="font" name="font"></a>

##### Font

```ts
Font: 20;
```

###### 另见

[fontDir](/zh-cn/reference/javascript/api/namespacepath/#fontdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L99

<a id="home" name="home"></a>

##### Home

```ts
Home: 21;
```

###### 另见

[homeDir](/zh-cn/reference/javascript/api/namespacepath/#homedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L103

<a id="localdata" name="localdata"></a>

##### LocalData

```ts
LocalData: 5;
```

###### 另见

[localDataDir](/zh-cn/reference/javascript/api/namespacepath/#localdatadir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L39

<a id="picture" name="picture"></a>

##### Picture

```ts
Picture: 8;
```

###### 另见

[pictureDir](/zh-cn/reference/javascript/api/namespacepath/#picturedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L51

<a id="public" name="public"></a>

##### Public

```ts
Public: 9;
```

###### 另见

[publicDir](/zh-cn/reference/javascript/api/namespacepath/#publicdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L55

<a id="resource" name="resource"></a>

##### Resource

```ts
Resource: 11;
```

###### 另见

[resourceDir](/zh-cn/reference/javascript/api/namespacepath/#resourcedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L63

<a id="runtime" name="runtime"></a>

##### Runtime

```ts
Runtime: 22;
```

###### 另见

[runtimeDir](/zh-cn/reference/javascript/api/namespacepath/#runtimedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L107

<a id="temp" name="temp"></a>

##### Temp

```ts
Temp: 12;
```

###### 另见

[tempDir](/zh-cn/reference/javascript/api/namespacepath/#tempdir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L67

<a id="template" name="template"></a>

##### Template

```ts
Template: 23;
```

###### 另见

[templateDir](/zh-cn/reference/javascript/api/namespacepath/#templatedir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L111

<a id="video" name="video"></a>

##### Video

```ts
Video: 10;
```

###### 另见

[videoDir](/zh-cn/reference/javascript/api/namespacepath/#videodir) 以获取更多信息。

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L59

## 函数

<a id="appcachedir" name="appcachedir"></a>

### appCacheDir()

```ts
function appCacheDir(): Promise<string>;
```

返回适合作为应用缓存文件存放位置的目录路径。
解析为 `${cacheDir}/${bundleIdentifier}`，其中 `bundleIdentifier` 是 `tauri.conf.json` 中配置的 [`identifier`](https://v2.tauri.app/reference/config/#identifier) 值。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { appCacheDir } from '@tauri-apps/api/path';
const appCacheDirPath = await appCacheDir();
```

#### 版本要求

1.2.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L176

---

<a id="appconfigdir" name="appconfigdir"></a>

### appConfigDir()

```ts
function appConfigDir(): Promise<string>;
```

返回适合作为应用配置文件存放位置的目录路径。
解析为 `${configDir}/${bundleIdentifier}`，其中 `bundleIdentifier` 是 `tauri.conf.json` 中配置的 [`identifier`](https://v2.tauri.app/reference/config/#identifier) 值。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { appConfigDir } from '@tauri-apps/api/path';
const appConfigDirPath = await appConfigDir();
```

#### 版本要求

1.2.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L125

---

<a id="appdatadir" name="appdatadir"></a>

### appDataDir()

```ts
function appDataDir(): Promise<string>;
```

返回适合作为应用数据文件存放位置的目录路径。
解析为 `${dataDir}/${bundleIdentifier}`，其中 `bundleIdentifier` 是 `tauri.conf.json` 中配置的 [`identifier`](https://v2.tauri.app/reference/config/#identifier) 值。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
```

#### 版本要求

1.2.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L142

---

<a id="applocaldatadir" name="applocaldatadir"></a>

### appLocalDataDir()

```ts
function appLocalDataDir(): Promise<string>;
```

返回适合作为应用本地数据文件存放位置的目录路径。
解析为 `${localDataDir}/${bundleIdentifier}`，其中 `bundleIdentifier` 是 `tauri.conf.json` 中配置的 [`identifier`](https://v2.tauri.app/reference/config/#identifier) 值。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { appLocalDataDir } from '@tauri-apps/api/path';
const appLocalDataDirPath = await appLocalDataDir();
```

#### 版本要求

1.2.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L159

---

<a id="applogdir" name="applogdir"></a>

### appLogDir()

```ts
function appLogDir(): Promise<string>;
```

返回适合作为应用日志文件存放位置的目录路径。

平台差异

- **Linux：** 解析为 `${configDir}/${bundleIdentifier}/logs`.
- **macOS：** 解析为 `${homeDir}/Library/Logs/{bundleIdentifier}`
- **Windows：** 解析为 `${configDir}/${bundleIdentifier}/logs`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { appLogDir } from '@tauri-apps/api/path';
const appLogDirPath = await appLogDir();
```

#### 版本要求

1.2.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L604

---

<a id="audiodir" name="audiodir"></a>

### audioDir()

```ts
function audioDir(): Promise<string>;
```

返回用户音频目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_MUSIC_DIR`.
- **macOS：** 解析为 `$HOME/Music`.
- **Windows：** 解析为 `{FOLDERID_Music}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { audioDir } from '@tauri-apps/api/path';
const audioDirPath = await audioDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L198

---

<a id="basename" name="basename"></a>

### basename()

```ts
function basename(path, ext?): Promise<string>;
```

返回 `path` 的最后一段（会忽略末尾目录分隔符）。

#### 参数

| Parameter | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `path`    | `string` | -                                                                |
| `ext`?    | `string` | An optional file extension to be removed from the returned path. |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { basename } from '@tauri-apps/api/path';
const base = await basename('path/to/app.conf');
assert(base === 'app.conf');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L734

---

<a id="cachedir" name="cachedir"></a>

### cacheDir()

```ts
function cacheDir(): Promise<string>;
```

返回用户缓存目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_CACHE_HOME` or `$HOME/.cache`.
- **macOS：** 解析为 `$HOME/Library/Caches`.
- **Windows：** 解析为 `{FOLDERID_LocalAppData}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { cacheDir } from '@tauri-apps/api/path';
const cacheDirPath = await cacheDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L220

---

<a id="configdir" name="configdir"></a>

### configDir()

```ts
function configDir(): Promise<string>;
```

返回用户配置目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_CONFIG_HOME` or `$HOME/.config`.
- **macOS：** 解析为 `$HOME/Library/Application Support`.
- **Windows：** 解析为 `{FOLDERID_RoamingAppData}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { configDir } from '@tauri-apps/api/path';
const configDirPath = await configDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L242

---

<a id="datadir" name="datadir"></a>

### dataDir()

```ts
function dataDir(): Promise<string>;
```

返回用户数据目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS：** 解析为 `$HOME/Library/Application Support`.
- **Windows：** 解析为 `{FOLDERID_RoamingAppData}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { dataDir } from '@tauri-apps/api/path';
const dataDirPath = await dataDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L264

---

<a id="delimiter" name="delimiter"></a>

### delimiter()

```ts
function delimiter(): string;
```

返回平台相关的路径列表分隔符：

- Windows 为 `;`
- POSIX 为 `:`

#### 返回值

`string`

#### 版本要求

2.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L644

---

<a id="desktopdir" name="desktopdir"></a>

### desktopDir()

```ts
function desktopDir(): Promise<string>;
```

返回用户桌面目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DESKTOP_DIR`.
- **macOS：** 解析为 `$HOME/Desktop`.
- **Windows：** 解析为 `{FOLDERID_Desktop}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { desktopDir } from '@tauri-apps/api/path';
const desktopPath = await desktopDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L286

---

<a id="dirname" name="dirname"></a>

### dirname()

```ts
function dirname(path): Promise<string>;
```

返回给定 `path` 的父目录（会忽略末尾目录分隔符）。

#### 参数

| Parameter | Type     |
| --------- | -------- |
| `path`    | `string` |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { dirname } from '@tauri-apps/api/path';
const dir = await dirname('/path/to/somedir/');
assert(dir === '/path/to');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L703

---

<a id="documentdir" name="documentdir"></a>

### documentDir()

```ts
function documentDir(): Promise<string>;
```

返回用户文档目录的路径。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { documentDir } from '@tauri-apps/api/path';
const documentDirPath = await documentDir();
```

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOCUMENTS_DIR`.
- **macOS：** 解析为 `$HOME/Documents`.
- **Windows：** 解析为 `{FOLDERID_Documents}`.

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L308

---

<a id="downloaddir" name="downloaddir"></a>

### downloadDir()

```ts
function downloadDir(): Promise<string>;
```

返回用户下载目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_DOWNLOAD_DIR`.
- **macOS：** 解析为 `$HOME/Downloads`.
- **Windows：** 解析为 `{FOLDERID_Downloads}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { downloadDir } from '@tauri-apps/api/path';
const downloadDirPath = await downloadDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L330

---

<a id="executabledir" name="executabledir"></a>

### executableDir()

```ts
function executableDir(): Promise<string>;
```

返回用户可执行文件目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
- **macOS：** 不支持。
- **Windows：** 不支持。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { executableDir } from '@tauri-apps/api/path';
const executableDirPath = await executableDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L352

---

<a id="extname" name="extname"></a>

### extname()

```ts
function extname(path): Promise<string>;
```

返回 `path` 的扩展名。

#### 参数

| Parameter | Type     |
| --------- | -------- |
| `path`    | `string` |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { extname } from '@tauri-apps/api/path';
const ext = await extname('/path/to/file.html');
assert(ext === 'html');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L718

---

<a id="fontdir" name="fontdir"></a>

### fontDir()

```ts
function fontDir(): Promise<string>;
```

返回用户字体目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
- **macOS：** 解析为 `$HOME/Library/Fonts`.
- **Windows：** 不支持。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { fontDir } from '@tauri-apps/api/path';
const fontDirPath = await fontDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L374

---

<a id="homedir" name="homedir"></a>

### homeDir()

```ts
function homeDir(): Promise<string>;
```

返回用户主目录（Home）的路径。

平台差异

- **Linux：** 解析为 `$HOME`.
- **macOS：** 解析为 `$HOME`.
- **Windows：** 解析为 `{FOLDERID_Profile}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { homeDir } from '@tauri-apps/api/path';
const homeDirPath = await homeDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L396

---

<a id="isabsolute" name="isabsolute"></a>

### isAbsolute()

```ts
function isAbsolute(path): Promise<boolean>;
```

返回该路径是否为绝对路径。

#### 参数

| Parameter | Type     |
| --------- | -------- |
| `path`    | `string` |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### 示例

```typescript
import { isAbsolute } from '@tauri-apps/api/path';
assert(await isAbsolute('/home/tauri'));
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L748

---

<a id="join" name="join"></a>

### join()

```ts
function join(...paths): Promise<string>;
```

使用平台相关分隔符连接所有给定的 `path` 片段，并对结果路径进行规范化。

#### 参数

| Parameter  | Type       |
| ---------- | ---------- |
| ...`paths` | `string`[] |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { join, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await join(appDataDirPath, 'users', 'tauri', 'avatar.png');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L688

---

<a id="localdatadir" name="localdatadir"></a>

### localDataDir()

```ts
function localDataDir(): Promise<string>;
```

返回用户本地数据目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_DATA_HOME` or `$HOME/.local/share`.
- **macOS：** 解析为 `$HOME/Library/Application Support`.
- **Windows：** 解析为 `{FOLDERID_LocalAppData}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { localDataDir } from '@tauri-apps/api/path';
const localDataDirPath = await localDataDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L418

---

<a id="normalize" name="normalize"></a>

### normalize()

```ts
function normalize(path): Promise<string>;
```

规范化给定 path，解析 .. 与 . 片段，并处理符号链接。

#### 参数

| Parameter | Type     |
| --------- | -------- |
| `path`    | `string` |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { normalize, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await normalize(`${appDataDirPath}/../users/tauri/avatar.png`);
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L673

---

<a id="picturedir" name="picturedir"></a>

### pictureDir()

```ts
function pictureDir(): Promise<string>;
```

返回用户图片目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PICTURES_DIR`.
- **macOS：** 解析为 `$HOME/Pictures`.
- **Windows：** 解析为 `{FOLDERID_Pictures}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { pictureDir } from '@tauri-apps/api/path';
const pictureDirPath = await pictureDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L440

---

<a id="publicdir" name="publicdir"></a>

### publicDir()

```ts
function publicDir(): Promise<string>;
```

返回用户公共目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_PUBLICSHARE_DIR`.
- **macOS：** 解析为 `$HOME/Public`.
- **Windows：** 解析为 `{FOLDERID_Public}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { publicDir } from '@tauri-apps/api/path';
const publicDirPath = await publicDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L462

---

<a id="resolve" name="resolve"></a>

### resolve()

```ts
function resolve(...paths): Promise<string>;
```

将一组 `paths` 或 `path` 片段解析为绝对路径。

#### 参数

| Parameter  | Type       |
| ---------- | ---------- |
| ...`paths` | `string`[] |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { resolve, appDataDir } from '@tauri-apps/api/path';
const appDataDirPath = await appDataDir();
const path = await resolve(appDataDirPath, '..', 'users', 'tauri', 'avatar.png');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L658

---

<a id="resolveresource" name="resolveresource"></a>

### resolveResource()

```ts
function resolveResource(resourcePath): Promise<string>;
```

将路径解析为资源文件的绝对路径。

#### 参数

| Parameter      | Type     | Description                                                                                                                                                            |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourcePath` | `string` | The path to the resource. Must follow the same syntax as defined in `tauri.conf.json > bundle > resources`, i.e. keeping subfolders and parent dir components (`../`). |

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

资源文件的完整路径。

#### 示例

```typescript
import { resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('script.sh');
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L515

---

<a id="resourcedir" name="resourcedir"></a>

### resourceDir()

```ts
function resourceDir(): Promise<string>;
```

返回应用资源目录的路径。
如需解析资源路径，请参见 [`resolveResource`](/zh-cn/reference/javascript/api/namespacepath/#resolveresource)。

## 平台差异

尽管这里给出了该函数会解析到的精确路径，
但这并非稳定契约，未来可能发生变化。

- **Windows：** 解析为 the directory that contains the main executable.
- **Linux:** 当在 AppImage 中运行时，`APPDIR` 变量会被设置为
  应用的挂载位置，此时资源目录将为 `${APPDIR}/usr/lib/${exe_name}`。
  若不是在 AppImage 中运行，路径为 `/usr/lib/${exe_name}`。
  当应用从 `src-tauri/target/(debug|release)/` 运行时，路径为 `${exe_dir}/../lib/${exe_name}`。
- **macOS：** 解析为 `${exe_dir}/../Resources` (inside .app).
- **iOS：** 解析为 `${exe_dir}/assets`。
- **Android：** 目前资源以 assets 形式存储在 APK 中，因此这不是常规文件系统路径，
  此处会返回特殊 URI 前缀 `asset://localhost/`，可与 [文件系统插件](https://tauri.app/plugin/file-system/) 配合使用，

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { resourceDir } from '@tauri-apps/api/path';
const resourceDirPath = await resourceDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L495

---

<a id="runtimedir" name="runtimedir"></a>

### runtimeDir()

```ts
function runtimeDir(): Promise<string>;
```

返回用户运行时目录的路径。

平台差异

- **Linux：** 解析为 `$XDG_RUNTIME_DIR`.
- **macOS：** 不支持。
- **Windows：** 不支持。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { runtimeDir } from '@tauri-apps/api/path';
const runtimeDirPath = await runtimeDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L538

---

<a id="sep" name="sep"></a>

### sep()

```ts
function sep(): string;
```

返回平台相关的路径分隔符：

- Windows 为 `\`
- POSIX 为 `/`

#### 返回值

`string`

#### 版本要求

2.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L633

---

<a id="tempdir" name="tempdir"></a>

### tempDir()

```ts
function tempDir(): Promise<string>;
```

返回临时目录路径。

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { tempDir } from '@tauri-apps/api/path';
const temp = await tempDir();
```

#### 版本要求

2.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L620

---

<a id="templatedir" name="templatedir"></a>

### templateDir()

```ts
function templateDir(): Promise<string>;
```

返回用户模板目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_TEMPLATES_DIR`.
- **macOS：** 不支持。
- **Windows：** 解析为 `{FOLDERID_Templates}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { templateDir } from '@tauri-apps/api/path';
const templateDirPath = await templateDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L560

---

<a id="videodir" name="videodir"></a>

### videoDir()

```ts
function videoDir(): Promise<string>;
```

返回用户视频目录的路径。

平台差异

- **Linux：** 解析为 [`xdg-user-dirs`](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)' `XDG_VIDEOS_DIR`.
- **macOS：** 解析为 `$HOME/Movies`.
- **Windows：** 解析为 `{FOLDERID_Videos}`.

#### 返回值

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### 示例

```typescript
import { videoDir } from '@tauri-apps/api/path';
const videoDirPath = await videoDir();
```

#### 版本要求

1.0.0

**源码**: https://github.com/tauri-apps/tauri/blob/dev/packages/api/src/path.ts#L582
