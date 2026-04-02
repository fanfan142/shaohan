# 邵涵个人站点维护手册（readme_me）

本手册面向你自己维护站点，覆盖：

- 当前页面结构（包括已隐藏/已删除的页面）
- 每个页面作用、内容来源、编辑文件位置
- 如何启动本地预览、如何增减标签页
- 如何写占位内容与正式内容
- 常见操作清单（你后续自己可直接照做）

---

## 1. 当前页面策略（按你最新要求已整理）

### 1.1 当前保留并显示在导航栏的页面

1. `about`（首页）
2. `blog`（保留，简短占位）
3. `publications`（保留，简短占位）
4. `projects`（保留，只展示你已写好的项目）
5. `CV`（保留，简短占位）
6. `bookshelf`（已打开，简短占位）

### 1.2 当前隐藏（不在导航显示）的页面

1. `teaching`
2. `people`
3. `news`
4. `submenus`（dropdown 容器页）

> 说明：隐藏仅表示导航不显示，URL 通常仍可访问。

### 1.3 已删除内容

- 删除了 `_projects/` 下模板占位项目文件：
  - `1_project.md` ~ `9_project.md`
- 项目页现在仅展示你自己已编辑的项目文件（例如 UR5e、多领域耦合建模）。

---

## 2. 导航标签页控制原理（最关键）

导航显示主要由每个页面文件（`_pages/*.md`）头部 front matter 控制：

- `nav: true`：显示在顶部导航
- `nav: false`：不显示在顶部导航
- `nav_order: 数字`：导航顺序（数字越小越靠前）

示例：

```yaml
---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 3
---
```

---

## 3. 各页面说明（作用 + 改哪）

下面把“显示中 + 已隐藏 + 历史页面”全部列清楚。

### 3.1 about（首页）

- URL：`/`
- 文件：`/_pages/about.md`
- 作用：个人主页第一屏，展示身份、研究方向、经历、联系方式
- 适合放：
  - 1 段个人简介
  - 研究兴趣
  - 教育/工作（简要版）
  - 联系方式与外链
- 备注：工作时间已改为 `2024.04–2024.09`

---

### 3.2 blog（已保留，简短占位）

- URL：`/blog/`
- 文件：`/_pages/blog.md`
- 作用：博客入口
- 当前状态：简短占位文案（方便你后续自行填充）
- 正式内容来源：`/_posts/*.md`
- 每篇建议格式：
  - 文件名：`YYYY-MM-DD-title.md`
  - front matter：`layout/title/date/categories`
  - 正文：摘要 + 小节结构

---

### 3.3 CV（已保留，简短占位）

- URL：`/cv/`
- 文件：`/_pages/cv.md`
- 作用：在线简历入口
- 当前状态：简短占位文案
- 建议固定结构：
  - 教育背景
  - 工作经历
  - 项目经历
  - 荣誉奖项
  - 技能
- PDF 建议路径：`/assets/pdf/cv_shaohan.pdf`

---

### 3.4 publications（已保留，简短占位）

- URL：`/publications/`
- 文件：`/_pages/publications.md`
- 作用：论文页面入口
- 当前状态：简短占位文案
- 论文数据文件：`/_bibliography/papers.bib`
- 建议每条字段：
  - 标题、作者、年份、状态
  - `pdf/code/slides/doi` 等链接

---

### 3.5 projects（已保留，仅展示已写项目）

- URL：`/projects/`
- 文件：`/_pages/projects.md`
- 作用：项目卡片展示页
- 当前状态：
  - 模板项目文件已删
  - 仅显示 `_projects/` 内你保留的项目
- 主要内容来源：`/_projects/*.md`
- 项目条目建议字段：
  - `title`
  - `description`
  - `importance`
  - 正文写“概述/技术栈/核心工作/成果”

---

### 3.6 books（已打开，简短占位）

- URL：`/books/`
- 文件：`/_pages/books.md`
- 作用：书单与阅读记录
- 当前状态：已在导航显示 + 简短占位文案
- 条目来源：`/_books/*.md`
- 每本书建议内容：
  - 书名、作者
  - 阅读状态（在读/已读）
  - 2~5 句摘要
  - 个人评分/收获

---

### 3.7 teaching（已隐藏）

- URL：`/teaching/`
- 文件：`/_pages/teaching.md`
- 当前策略：先不显示
- 将来要恢复：把 `nav: false` 改回 `nav: true`
- 内容来源：`/_teachings/*.md`

---

### 3.8 people（已隐藏）

- URL：`/people/`
- 文件：`/_pages/profiles.md`
- 当前策略：先不显示
- 原因：该页通常适合团队主页，个人站一般不需要

---

### 3.9 news（已隐藏）

- URL：`/news/`
- 文件：`/_pages/news.md`
- 当前策略：先不显示
- 内容来源：`/_news/*.md`
- 若后续要恢复，适合放：获奖、论文录用、项目阶段里程碑

---

### 3.10 submenus / dropdown（已隐藏）

- 文件：`/_pages/dropdown.md`
- 作用：导航下拉菜单容器页
- 当前策略：隐藏，避免导航复杂化
- 若将来需要“导航分组”，可重新 `nav: true`

---

## 4. 如何新增/删除/隐藏标签页

### 4.1 新增一个标签页

1. 在 `/_pages/` 新建 `xxx.md`
2. 写 front matter：

```yaml
---
layout: page
title: xxx
permalink: /xxx/
nav: true
nav_order: 9
---
```

3. 写正文并本地预览。

### 4.2 隐藏一个标签页

把对应页面 front matter 设为：

```yaml
nav: false
```

### 4.3 永久删除一个页面

1. 删除页面文件（例如 `/_pages/xxx.md`）
2. 若有其他页面链接到它，一并删链接

---

## 5. 内容文件总索引（速查）

- 站点总配置：`/_config.yml`
- 首页：`/_pages/about.md`
- 博客页：`/_pages/blog.md`
- 博客正文：`/_posts/*.md`
- CV 页：`/_pages/cv.md`
- 论文页：`/_pages/publications.md`
- 论文数据：`/_bibliography/papers.bib`
- 项目页入口：`/_pages/projects.md`
- 项目条目：`/_projects/*.md`
- 书单页入口：`/_pages/books.md`
- 书单条目：`/_books/*.md`
- 动态页：`/_pages/news.md` + `/_news/*.md`
- 教学页：`/_pages/teaching.md` + `/_teachings/*.md`
- 人员页：`/_pages/profiles.md`

---

## 6. 本地启动与检查

### 6.1 推荐：本地构建检查

```bash
cd /home/runner/work/shaohan/shaohan
bundle exec jekyll build
```

> 你当前仓库有 external_sources（medium）抓取逻辑，在无外网环境可能构建失败；这不一定是内容错误。

### 6.2 格式检查

```bash
cd /home/runner/work/shaohan/shaohan
npx prettier . --check
```

修复格式：

```bash
npx prettier . --write
```

---

## 7. 占位格式模板（建议统一）

你后续可以统一用这类占位文本，后面再替换：

```md
## 页面占位

- 本页用途：
- 主要内容来源文件：
- 后续补充计划：
```

建议：每个占位页面都写“用途 + 数据来源 + 后续计划”三行，避免未来忘记。

---

## 8. 建议你下一步怎么做

1. 先在 `blog/cv/publications/books` 中逐个把占位替换成正式内容。
2. 项目页保持精简，只维护你最想展示的 2~6 个项目。
3. about 页保持“短而强”：简介 + 方向 + 代表经历 + 联系方式。
4. teaching/people/news 等页面，等有稳定内容再打开。

---

## 9. 你后续给我指令的推荐格式

为了让我一次改到位，你可以按这个格式发：

1. 打开页面：`xxx, yyy`
2. 关闭页面：`aaa, bbb`
3. 删除文件：`path1, path2`
4. 页面替换为占位：`/pages/xxx.md`
5. 页面填充正式内容：`给我正文草稿 or 要点`

我会按这个清单一次性完成并回传变更点。
