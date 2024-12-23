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
    title: "Planify",
    description:
      "Planify is a comprehensive web application that empowers users to manage their expenses effectively. With features like product tracking, cart management, and secure payment processing via Stripe, it simplifies the shopping experience for users.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
    id: 1,
    livedemo: "https://bikram.io/",
    githuburl: "https://github.com/Sabin404/digital-signature",
  },
  {
    title: "Chat Application",
    description:
      "A real-time messaging platform that enables users to communicate seamlessly in various chat rooms. Built using React and Socket.IO, it offers fast and efficient communication, perfect for group collaborations or casual chats.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
    id: 2,
    livedemo: "https://bikram.io/",
    githuburl: "https://github.com/Sabin404/digital-signature",
  },
  {
    title: "Aora - Social Media Site",
    description:
      "Aora is an innovative social media platform designed for seamless interaction and task management. It helps users create, organize, and track their projects and tasks while connecting with others, ensuring a collaborative and productive environment.",
    techStack: ["React Native", "Redux", "Native Wind", "MongoDB", "Express", "Firebase", "Tailwind", "Appwrite"],
    image: "https://res.cloudinary.com/dw3pz7ahl/image/upload/v1734000441/vfkfmu0l1hgg6th0sory.png",
    id: 3,
    livedemo: "https://bikram.io/",
    githuburl: "https://github.com/Sabin404/digital-signature",
  },
  {
    title: "Smart Password Manager",
    description:
      "A state-of-the-art password management application designed to enhance online security. It generates, stores, and retrieves strong passwords while employing advanced encryption techniques and two-factor authentication for added protection.",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Firebase", "Tailwind", "Appwrite"],
    image: "https://img.freepik.com/free-photo/shopping-cart-with-green-orange-plastic-cart_1340-37296.jpg",
    id: 4,
    livedemo: "https://bikram.io/",
    githuburl: "https://github.com/Sabin404/digital-signature",
  },
];
