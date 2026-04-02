# 邵涵个人站点使用说明（readme_me）

这份文档面向你自己维护站点使用，重点说明：

- 每个标签页（about/blog/cv 等）现在展示什么
- 这些内容改哪个文件、在哪个位置改
- 哪些是模板占位内容，后续你确认后我可以帮你批量注释/删除
- 如何增减导航标签页、如何临时隐藏页面
- 首页和各类内容的推荐放置方案

---

## 1. 先看总入口：导航标签页是怎么来的

### 1.1 导航页主要在 `_pages/*.md`

页面是否出现在顶部导航，主要由每个页面 front matter 的 `nav: true/false` 决定。

例如：

- `nav: true` -> 显示在导航栏
- `nav: false` 或不写 -> 不显示在导航栏（但页面 URL 仍可访问）

排序由 `nav_order` 控制，数字越小越靠前。

---

## 2. 当前各标签页清单（含现在内容 + 维护文件）

下面按你当前仓库实际情况列出：

### 2.1 About（首页）

- URL：`/`
- 文件：`/_pages/about.md`
- 当前作用：
  - 头像、单位、联系方式（front matter 里 `profile`）
  - 中英双语个人介绍
  - 研究兴趣
  - 教育经历
  - **工作经历（已更新为 2024.04–2024.09）**
  - 论文页链接、联系方式
  - 还会显示公告和最近博客（front matter 里 `announcements`、`latest_posts`）
- 建议放什么：
  - 最核心、最“给陌生访客看的第一屏”信息
  - 1 段简介 + 研究方向 + 代表经历（教育/工作/代表项目）
  - 联系方式和外链（GitHub、Scholar）

---

### 2.2 Blog

- URL：`/blog/`
- 文件：`/_pages/blog.md`
- 内容来源：
  - 文章来自 `/_posts/`
  - 也会受 `_config.yml` 中博客设置影响（如分页、外部 RSS）
- 当前状态：
  - 已启用导航（`nav: true`）
  - 支持分页、标签、分类、精选文章卡片
- 建议放什么：
  - 技术笔记、项目复盘、论文阅读、实验记录
  - 保持每篇有摘要和标签，方便搜索

---

### 2.3 CV

- URL：`/cv/`
- 文件：`/_pages/cv.md`
- 当前作用：
  - 在线简历版（教育、工作、项目、奖项、技能）
  - 提供 PDF 下载链接 `cv_pdf`
- 当前状态：
  - **工作经历已更新为 2024.04–2024.09**
- 建议放什么：
  - 相对结构化、HR/老师快速扫描的信息
  - 与首页相比可更“条目化”、少叙事

---

### 2.4 Publications

- URL：`/publications/`
- 文件：`/_pages/publications.md`
- 数据源：
  - 论文条目主要来自 `/_bibliography/papers.bib`
- 当前作用：
  - 自动渲染论文列表（含 bib 检索）
- 建议放什么：
  - 论文、预印本、投稿中（可标注状态）
  - 补充 PDF/code/slides/preview

---

### 2.5 Projects

- URL：`/projects/`
- 文件：`/_pages/projects.md`
- 数据源：
  - 各项目内容在 `/_projects/*.md`
- 当前作用：
  - 以项目卡片方式展示项目
  - 目前按分类（work/fun）显示（若项目未设置对应分类，会出现空分类区块）
- 建议放什么：
  - 你最想展示的工程成果（每个项目强调问题-方法-结果）
  - 每个项目加图、链接、关键词

---

### 2.6 Repositories

- URL：`/repositories/`
- 文件：`/_pages/repositories.md`
- 数据源：
  - `/_data/repositories.yml`
- 当前作用：
  - 自动拉取并展示 GitHub 用户/仓库卡片与 trophy
- 建议放什么：
  - 如果你 GitHub 活跃，适合保留
  - 如果暂时不想展示，可隐藏这个标签页（见第 4 节）

---

### 2.7 Teaching

- URL：`/teaching/`
- 文件：`/_pages/teaching.md`
- 数据源：
  - `/_teachings/*.md`
  - 页面中还引用了日历 include
- 当前状态：
  - 含明显模板式描述文字
  - 日历 ID 仍是模板示例（`test@gmail.com`）
- 建议：
  - 如果你目前没有教学内容，建议直接隐藏导航入口

---

### 2.8 People

- URL：`/people/`
- 文件：`/_pages/profiles.md`
- 当前状态：
  - 明显模板占位内容（重复 profile、`about_einstein.md`、示例地址）
- 建议：
  - 个人主页通常不需要 this page，建议先隐藏

---

### 2.9 News

- URL：`/news/`
- 文件：`/_pages/news.md`
- 数据源：
  - `/_news/*.md`
- 当前状态：
  - 页面存在，但默认**不在导航**（未设置 `nav: true`）
- 建议：
  - 可用于“获奖/论文接收/项目节点”时间线
  - 若你希望显示在导航，补上 `nav: true` + `nav_order`

---

### 2.10 Submenus（下拉菜单）

- 文件：`/_pages/dropdown.md`
- 当前状态：
  - 该页本身是导航中的“下拉菜单容器”，其子项指向 `/books/` 和 `/blog/`
- 建议：
  - 如果不需要下拉菜单，直接隐藏它（`nav: false`）
  - 或删掉 children，仅保留你真正要聚合的几个子页面

---

### 2.11 Bookshelf（书单）

- URL：`/books/`
- 文件：`/_pages/books.md`
- 数据源：
  - `/_books/*.md`
- 当前状态：
  - 页面 `nav: false`，不直接显示在导航
  - 但现在通过 `dropdown.md` 作为子菜单被间接入口到达
- 建议：
  - 如果你确实做阅读笔记，保留
  - 否则可先去掉 dropdown 的 books 子项

---

## 3. 你刚提到的时间修改：已完成

已同步修改两处工作经历时间为 `2024.04–2024.09`：

1. `/_pages/about.md`（中文“工作经历”）
2. `/_pages/cv.md`（“工作经历”）

---

## 4. 增减标签页、打开关闭页面的方法（最常用）

### 4.1 隐藏某个导航标签页（最简单）

编辑对应页面 front matter：

- 把 `nav: true` 改为 `nav: false`
- 或直接删除 `nav:` 行

示例页面：

- `/_pages/repositories.md`
- `/_pages/teaching.md`
- `/_pages/profiles.md`
- `/_pages/blog.md`
- `/_pages/projects.md`
- `/_pages/publications.md`
- `/_pages/cv.md`

> 注意：隐藏后只是“导航不显示”，页面 URL 仍能访问。

---

### 4.2 调整导航顺序

在页面 front matter 改 `nav_order` 数字即可：

- 数字小 -> 靠前
- 建议用 1,2,3... 连续编号方便维护

---

### 4.3 完全停用一个页面（不仅仅是隐藏导航）

可选做法（按保守到彻底）：

1. 仅 `nav: false`（最保守）
2. 保留文件但把内容清空为“建设中”
3. 在 `_config.yml -> exclude` 中加入该页面路径（构建不输出）
4. 直接删除该页面文件（最彻底）

---

### 4.4 新增一个标签页

1. 在 `/_pages/` 新建一个 `xxx.md`
2. 添加 front matter：

```yaml
---
layout: page
title: xxx
permalink: /xxx/
nav: true
nav_order: N
---
```

3. 写正文内容即可

---

## 5. 内容应该放哪（你的个人站推荐结构）

建议你最终导航尽量精简为：

1. about（首页）
2. publications（如果有论文）
3. projects
4. cv
5. blog（可选）

可先隐藏：

- people（目前模板占位明显）
- teaching（若无教学经历）
- repositories（看你是否希望展示 GitHub 自动卡片）
- submenus/books（如果暂时不用读书记录）

---

## 6. 常见占位内容识别（你后续可逐条告诉我删/注释）

当前“明显占位”候选：

1. `/_pages/profiles.md`：
   - `about_einstein.md`
   - `555 your office number` / `123 your address street`
2. `/_pages/teaching.md`：
   - 页面说明为模板文案
   - `calendar_id='test@gmail.com'`
3. `_config.yml` 中：
   - `external_sources` 默认 medium/google 示例（可能与你无关）
4. `/_pages/dropdown.md`：
   - 子菜单结构是模板展示型，不一定适合个人站

你下一步只要告诉我：

- 哪些页面你想保留/隐藏
- 哪些段落你认定是占位内容

我就能直接帮你做“注释或删除”一版。

---

## 7. 每类内容的常用编辑位置（速查）

- 站点总配置：`/_config.yml`
- 首页内容：`/_pages/about.md`
- CV 页面：`/_pages/cv.md`
- 论文数据：`/_bibliography/papers.bib`
- 项目条目：`/_projects/*.md`
- 博客文章：`/_posts/*.md`
- 新闻动态：`/_news/*.md`
- 教学条目：`/_teachings/*.md`
- 社交链接：`/_data/socials.yml`
- 仓库展示：`/_data/repositories.yml`

---

## 8. 本地检查与预览（你自己常用）

格式检查：

```bash
npx prettier . --check
```

格式修复：

```bash
npx prettier . --write
```

构建（当前环境可能因外网拉取 external_sources 失败）：

```bash
bundle exec jekyll build
```

---

## 9. 下一步建议（你确认后我可直接执行）

建议你按下面格式回复我，我可以一次性批量改：

1. 保留标签页：`about, projects, cv, publications`
2. 隐藏标签页：`teaching, people, repositories, dropdown`
3. 删除占位内容：
   - `teaching.md` 模板段落
   - `profiles.md` 全部示例 profile
4. 首页保留章节：`关于我、研究兴趣、教育经历、工作经历、联系方式`
5. 首页删除章节：`英文区块`（若你想只保留中文）

我会按你的选择输出一版“干净导航 + 去占位内容”的站点结构。
