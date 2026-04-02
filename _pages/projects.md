---
layout: page
title: projects
permalink: /projects/
description: selected projects
nav: true
nav_order: 3
horizontal: false
---

<!-- 仅展示 _projects/ 中保留的项目 -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
