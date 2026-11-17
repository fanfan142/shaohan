---
layout: page
title: Aero Hand Open 遥操作链路重构
author: 邵涵
permalink: /projects/aero-hand-open-teleop/
description: 将 Aero Hand Open 的遥操作通信层重构为 WebSocket 长连接，统一状态推送、指令下发与断线重连，并重做上位机与移动端。
category: software
tags: [WebSocket, Teleoperation, Aero Hand]
importance: 7
---

## 项目概述

Aero Hand Open 是一套开源灵巧手平台。其原始遥操作链路采用短连接轮询，在跨网络、跨设备场景下延迟与稳定性都不理想。本项目重构通信层，并把上位机与移动端一起改造。

## 核心工作

- **通信层重构**：由短连接轮询改为 WebSocket 长连接，统一双向消息格式。
- **状态与指令分离**：高频状态推送与低频指令下发走不同通道与优先级，避免相互阻塞。
- **断线重连**：重连退避与状态重同步，保证演示中断网后可自动恢复。
- **前端重构**：抽象可复用的连接状态、指令面板与实时曲线组件，同时重做上位机界面与移动端页面。
- **架构梳理**：绘制端到端数据流与模块依赖图，作为后续维护与社区文档的基础。

## 关键词

WebSocket、长连接、遥操作、断线重连、Aero Hand Open、上位机重构
