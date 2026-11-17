---
layout: page
title: Aero Hand Open 遥操作链路重构
author: 邵涵
permalink: /projects/aero-hand-open-teleop/
description: 进行时 · 把 Aero Hand Open 的遥操作通信层改为 WebSocket 长连接，统一状态推送、指令下发与断线重连，并重构上位机与移动端。
category: software
tags: [WebSocket, Teleoperation, Aero Hand]
importance: 7
---

## 项目概述

**进行时项目。** Aero Hand Open 是一套开源灵巧手平台，其原始遥操作链路的通信层在跨网络、跨设备场景下不稳定。本项目把通信层重构为 WebSocket 长连接，并把上位机与移动端一起改造，使之能承受真实演示现场的网络条件。

## 核心工作

- **通信层重构**：由短连接轮询改为 WebSocket 长连接，统一双向消息格式。
- **状态与指令分离**：高频状态推送与低频指令下发走不同通道与优先级，避免互相阻塞。
- **断线重连**：设计重连退避与状态重同步，保证演示中断网后能自动恢复。
- **前端重构**：重做上位机界面与移动端页面，抽象出可复用的连接状态、指令面板与实时曲线组件。
- **架构梳理**：绘制端到端数据流与模块依赖图，作为后续维护与社区文档的基础。

## 与 Quest 3 遥操作的关系

Quest 3 遥操作（OmniHand）与 Aero Hand Open 是两条独立链路，本项目只重构后者。两者在手部追踪 → 关节重定向这一段可以共享思路，但设备协议与自由度映射不同，不合并实现。

## 关键词

WebSocket、长连接、遥操作、断线重连、Aero Hand Open、上位机重构
