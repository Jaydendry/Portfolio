export const projectData = [
  {
  id: 0,
  // Core
  title: 'CyberDmapCommandAndControlPlatform',
  role: 'UI/UX Specialist',
  year: '2025',
  status: 'Complete',
  websiteLink: null,
  managementStyle: 'Agile / Iterative',
  // Project Type
  projectType: 'Desktop Application / Dashboard',
  // Tags
  tagList: ['UI / UX', 'Cyber Defence', 'Data Visualization', 'Real-Time Systems'],
  // Software Icons
  softwareTitle: ["Figma"],
  softwareList: ["material-icon-theme:figma"],
  // Images
  image: [
      `hero.webp`,
      `image-1.webp`,
      `image-2.webp`,
      `image-3.webp`,
      `image-4.webp`,
      `image-5.webp`,
      `image-6.webp`,
      `image-7-wireframe.webp`,
      `image-8-wireframe.webp`,
  ],
  overview: 'Developed during a focused two-week intensive, the Cyber OMAP Co-Pilot represents a comprehensive cyber operations management platform that combines real-time threat monitoring, strategic planning, and AI-assisted decision-making for Defence Cyber Command. The platform integrates multiple operational views including a global threat map, live threat feeds, facility digital twins, and detailed asset tracking - all designed to accelerate both the cyber planning and execution cycles. Built using Data#3\'s AI Prototyping Framework concept, the system provides commanders with holistic base health monitoring, operational timeline tracking, and mission version control in a unified, military-grade interface.',
  processTextList: [
    // Goals
    "Create an integrated platform that accelerates cyber planning and execution cycles for Defence Cyber Command, combining real-time threat intelligence with strategic operational planning and AI-driven prioritisation to enable faster, more informed decision-making across the entire cyber operations lifecycle.",
    // Challenge
    "Cyber operations require commanders to synthesize information from dozens of disparate sources - threat feeds, asset statuses, team readiness, facility health, mission timelines - while maintaining operational security and making rapid decisions under pressure. The challenge was consolidating this information overload into a single coherent interface that provides both strategic overview and tactical detail without cognitive overwhelm.",
    // Process
    "The development followed an iterative agile approach over two weeks, beginning with core operational dashboards and progressively layering in specialized views. Each component was designed independently then integrated into the unified command and control interface, with continuous refinement based on operational scenarios from Operation Luzon Strait as the reference case.",
    // Research
    "Analysis of existing military command systems, cyber operations centres (SOCs), and threat intelligence platforms revealed common pain points: information silos, delayed threat response, lack of integrated planning tools, and poor visibility into team/asset status. This informed the decision to build a holistic platform rather than point solutions.",
    // Solution
    "A modular dashboard architecture with six core operational views: (1) Global threat map with real-time attack vectors, (2) Location-specific facility health monitoring, (3) Live threat feed with auto-categorisation, (4) 3D digital twin for spatial awareness, (5) Comprehensive 28-day operation timeline, and (6) Asset status tracking across malware, tools, infrastructure, and C2 channels. Each view optimised for 1338x880px displays common in operations centres.",
    // Design System
    "Established a military-grade cyberpunk aesthetic using a constrained palette: cyber green (#00ff00) for active/operational states, red (#ff0040) for critical threats, orange (#ff8800) for high priority, yellow (#ffaa00) for warnings, and blue (#4a90a4) for informational content - all on dark navy backgrounds (#0a0e1a, #0d1520) to reduce eye strain during extended operations. Courier New monospace typography reinforces the tactical computing aesthetic.",
    // Key Features
    "Real-time threat monitoring with AI-recommended operation prioritisation, 3D interactive facility visualisation showing room-level activity, comprehensive asset health tracking (23 assets across malware, tools, and C2 infrastructure), complete mission timeline from reconnaissance through cleanup phases, version control for operational planning iterations, and automated threat feed generation with realistic APT group TTPs and IOCs.",
    // Development Process
    "Built entirely with vanilla HTML/CSS/JavaScript to ensure rapid prototyping and easy integration with existing Defence systems. No external dependencies beyond CDN-hosted libraries for specific visualisations. Each dashboard component was developed as a standalone page for modularity, with consistent design system and navigation patterns. Extensive use of CSS animations and JavaScript for real-time data simulation and interactive elements."
  ],
  // Colour palette
  gradientColour: "linear-gradient(180deg, rgba(0,255,0,1) 0%, rgba(26,58,74,1) 100%)",
  colours: [
    "#238E89", // Cyber Green - Operational
    "#B31D25", // Critical Red
    "#FF8B43", // High Orange  
    "#FFCD43", // Warning Yellow
    "#203043", // Info Blue
    "#B8C4CF", // Deep Navy Background
    "#0F141B", // Border/Accent
  ]
},{
    id: 1,
    // Core
    title: 'RadiantChiropracticCare',
    role: 'UI/UX Design & Development',
    year: '2023',
    status: 'Complete',
    websiteLink: 'https://radiantchiropracticcare.com.au/',
    managementStyle: 'Waterfall / Linear',
    // Project Type
    projectType:'Mobile & Tablet App',
    // Tags
    tagList: ['UI / UX','Front-End Development','QA Testing'],
    // Software Icons
    softwareTitle: ["Figma",'React','Tailwind','Vite'],
    softwareList: ["file-icons:figma",'file-icons:jsx-atom','file-icons:tailwind','file-icons:vite'],
    // Images
    image:[
        `hero.webp`,
        `image-1.webp`,
        `image-2.webp`,
        `image-3.webp`,
        `image-4.webp`,
        `image-5.webp`,
        `image-6.webp`,
        `image-7-wireframe.webp`,
        `image-8-wireframe.webp`,
      ],
    overview: 'James Kang & I co-designed and developed a single-page formatted website for a blossoming chiropractor locally. Our goal was to create an easy-to-use website to open the gate for clients both new & existing to book appointments & learn about her practice. We utilised Figma for the initial design experimentation, sticking closely towards the brand identity and using that as the basis for our palette, we moved swiftly onto Vite with React & Tailwind CSS for development and experimentation of functionality and features we could implement, like the Google Maps API and FAQ dropdowns.',
    processTextList:[
      // Goals
      "Create an intuitive, single-page website that simplifies appointment booking and provides clear information about the practice to both new and existing clients.",
      // Challenge
      "Being given a short period of time to go from branding to opening doors, creating a full-scale website for the start of the next month presented various challenges, especially co-designing and programming on a commercial level whilst liaising with client expectations. We were tasked with creating a site as an entry point into Mikayla's appointment scheduling system with all her client details.",
      // Process
      "We began by defining project goals, target audience needs, and core site functionality, creating a clear roadmap from concept to launch. Each phase—from research to deployment—was structured to ensure alignment with the client’s vision and user expectations.",
      // Research
      "Investigated user needs and competitor sites to understand booking workflows and effective communication of health service information.",
      // Solution
      "Design decisions were anchored in the existing brand identity, using the established palette, typography, and visual cues to reflect the practice’s warmth and professionalism while ensuring a cohesive digital presence.",
      // Wireframing
      "Low-fidelity wireframes in Figma outlined structure, content hierarchy, and user flow, enabling us to validate functionality and navigation before refining the visual design.",
      // UI Design
      "A clean, approachable interface was designed with accessibility and ease of use in mind, balancing whitespace, typography, and iconography to create a welcoming yet professional experience that aligned seamlessly with the brand.",
      // Development Process
      "The site was built using Vite, React, and Tailwind CSS for speed, responsiveness, and maintainability, with integrated features such as Google Maps for location access and interactive FAQ dropdowns to enhance usability."
    ],
    // Colour palette
    gradientColour: "linear-gradient(180deg, rgba(224,150,34,1) 0%, rgba(255,180,0,1) 100%)",
    colours:
    [
      "#FFC400",
      "#FDE07E",
      "#9F842A",
      "#FEFEFE",
      "#050505",
    ]
  },{
      id: 2,
      title: 'Android12',
      role: 'OS Design',

      year: '2023',
      status: 'Complete',
      websiteLink: 'https://vhedia.com/',

      gradientColour: "linear-gradient(180deg, rgba(222,0,0,1) 0%, rgba(212,33,158,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      tagList: ['UI / UX'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],

    image:[
        `hero.webp`,
        `image-1.webp`,
        `image-2.webp`,
        `image-3.webp`,
        `image-4.webp`,
        `image-5.webp`,
        `image-6.webp`,
        `image-7-wireframe.webp`,
        `image-8-wireframe.webp`,
      ],
      overview: "While working in cooperation with VHEDIA, I was tasked with the project of creating a custom UI theme design to be developed for their car headunits that came in various designs, models and bases. The theme had to include consideration for custom widgets & personalisation whilst remaining simple enough for all variants of users to be able to troubleshoot either via a provided PDF guide or over the phone from one of the support technicians.",
      processTextList:[
        // Goals
        "Design a flexible, easy-to-use UI theme compatible across multiple car headunit models, supporting custom widgets and straightforward troubleshooting.",
        // Challenge
        "Designing a universal UI theme for VHEDIA’s range of car headunits posed the challenge of catering to multiple hardware designs, models, and operating bases, while ensuring usability for a wide range of drivers.",
        // Process
        "We began by identifying the technical constraints and understanding user scenarios across different headunit configurations. This informed a design framework adaptable to various screen sizes, resolutions, and layouts.",
        // Research
        "Analyzed hardware variations, user scenarios, and support documentation needs to ensure universal usability and effective customer support.",
        // Solution
        "The theme was designed with a balance of customisation and simplicity, supporting personal widgets and user preferences while maintaining an intuitive, streamlined interface for everyday use.",
        // Wireframing
        "Wireframes mapped out navigation flows, widget placement, and key user interactions, allowing us to test adaptability across different model dimensions before committing to final visuals.",
        // UI Design
        "The visual design emphasised clarity and accessibility, using a clean, bold interface style optimised for in-car visibility, with clear iconography and consistent placement of core functions.",
        // Development Considerations
        "Design assets and specifications were documented for integration by the development team, with built-in support for PDF-based troubleshooting guides and remote assistance by VHEDIA’s technical staff."
      ],
      colours:
      [
        "#590508",
        "#8A020D",
        "#901721",
        "#01011E",
        "#fefefe",
      ]
    },
    
    {
      id: 3,
      title: 'TyreWatcher',
      role: 'App Design & QA Testing',

      year: '2023',
      status: 'Development Complete Pending Hardware Update. Discontinued',
      gradientColour: "linear-gradient(180deg, rgba(222,106,0,1) 0%, rgba(212,33,33,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      
      tagList: ['UI / UX','Project Management','QA Testing'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],
      image:[
          `hero.webp`,
          `image-1.webp`,
          `image-2.webp`,
          `image-3.webp`,
          `image-4.webp`,
          `image-5.webp`,
          `image-6.webp`,
          `image-7-wireframe.webp`,
          `image-8-wireframe.webp`,
      ],
      overview:"TyreWatcher. A versatile app designed for phones, tablets and car headunits utilising BLE technology to connect our Bluetooth tyre pressure sensors to your device ranging from one sensor up to 24+ for trucks and other large vehicles.",
      processTextList:[
        "Develop a cross-platform app that reliably connects Bluetooth tyre pressure sensors to devices ranging from personal cars to large trucks, providing clear status and alerts.",
        // Challenge
        "TyreWatcher needed to operate seamlessly across phones, tablets, and in-car headunits, supporting anywhere from a single tyre sensor to over 24 for large trucks, all while maintaining reliable Bluetooth connectivity via BLE technology.",
        // Process
        "We began by mapping out user requirements for different vehicle types, from solo drivers to fleet operators, and assessing how interface complexity should scale with the number of connected sensors.",
        // Research
        "Examined user requirements for varying vehicle types and sensor counts, alongside Bluetooth connectivity challenges and in-car display constraints.",
        // Solution
        "The app was designed with a modular interface that dynamically adapts to the number of sensors, providing clear tyre status indicators, alerts, and easy access to detailed readings.",
        // Wireframing
        "Low-fidelity wireframes defined layouts for various screen sizes, ensuring critical information like pressure warnings and connection status remained prominent across all devices.",
        // UI Design
        "The design focused on legibility and quick-glance usability, using bold status colours, intuitive icons, and scalable typography optimised for both mobile and in-car visibility.",
        // Development Considerations
        "Cross-platform compatibility and Bluetooth stability were prioritised, with the interface built to handle rapid sensor data updates while minimising latency for safety-critical alerts."
      ],
      colours:
      [
        "#F8991C",
        "#BB4430",
        "#FFAA00",
        '#E8E9EB',
        "#1C1F20",
      ]
    },
    
    {
      id: 4,
      title: 'BatteryWatcher',
      role: 'UI/UX App Design',

      year: '2023',
      status: 'Complete',
      gradientColour: "linear-gradient(180deg, rgba(0,92,222,1) 0%, rgba(255,0,0,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      tagList: ['UI / UX','QA Testing'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],
    image:[
        `hero.webp`,
        `image-1.webp`,
        `image-2.webp`,
        `image-3.webp`,
        `image-4.webp`,
        `image-5.webp`,
        `image-6.webp`,
        `image-7-wireframe.webp`,
        `image-8-wireframe.webp`,
      ],
      overview: "Battery Watcher utilises our BattWatcher product to connect to your car battery and transmits data directly to your phone through a Bluetooth connection to this app. You can view the voltage and health of your battery, the consumption of power per second and run various tests such as the Cranking, Charging and Battery tests to make sure you get the most out of your battery.",      
      processTextList:[
        "Deliver real-time battery health monitoring and diagnostics with easy-to-understand tests and live data for everyday users and enthusiasts.",
        // Challenge
        "Battery Watcher needed to deliver accurate, real-time diagnostics from the BattWatcher device to a user’s phone via Bluetooth, while presenting data in a way that was both detailed for enthusiasts and approachable for everyday drivers.",
        // Process
        "We started by identifying the key performance metrics drivers value most — voltage, health, and power consumption — and mapping out how these should be monitored, displayed, and tested within the app.",
        "Studied key battery performance metrics and typical user behaviors to design meaningful test procedures and intuitive data presentation.",
        // Solution
        "The app integrates live battery status with detailed diagnostic tools, including Cranking, Charging, and Battery tests, giving users both quick health checks and deeper performance insights.",
        // Wireframing
        "Wireframes prioritised a clear hierarchy between at-a-glance metrics and in-depth reports, ensuring users could access both without navigating through unnecessary screens.",
        // UI Design
        "A clean, data-focused interface was created with clear typography, colour-coded indicators, and intuitive test controls, allowing users to easily interpret results and take action.",
        // Development Considerations
        "Optimised for Bluetooth stability and low-latency data transfer, the app was built to handle continuous monitoring without draining device resources, ensuring accurate readings in real time."
      ],
      colours:
      [
        "#5A9FF0",
        "#75ECA5",
        "#E70000",
        "#FDFEFF",
        "#132024",
      ]
    },
    {
      id: 5,
      title: 'Gremio',
      role: 'App Design & Development',
  
      year: '2023',
      status: 'Complete',
      gradientColour: "linear-gradient(180deg, rgba(120,13,13,1) 0%, rgba(255,0,0,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],

      tagList: ['UI / UX','Project Management','Full-Stack Development'],
      
      image:[
          `hero.webp`,
          `image-1.webp`,
          `image-2.webp`,
          `image-3.webp`,
          `image-4.webp`,
          `image-5.webp`,
          `image-6.webp`,
          `image-7-wireframe.webp`,
          `image-8-wireframe.webp`,
      ],
      overview:["As part of a university brief, this project involved designing and developing a full-stack application centered on a fictional brand. The goal was to apply comprehensive development skills including database management, user authentication, and REST API integration. Key features such as a dashboard, search and filtration functions, and user settings were implemented to create an interactive, dynamic user experience."],
      processTextList:[
        // Goals
        "Develop a full-stack application from scratch using a fictional brand, incorporating user authentication, data management, and dynamic features to demonstrate practical development skills.",
        // Research
        "Researched full-stack architectures, REST API integration, and best practices for database design to support robust login, data updates, and feature implementations.",
        // Solution
        "Built a scalable application with a dashboard, search and filtration tools, user settings, and real-time data handling using RESTful APIs and database models.",
        // Wireframing
        "Created wireframes mapping out key UI components including dashboard layouts and navigation flows to ensure a seamless user experience.",
        // UI Design
        "Designed a clean, user-friendly interface focusing on usability and accessibility, balancing functionality with aesthetic simplicity.",
        // Development Process
        "Implemented front-end and back-end features with a focus on modular code, responsive design, and efficient database queries to deliver a polished final product."
      ],
      colours:
      [
        "#E90101",
        "#F55454",
        "#222222",
        "#181414",
        "white",
      ]
    },
];
  //   {
  //   id: 10,
  //   title: 'Obd2Scanz',
  //   role: 'App Design & Project Management',

  //   year: '2023',
  //   status: 'Complete',
  //   gradientColour: "linear-gradient(180deg, rgba(120,13,13,1) 0%, rgba(255,0,0,1) 100%)",
  //   managementStyle: 'Waterfall / Linear',
  //   projectType:'Mobile & Tablet App',
  //   softwareTitle: ["Figma",'Photoshop','Excel'],
  //   softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:microsoft-excel'],

  //   tagList: ['UI / UX','Project Management','QA Testing'],
    
  //   image:[
  //       `hero.webp`,
  //       `image-1.webp`,
  //       `image-2.webp`,
  //       `image-3.webp`,
  //       `image-4.webp`,
  //       `image-5.webp`,
  //       `image-6.webp`,
  //       `image-7-wireframe.webp`,
  //       `image-8-wireframe.webp`,
  //     ],
    
  //   processTextList:[
  //     //Challenge
  //     "",
  //     // Process
  //     "",
  //     // Solution
  //     "",       
  //   ],
  //   colours:
  //   [
  //     "#E90101",
  //     "#F55454",
  //     "#222222",
  //     "#181414",
  //     "white",
  //   ]
  // },
  // ];