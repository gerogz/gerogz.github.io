const logotext = "GG";

const meta = {
    title: "Geronimo Gorostiaga",
    description: "CS student @ Georgia Tech | SWE Intern @ NVIDIA | ML + Systems enthusiast",
};

const introdata = {
    title: "Hi, I'm Geronimo Gorostiaga",
    animated: {
        first: "CS @ Georgia Tech",
        second: "SWE Intern @ NVIDIA",
        third: "Let's build something cool",
    },
    description: "CS student at Georgia Tech passionate about software engineering, AI, and building impactful systems. Looking for Summer 2025 SWE internships!",
    your_img_url: "https://i.imgur.com/YOUR_IMAGE.jpg", // upload your own and use Imgur or similar
};

const dataabout = {
    title: "A bit about me",
    aboutme: `I'm a Computer Science student at Georgia Tech set to graduate in December 2025, focused on systems, AI, and human-centered computing. 
    I've interned at NVIDIA, worked on autonomous robotics, and published research on AI deception. 
    I love building things that are useful, scalable, and rooted in real-world impact.`,
};

const worktimeline = [
    {
        jobtitle: "Software Engineering Intern – NVIDIA",
        where: "Santa Clara, CA",
        date: "Spring 2025 (Upcoming)",
    },
    {
        jobtitle: "Software Engineering Intern – NVIDIA",
        where: "Santa Clara, CA",
        date: "Summer 2024",
    },
    {
        jobtitle: "Undergraduate Researcher – RAIL Lab",
        where: "Atlanta, GA",
        date: "Aug 2023 – Present",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C++", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React.js", value: 75 },
    { name: "Kubernetes", value: 70 },
    { name: "Docker", value: 75 },
    { name: "PyTorch", value: 80 },
    { name: "SQL", value: 70 },
];

const services = [
    {
        title: "Backend Development",
        description: "Building reliable, scalable services and APIs with Node.js, Python, and C++.",
    },
    {
        title: "AI/ML Projects",
        description: "Experience with PyTorch, scikit-learn, and ML pipelines for NLP, robotics, and more.",
    },
    {
        title: "DevOps & Infra",
        description: "Comfortable with Docker, Kubernetes, Helm, Redis, and observability tools like OpenTelemetry.",
    },
];

const dataportfolio = [
    {
        img: "https://i.imgur.com/your_cam_slam_image.jpg",
        description: "Multi-agent SLAM system with Graph Neural Networks and ROS 2 for collaborative robot mapping.",
        link: "#",
    },
    {
        img: "https://imgur.com/a/tUkzX9H",
        description: "Tagify – Full-stack playlist organizer using Spotify API, PostgreSQL, and React.",
        link: "https://github.com/gerogz/Tagify",
    },
    {
        img: "https://i.imgur.com/your_ecommerce_project.jpg",
        description: "E-Commerce behavior analysis on 845K+ events. Built recommender with ALS and BM25 ranking.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "gerogorostiaga@gmail.com",
    YOUR_FONE: "+1 (470) 929-1290",
    description: "Feel free to reach out if you're working on cool tech or have internship/job opportunities!",
    YOUR_SERVICE_ID: "your_service_id",
    YOUR_TEMPLATE_ID: "your_template_id",
    YOUR_USER_ID: "your_user_id",
};

const socialprofils = {
    github: "https://github.com/gerogorostiaga", // replace with your actual GitHub
    linkedin: "https://linkedin.com/in/geronimo-gorostiaga",
};

const research = [
    {
        title: "Lie, Repent, Repeat: Exploring Apologies after Repeated Robot Deception",
        authors: "Kantwon Rogers, Reiden John Allen Webber, Jinhee Chang, Geronimo Gorostiaga Zubizarreta, Ayanna Howard",
        venue: "ACM/IEEE HRI 2024",
        link: "https://dl.acm.org/doi/abs/10.1145/3610977.3634980",
        description: "Empirical study on how repeated robot lies and apologies affect user trust and behavior in time-critical scenarios.",
    },
    {
        title: "What Should a Robot Do? Comparing Human and LLM Recommendations for Robot Deception",
        authors: "Kantwon Rogers, Reiden John Allen Webber, Geronimo Gorostiaga Zubizarreta, Arthur Melo Cruz, Shengkang Chen, Ronald C Arkin, Jason Borenstein, Alan R Wagner",
        venue: "ACM/IEEE HRI 2024",
        link: "https://dl.acm.org/doi/abs/10.1145/3610978.3640752",
        description: "Compared ethical judgments of humans and LLMs across deception scenarios, revealing misalignments in low-risk contexts.",
    },
];

const resumeData = {
    header: {
        name: "GERONIMO GOROSTIAGA",
        contact: "+1 (470) 929-1290 ▪ gerogorostiaga@gmail.com ▪ linkedin.com/in/geronimo-gorostiaga ▪ Atlanta, GA"
    },
    education: {
        school: "Georgia Institute of Technology, College of Computing - Atlanta, GA",
        degree: "Bachelor of Science in Computer Science",
        graduation: "Dec 2025 (expected)",
        activities: "Society of Hispanic Professional Engineers, AI@GT (Project Lead), Barcelona Summer Program",
        coursework: "Data Structures, Design & Analysis of Algorithms, Computer Organization & Programming, Systems & Networks, Database Systems, Introduction to Artificial Intelligence, Machine Learning, Perception & Robotics"
    },
    skills: {
        languages: "Python, Java, JavaScript, C++, C#, SQL",
        aiml: "PyTorch, scikit-learn, Pandas, NumPy",
        libraries: "Node.js, React.js, Redux, JavaFX, Unity, ROS 2",
        devops: "Git, Docker, Kubernetes, Helm, Linux, OpenTelemetry, NGINX, Redis, Firebase"
    },
    experience: [
        {
            title: "Software Engineering Intern – AI Applications, NVIDIA – Santa Clara, CA",
            period: "Ongoing: Jan 2025 – Apr 2025",
            bullets: [
                "Integrated the Pipecat framework into the architecture of Tokkio, a conversational AI platform, building a feedback pipeline that iteratively refines dialogue context across turns, enhancing state tracking and conversation coherence",
                "Designed and implemented multimodal UI components for Tokkio using React and Redux, utilizing WebSocket for real-time data updates to integrate structured data (text, images, tables, charts) into LLM-generated responses"
            ]
        },
        {
            title: "Software Engineering Intern – AI Applications, NVIDIA – Santa Clara, CA",
            period: "May 2024 – Aug 2024",
            bullets: [
                "Enhanced system observability for Tokkio by implementing OpenTelemetry tracing across Python, C++, and JavaScript-based microservices, reducing debugging time by 30%",
                "Integrated Redis-based context propagation and custom instrumentation for user session traceability",
                "Deployed observability infrastructure in Kubernetes using Helm, integrating Grafana, Tempo, and Prometheus to visualize traces and system performance metrics",
                "Authored an OpenTelemetry tracing guide, adopted by 50+ engineers, detailing best practices for distributed tracing"
            ]
        },
        {
            title: "Undergraduate Researcher, Robot Autonomy and Interactive Learning Laboratory – Atlanta, GA",
            period: "Aug 2023 – present",
            bullets: [
                "Conducted data-driven investigations on human perception of AI deception by applying principal component analysis to survey responses from 200+ participants, identifying key factors influencing trust",
                "Developed unsupervised learning workflows using K-means clustering to categorize robotic deception scenarios into six distinct types, informing further research on human-AI trust dynamics",
                "Evaluated ethical decision-making in large language models (LLMs) through comparative analysis with human judgements; published and presented findings at the HRI 2024 conference"
            ]
        },
        {
            title: "Undergraduate Researcher, Human-Automation Systems Laboratory – Atlanta, GA",
            period: "Jan 2023 – Aug 2023",
            bullets: [
                "Designed and implemented a Unity-based VR driving simulation in C# to study the impact of AI deception on user trust, managing experiments with 100 in-person participants",
                "Utilized the Whisper API and Python (NumPy, Pandas) for audio transcription and data analysis, quantifying a 15% drop in user trust post-AI deception; published and presented findings at the HRI 2024 conference"
            ]
        }
    ],
    projects: [
        {
            title: "Collaborative Autonomous Multi-Agent SLAM (CAM-SLAM)",
            description: "Led the development of a multi-agent SLAM system for collaborative robot mapping in unknown environments. Implemented Graph Neural Networks (GNNs) to improve map merging and sparse graph representations. Utilized ROS 2, Gazebo, Python, PyTorch, and C++ to train and simulate the system in distributed environments."
        },
        {
            title: "E-Commerce Customer Behavior Analysis",
            description: "Analyzed 845K+ e-commerce events using unsupervised (K-Means) and supervised (Random Forest, Logistic Regression) techniques to segment user behavior and predict purchases. Built a recommendation system using ALS & BM25, improving personalized category ranking (NDCG@2)."
        },
        {
            title: "Tagify Music Organizer",
            description: "Developed a full-stack playlist organizer with custom tagging and filtering, integrating Spotify's API via a RESTful Node.js & Express.js backend and a React.js frontend, with PostgreSQL for tag storage."
        }
    ]
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    research,
    resumeData,
};