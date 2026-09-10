---
layout: page
title: 项目
permalink: /zh/projects/
description: 覆盖机构设计、底层控制、遥操作、仿真与学习算法的机器人项目。
lang: zh
ref: projects
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
