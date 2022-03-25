import MyPanchang from "../../../images/mypanchang.webp";
import WorkTracker from "../../../images/worktracker.webp";
import RadSoftInc from "../../../images/radsoftinc.webp";
import CoppellForYouth from "../../../images/coppellforyouth.webp";
import HSConnect from "../../../images/hsconnect.webp";

export const projects = [
  {
    id: 1,
    title: "MyPanchang",
    description:
      'Built a responsive lunar calendar iOS app called "MyPanchang" using Swift to view the three elements things in the Hindu calendar.',
    client: "Rad Soft, Inc.",
    image: MyPanchang,
    date: "May 2021 - Present",
    link: "https://mypanchang.radsoftinc.com/",
  },
  {
    id: 2,
    title: "Work Tracker",
    description:
      'Built a responsive work tracker iPadOS app called "Student Work Tracker" using Swift that allows teachers in tutoring services to track whether their students picked up.',
    client: "Mrs. Anupa Varshney",
    image: WorkTracker,
    date: "Apr 2021 - Present",
    link: "https://radsoftinc.com/",
  },
  {
    id: 3,
    title: "Rad Soft, Inc.'s Website",
    description:
      "Developed a website for the company using HTML, CSS, and JavaScript.",
    client: "Rad Soft, Inc.",
    image: RadSoftInc,
    date: "Jan 2021 - Present",
    link: "https://radsoftinc.com/",
  },
  {
    id: 4,
    title: "Coppell For Youth",
    description:
      "Developed a response web app using JavaScript, HTML/CSS to display the work done by Coppell For Youth.",
    client: "Ananya Adiki",
    date: "Jun 2021 - Present",
    image: CoppellForYouth,
    link: "https://coppellforyouth.com/",
  },
  {
    id: 5,
    title: "HS Connect",
    description: "Developed a responsive web app using React.js, Styled Components, and Chakra UI that allows high school students to connect with companies and organizations to attain jobs, internships, and volunteering opportunities.",
    client: "Coppell High School",
    date: "Sep 2021 - Present",
    image: HSConnect,
    link: "https://hsconnect.com/",
  },
];
