---
layout: page
title: UR5 + OmniHand 2025 臂手协同螺纹操作
author: 邵涵
permalink: /projects/ur5-omnihand-screw/
description: UR5 与 OmniHand 2025 组成的臂手平台，完成螺钉旋入与螺母预接合，重点处理掌内相对运动补偿与轴向顺应。
category: research
tags: [UR5, OmniHand, Screw Driving]
importance: 8
---

## 项目概述

用 UR5 完成大范围定位、OmniHand 2025 完成精细操作，构成"臂定位 + 手操作"的协同体系，任务为螺钉旋入与螺母预接合。

## 平台

- UR5（CB3 控制柜，urcontrol 3.9.0.0），实际 TCP 与示教点存在约 74 mm / 34 mm 偏置，需在标定中显式扣除。
- OmniHand 2025，多指关节位置控制，触觉可选。
- Ubuntu 24 主机，仿真与真机共用一套配置管理。

## 核心工作

1. **任务分解**：把"抓取—预接合—轴向随动—旋入"拆成可独立验收的子任务，避免一次性堆叠全流程依赖。
2. **掌内相对运动补偿**：TCP 进给时螺母在掌内仍会滑动，按 TCP 位移直接换算进给量会产生系统性误差，需单独估计并扣除。
3. **轴向顺应**：预接合阶段先做被动轴向随动，再引入主动进给。
4. **验收口径分离**：主动臂进给精度与手内旋入成功率分别验收，互不掩盖。

## 关键词

UR5、OmniHand 2025、螺钉旋入、螺母预接合、TCP 标定、臂手协同
