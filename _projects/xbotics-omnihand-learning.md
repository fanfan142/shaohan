---
layout: page
title: Xbotics OmniHand 开放学习资料仓库
author: 邵涵
permalink: /projects/xbotics-omnihand-learning/
description: 面向 OmniHand 2025 灵动款的九章开源学习资料，覆盖硬件安全、SDK、触觉、视觉遥操作、Quest 3、仿真与学习。
category: open-source
tags: [OmniHand, Tutorial, Teleoperation]
importance: 3
github: https://github.com/fanfan142/Xbotics-omnihand-learning
---

## 项目概述

2026-09 发布的开放学习资料仓库，面向 OmniHand 2025 灵动款 O10，目标是把硬件接入、底层控制和上层遥操作与学习串成一条可复现的工程路径。

## 内容结构

1. 认识与环境：产品结构、自由度、触觉能力与开发环境。
2. 硬件与安全：供电、通信、上位机、只读诊断与停止流程。
3. SDK 与通信：Python SDK 生命周期、设备发现、状态回读与 API。
4. 关节控制：关节编号、角度/弧度、电机位置、限幅、限速与回读。
5. 触觉感知：采样、基线、阈值、结印手势与触觉闭环。
6. 上位机与视觉遥操：PySide6、MediaPipe、摄像头输入与视觉映射。
7. Quest 3 遥操与重定向：HTS 数据链、标定与 16 到 10 的自由度重定向。
8. 仿真与学习：MJCF、MuJoCo、示范抓取、行为克隆与 PPO。
9. 数据实践与交付：数据格式、实践项目与 QA。

## 工程重点

- 将真机安全边界、离线代码验证和需要硬件参与的步骤明确分开。
- 提供 Windows/Python、Quest 3 和 MuJoCo 等不同运行环境的验证入口。
- 记录 SDK、素材与第三方上游项目的依赖和许可范围。

仓库：[fanfan142/Xbotics-omnihand-learning](https://github.com/fanfan142/Xbotics-omnihand-learning)
