---
layout: page
title: Xbotics O6 / O20 灵巧手控制台
author: 邵涵
permalink: /projects/xbotics-hand-console/
description: 面向灵心巧手 O6/O20 的桌面控制工具，集成手势交互、动作库、宏执行、安全限幅、URDF 可视化与 OpenClaw。
category: software
tags: [O6, O20, PySide6, OpenClaw]
importance: 4
github: https://github.com/fanfan142/Xbotics-O6
---

## 项目概述

为灵心巧手 O6 和 O20 构建的桌面控制台，覆盖设备连接、关节控制、动作组织、可视化反馈和人机交互。O6 版本面向 Windows + PCAN，O20 版本提供 Windows/Linux 的跨平台运行路径。

## 核心能力

- 摄像头手势跟随、猜拳互动、固定姿态快捷控制和视觉映射。
- 从 LinkerHand Open-World Dataset 提取并复用 O6 动作轨迹。
- 将动作库和预设姿态按顺序、次数组织为宏队列。
- 轨迹播放统一经过速度、过冲和可选电流/力矩保护层。
- 显示关节位置、电流、温度、故障状态，并同步 URDF 模型与姿态数据。
- 提供 PyInstaller 打包流程、离线 OpenClaw 桥接和开发者说明。

## 仓库

- [Xbotics-O6](https://github.com/fanfan142/Xbotics-O6)
- [Xbotics-O20](https://github.com/fanfan142/Xbotics-O20)
