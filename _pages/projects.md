---
layout: page
title: Projects
permalink: /projects/
description: Selected robotics projects across mechanism design, control, teleoperation, simulation, and learning.
lang: en
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
