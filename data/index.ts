export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Tech Stack",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]" ,
      imgClassName: "w-full h-full",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "Adaptable and comfortable working with global, distributed teams",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Building success through open collaboration and clear communication",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "opacity-50",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 4,
      title: "Machine Learning enthusiast committed to innovative web development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Developing a Pseudo-3D Game Engine",
      description: "Currently building a pseudo-3D game engine inspired by early games like Doom and Daggerfall. Collaborating with a friend to bring retro-style gaming into the modern era, blending classic mechanics with modern web technologies.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-5 bottom-5 md:w-96 w-60 opacity-30 md:opacity-60 lg:opacity-70",
      titleClassName: "justify-center md:justify-start lg:justify-center lg:gap-y-6",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Interested in collaborating? Let’s build something great together!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Animated Apple Iphone 3D Website",
      des: "A dynamic recreation of the Apple iPhone 15 Pro website, featuring immersive GSAP animations and Three.js 3D effects to create a highly interactive and engaging user experience.",
      img: "/iphone15_clone.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg", "/re.svg"],
      link: "https://github.com/KatsisNik/apple_website_project",
    },
    {
      id: 2,
      title: "Brainwave - AI Chatting (Front-End Only)",
      des: "Designed a responsive front-end for an AI chatting platform, showcasing intuitive interfaces. Built with scalability in mind, focusing on front-end development.",
      img: "/brainwave_project.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
      link: "https://github.com/KatsisNik/brainwave-website-project",
    },
    
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full-Stack Developer Intern – Optimum Health Ltd",
      desc: "Utilizing Next.js, Redux, Tailwind CSS, and more to develop new features, and refactor code for future scalability. Working in a fast-paced environment, solving complex challenges while improving code quality.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 2,
      title: "Machine Learning Engineer Intern – Optimum Health Ltd",
      desc: "Developed and fine-tuned BERT-based models for multi-label emotion classification. Integrated models into Microsoft Azure as callable functions for the company’s product.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Research Assistant – Imperial College London",
      desc: "Worked on behavior classification using video input. Implemented Mask R-CNN and 3D CNN architectures for primate behavior recognition, experimenting with pre-training techniques.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Deep Reinforcement Learning – Maze Navigation Project",
      desc: "Developed a DQN-based reinforcement learning agent to solve maze navigation tasks within a 10-minute training window.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 5,
      title: "Online Experiment Database – Web App Project",
      desc: "Built a web application to unify laboratory data, using a PostgreSQL back-end and a Java-based front-end.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 6,
      title: "Software Engineer – Mitigate LTD",
      desc: "Optimized back-end using Django, integrated Amadeus API for travel recommendations, and developed a web application with a recommendation system based on autoencoder technology.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 7,
      title: "UROP – Imperial College London",
      desc: "Developed a deep CNN for estimating left ventricle volume from MRI images. Modified R-CNN and YOLO algorithms to output scalar data, achieving accurate predictions on test sets.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/KatsisNik"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/nikolaos-katsis-b68417203/"
    },
  ];