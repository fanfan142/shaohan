---
layout: page
title: OmniHand Quest 3 遥操作与动作重定向
author: 邵涵
permalink: /projects/omnihand-quest3/
description: 建立 Quest 3 手部追踪数据链，完成标定、自由度重定向和 Windows 发布，用于灵巧手遥操作。
category: robotics
tags: [Quest 3, Teleoperation, Retargeting]
importance: 2
github: https://github.com/fanfan142/omnihand-quest3
---

## 项目概述

面向 OmniHand 2025 灵动款构建 Quest 3 遥操作链路，将手部追踪数据映射到灵巧手关节，并将标定、重定向、运行与发布整理为可复用工具。

## 核心工作

- 接入 Quest 3 手部追踪数据流，完成设备连接、数据接收与运行状态检查。
- 建立映射和标定流程，处理 Quest 手部自由度到 OmniHand 关节的重定向。
- 整理 MuJoCo/MJCF 仿真资产和 Windows 发布包，支持离线复现与真机接入。
- 为上层视觉遥操、动作采集和后续学习控制提供数据基础。

仓库：[fanfan142/omnihand-quest3](https://github.com/fanfan142/omnihand-quest3)
