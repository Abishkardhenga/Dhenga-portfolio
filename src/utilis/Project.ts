interface projectProps {
    title: string;
    description: string;
    techStack: string[];
    image: string;
    id: number;
    livedemo: string;
    githuburl: string;
  }
  
  export const projects: projectProps[] = [
    {
      title: "E-commerce Platform",
      description:
        "An e-commerce web application that allows users to browse products, add them to the cart, and make secure purchases.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
      id: 1,
      livedemo: "https://bikram.io/",
      githuburl: "https://github.com/Sabin404/digital-signature",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application built with React and Node.js, allowing users to chat with each other in different rooms.",
      techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
      image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
      id: 2,
      livedemo: "https://bikram.io/",
      githuburl: "https://github.com/Sabin404/digital-signature",
    },
    {
      title: "Task Management App",
      description:
        "A task management app designed to help users create, organize, and track their daily tasks and projects efficiently.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Express"],
      image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
      id: 3,
      livedemo: "https://bikram.io/",
      githuburl: "https://github.com/Sabin404/digital-signature",
    },
    {
      title: "Smart Password Manager",
      description:
        "A secure password manager that generates, stores, and retrieves passwords with enhanced security features like encryption and two-factor authentication.",
      techStack: ["React", "Node.js", "MongoDB", "JWT", "Firebase"],
      image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
      id: 4,
      livedemo: "https://bikram.io/",
      githuburl: "https://github.com/Sabin404/digital-signature",
    },
  ];
  