# 产品展示网站

一个用于展示鞋类产品的响应式网站，支持多语言翻译、产品管理和配置功能。

## 功能特性

- 产品系列展示
- 多语言支持（中文、英文、韩文）
- AI翻译集成（Google Translate API、百度翻译API）
- 产品管理和配置
- 响应式设计
- 图片轮播
- 产品详情展示

## 项目结构

```
├── css/              # 样式文件
│   └── style.css     # 主样式文件
├── js/               # JavaScript文件
│   └── script.js     # 主脚本文件
├── 产品图/           # 产品图片目录
├── about.html        # 联系我们页面
├── config.html       # 配置页面
├── index.html        # 首页
├── products-config.json # 产品配置文件
├── upload.html       # 上传页面
└── README.md         # 项目说明
```

## 快速开始

1. 克隆项目到本地
2. 启动本地服务器（如使用 `python -m http.server 8000`）
3. 访问 `http://localhost:8000` 查看网站
4. 访问 `http://localhost:8000/config.html` 进行配置

## 配置说明

### 翻译配置
- 在配置页面可以设置翻译API（Google Translate API或百度翻译API）
- 可以使用AI翻译更新词典
- 支持批量导出和导入翻译词典

### 产品管理
- 可以扫描产品图文件夹自动生成产品系列
- 可以调整产品系列和产品的显示顺序
- 支持产品信息的编辑和管理

### 快速链接配置
- 可以自定义页脚快速链接
- 支持拖拽调整链接顺序

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage 数据存储
- Google Translate API / 百度翻译API

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT
