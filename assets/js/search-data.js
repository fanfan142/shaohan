// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/shaohan/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Selected robotics projects across mechanism design, control, teleoperation, simulation, and learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shaohan/projects/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "覆盖机构设计、底层控制、遥操作、仿真与学习算法的机器人项目。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shaohan/zh/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Selected open-source robotics projects for dexterous hands, teleoperation, embedded control, and simulation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shaohan/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Robotics engineering profile focused on dexterous hands and robot control.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shaohan/cv/";
          },
        },{id: "nav-简历",
          title: "简历",
          description: "聚焦灵巧手与机器人控制的在线简历。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/shaohan/zh/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/shaohan/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/shaohan/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/shaohan/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-aero-hand-open-遥操作链路重构",
          title: 'Aero Hand Open 遥操作链路重构',
          description: "进行时 · 把 Aero Hand Open 的遥操作通信层改为 WebSocket 长连接，统一状态推送、指令下发与断线重连，并重构上位机与移动端。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/aero-hand-open-teleop/";
            },},{id: "projects-多手型灵巧手内强化学习旋转",
          title: '多手型灵巧手内强化学习旋转',
          description: "进行时 · O30 / O20（有触觉、无触觉）/ O10 三款灵巧手在 MuJoCo·MJX 中完成球与方块的手内旋转，O10 方块已实现真机开环回放。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/dex-rounding/";
            },},{id: "projects-omnihand-2025-三指支撑移动爬行",
          title: 'OmniHand 2025 三指支撑移动爬行',
          description: "进行时 · 用三指支撑构型让灵巧手自身在平面上移动爬行，完成步态设计、接触时序调试与录制回放。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/omnihand-crawl/";
            },},{id: "projects-omnihand-quest-3-遥操作与动作重定向",
          title: 'OmniHand Quest 3 遥操作与动作重定向',
          description: "建立 Quest 3 手部追踪数据链，完成标定、自由度重定向和 Windows 发布，用于灵巧手遥操作。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/omnihand-quest3/";
            },},{id: "projects-串联关节型机器人多领域耦合建模与仿真",
          title: '串联关节型机器人多领域耦合建模与仿真',
          description: "基于 Modelica 语言构建串联关节型机器人的多领域耦合模型，涵盖机械、电气和控制系统，实现运动学与动力学精确描述。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/robot-multidomain/";
            },},{id: "projects-触觉-o6-o20-二次开发与-vla-探索",
          title: '触觉 O6 / O20 二次开发与 VLA 探索',
          description: "进行时 · 基于 O6 与 O20 的关节与触觉数据做二次开发，探索触觉条件下的操作策略与 VLA 模型推理、微调路径。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/tactile-o6-o20-vla/";
            },},{id: "projects-拮抗式线驱动与多模态感知仿生灵巧手",
          title: '拮抗式线驱动与多模态感知仿生灵巧手',
          description: "项目负责人；19 自由度模块化五指结构、双腱绳拮抗驱动、STM32 三环 FOC、磁编码器反馈与指尖压力感知，研电赛全国三等奖。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/tendon-driven-bionic-hand/";
            },},{id: "projects-设备台账与课题接入文档体系-tools2crew",
          title: '设备台账与课题接入文档体系（tools2crew）',
          description: "进行时 · 把全部硬件说明书、局域网 HPC 服务器接入说明与课题交接文档整理成可检索的文件树与校验过的台账。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/tools2crew-docs/";
            },},{id: "projects-ur5-omnihand-2025-臂手协同螺纹操作",
          title: 'UR5 + OmniHand 2025 臂手协同螺纹操作',
          description: "进行时 · UR5（CB3）配合 OmniHand 2025 搭建实验平台，切入螺钉旋入与螺母预接合，处理 TCP 进给中的掌内相对运动补偿。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/ur5-omnihand-screw/";
            },},{id: "projects-ur5e-自动贴膜产线设计",
          title: 'UR5e 自动贴膜产线设计',
          description: "基于 UR5e 机械臂的自动贴膜产线设计，结合深度视觉定位与末端执行器优化，实现曲面手机的高精度贴合。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/ur5e-laminating/";
            },},{id: "projects-xbotics-o6-o20-灵巧手控制台",
          title: 'Xbotics O6 / O20 灵巧手控制台',
          description: "面向灵心巧手 O6/O20 的桌面控制工具，集成手势交互、动作库、宏执行、安全限幅、URDF 可视化与 OpenClaw。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/xbotics-hand-console/";
            },},{id: "projects-xbotics-omnihand-开放学习资料仓库",
          title: 'Xbotics OmniHand 开放学习资料仓库',
          description: "面向 OmniHand 2025 灵动款的九章开源学习资料，覆盖硬件安全、SDK、触觉、视觉遥操作、Quest 3、仿真与学习。",
          section: "Projects",handler: () => {
              window.location.href = "/shaohan/projects/xbotics-omnihand-learning/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/shaohan/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/shaohan/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6F%68%61%6E%31%34%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fanfan142", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/shaohan//feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
