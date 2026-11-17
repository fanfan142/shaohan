---
layout: page
title: 多手型灵巧手内强化学习旋转
author: 邵涵
permalink: /projects/dex-rounding/
description: O30、O20、O10 三款灵巧手在 MuJoCo / MJX 中的手内旋转训练，以及从仿真策略到真机的迁移。
category: research
tags: [Reinforcement Learning, In-hand Manipulation, MuJoCo, Sim-to-Real]
importance: 1
---

## 项目概述

在手内操作任务中打通"仿真训练 → 策略评测 → 真机复现"的完整链路，并在三款不同规格的灵巧手上验证同一套方法是否成立。

| 手型 | 目标物体 | 验证 |
| --- | --- | --- |
| O30 | 80 mm 球 | 仿真旋转 |
| O20 | 80 mm 球（有触觉 / 无触觉） | 仿真旋转 |
| O10 | 50 mm 方块 | 仿真旋转，真机开环回放 |

## 核心工作

- **多手型模型适配**：按实物尺寸、关节限位与腱绳耦合关系校正 MJCF 资产，使三只手在同一训练框架下可比。
- **任务与场景搭建**：掌心朝上构型、物体初始化、奖励项与终止条件设计，以及以累计转角为核心的评测指标。
- **训练与评测流程**：批量训练、checkpoint 管理、固定种子评测，以及跨手型、跨物体的对照实验组织。
- **真机迁移**：将 O10 方块策略导出为轨迹，在真机上完成开环执行。

## 技术要点

- 仿真后端为 MuJoCo / MJX，配合 mujoco_warp 加速训练吞吐。
- PPO 为主线，教师-学生蒸馏用于把带特权信息的教师策略迁移到学生策略。
- 域随机化覆盖质量、摩擦、执行器增益、观测噪声与延迟。
- 策略导出 ONNX，真机侧按固定控制周期执行。

## 关键词

手内操作、in-hand rotation、PPO、教师-学生蒸馏、域随机化、MuJoCo、MJX、sim-to-real
