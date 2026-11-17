---
layout: about
title: About
permalink: /
lang: en
ref: home
subtitle: Dexterous hands · tendon-driven mechanisms · RL in-hand manipulation · robotics full-stack

profile:
  align: left
  image: shaohan.jpg
  image_circular: false
  more_info: >
    <p><a href="mailto:shaohan142@gmail.com">shaohan142@gmail.com</a></p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

## About Me

I am a master's student in Mechanical Engineering at Shanghai University of Engineering Science, advised by Prof. Chen Saixuan, and a **founding member of the Xbotics Embodied Intelligence Community, where I lead the dexterous-hand direction**. My research centers on dexterous-hand in-hand manipulation: from mechanism and tendon routing design, through multi-loop FOC actuation, to reinforcement-learning policy training and sim-to-real transfer.

I prefer to carry a full stack myself: mechanical modelling, embedded actuation and communication, simulation environment construction, policy training and evaluation, and reproduction on real hardware. Three hands of different specifications (O30, O20, O10) all rotate target objects in simulation — two spheres and one cube — and the O10 cube rotation has been reproduced on real hardware in open loop. Within this project, the multi-hand model corrections, task and scene construction, and the training/evaluation pipeline are my own work; the policy training and model-optimization methods follow open-source implementations such as Sharpa and HORA.

Beyond research, I own the dexterous-hand track in the community: collaboration projects, online courses, and offline training camps, along with several open-source repositories and control consoles for developers.

## Ongoing Work

The following projects are still in progress; items marked **ongoing** reflect their current state rather than final results.

- **RL-based in-hand rotation across hand models** — ongoing. Three hands rotate target objects in MuJoCo / MJX: O30 (80 mm sphere), O20 (80 mm sphere, tactile and non-tactile baselines), and O10 (50 mm cube), reaching 591.98° of accumulated rotation in simulation. The O10 cube has been reproduced on hardware in open loop (61.17 s). Current work moves the O20 non-tactile baseline toward closed-loop hardware transfer and cross-hand, cross-object generalization.
- **UR5 + OmniHand 2025 arm–hand screw-driving** — ongoing. A UR5 (CB3) platform paired with OmniHand 2025, targeting screw insertion and nut pre-engagement with axial compliance; the work focuses on compensating the nut's in-palm relative motion during TCP feed and on validating arm feed accuracy independently.
- **OmniHand 2025 three-finger crawling** — ongoing. Locomotion of the hand itself across a plane using a three-finger support gait, with contact-phase tuning and a reproducible record/replay pipeline.
- **Aero Hand Open teleoperation refactor** — ongoing. Rebuilding the communication layer of the teleoperation stack around WebSocket long-lived connections, unifying state streaming, command dispatch, and reconnect handling, with a rebuilt desktop and mobile front end.
- **Tactile O6/O20 secondary development and VLA exploration** — ongoing. Building on joint and tactile data from O6/O20 to explore tactile-conditioned manipulation and the inference/fine-tuning path for VLA models on dexterous hands.
- **Hardware and project documentation system (tools2crew)** — ongoing. Consolidating every device manual, the lab HPC server access guide, and project handover documents into one searchable file tree.

## Selected Projects

- **Antagonistic tendon-driven biomimetic hand** (2026, project lead): 19-DoF modular five-finger structure, dual-tendon antagonistic drive, STM32G431 three-loop FOC, magnetic encoder feedback, and fingertip pressure sensing. National Third Prize, Shanghai First Prize, and the Altium Special Award at the 21st China Graduate Electronics Design Contest.
- **Xbotics OmniHand learning repository** (2026): a nine-chapter open learning repository covering hardware safety, SDK, joint and tactile control, vision teleoperation, Quest 3 retargeting, simulation, and learning.
- **Xbotics O6 / O20 consoles** (2026): desktop control tools with gesture mapping, preset actions, dataset trajectories, macro execution, safety limits, URDF visualization, and OpenClaw integration.
- **OmniHand Quest 3 teleoperation** (2026): hand-tracking data link, calibration, 16-to-10 DoF retargeting, and a validated Windows release.
- **UR5e laminating production line**: depth-vision localization with dual end effectors (glue gun and suction cup), validated in CoppeliaSim with RTCP control.
- **Multi-domain modelling of a serial robot** (undergraduate thesis): Modelica models integrating mechanical dynamics, motor, and sensor domains, validated in simulation.

## Education

- M.S. in Mechanical Engineering, Shanghai University of Engineering Science, 2025--2028
- B.S. in Robotics Engineering, Wuhan Institute of Technology, 2020--2024

## Work Experience

- **Founding Member & Dexterous-Hand Direction Lead**, Xbotics Embodied Intelligence Community, 2026.01-Present
  - Shape the community's technical direction and content system as a founding member; own the dexterous-hand roadmap, collaboration projects, and external courses
  - Design and deliver the dexterous-hand online course series and a four-day offline training camp, including environment preparation and on-site instruction
  - Develop MediaPipe gesture recognition, the OpenClaw O6/O20 console, and GR00T / MuJoCo simulation environments
  - Extract O6 episode data from the LinkerHand Open-World Dataset for action inference and envelop-grasp pose generation
  - Maintain the OmniHand learning repository, O6/O20 consoles, and Quest 3 teleoperation repositories
- **Motion Control Algorithm Engineer**, Shenzhen Youyikong Software Co., Ltd., Changsha Branch, 2024.04-2024.10
  - Worked on vibration suppression, feedforward and servo control algorithms
  - Completed five-axis CNC motion simulation, RTCP validation, and mechanism calibration
  - Built motion control libraries and UI in C++/C#, and wrote developer documentation

## Research Interests

- Dexterous hands and in-hand manipulation
- Tendon-driven and antagonistic mechanism design
- FOC and multi-loop joint control
- Reinforcement learning, imitation learning, and VLA manipulation
- Quest 3 teleoperation and motion retargeting
- Sim-to-real transfer and hardware-in-the-loop validation

## Technical Skills

- **Languages:** Python, C++, C#, MATLAB/Simulink
- **Robotics:** MuJoCo / MJX, Isaac Lab, ROS/ROS2, Gazebo, CoppeliaSim
- **Embedded & hardware:** STM32, HAL, FOC, CAN, magnetic encoders, pressure and tactile sensing
- **Dexterous-hand platforms:** OmniHand SDK, LinkerHand SDK (O6/O20), MediaPipe, Quest 3
- **Learning:** PPO-style RL training, teacher-student distillation, domain randomization, behavior cloning, VLA inference and fine-tuning
- **Design:** SolidWorks, AutoCAD, Altium Designer

## Awards

- National Third Prize and Shanghai First Prize, 21st China Graduate Electronics Design Contest; Altium Special Award (Shanghai).
- Hubei Provincial Second Prize, Higher Education Press Cup National College Mathematical Modeling Contest.
- National Third Prize, Shuwei Cup National College Mathematical Modeling Contest.

## Contact

Email: [shaohan142@gmail.com](mailto:shaohan142@gmail.com)
