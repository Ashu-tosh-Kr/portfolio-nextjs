import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { IProject, IService, ISkill } from './types'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Can build scalable SPA using HTML,CSS and React.js/Next.js",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle NoSQL databases, server, api using Express & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "3 star on Codechef",
  },

]

export const languages: ISkill[] = [
  {
    name: "C++",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js",
    level: "87%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Express.js",
    level: "69%",
    Icon: BsCircleFill,
  },
  {
    name: "JAVA",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },

]
export const tools: ISkill[] = [
  {
    name: "Git",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Firebase",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Postman",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Adobe XD",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "AWS",
    level: "50%",
    Icon: BsCircleFill,
  },

]

export const projects: IProject[] = [
  {
    name: "Beach Resort",
    description:
      "This is a resort showcase web page",
    image_path: "/assets/projects/Resort.png",
    deployed_url: "https://myresorts.netlify.app/",
    github_url: "https://github.com/Ashu-tosh-Kr/beach-resort-react",
    category: ["react"],
    key_techs: ["React", "Contentful", "Context API"],
  },
  {
    name: "inShare File-sharing",
    description:
      "This is a file sharing application with size limit of 10MB",
    image_path: "/assets/projects/inShare.png",
    deployed_url: "https://inshared.herokuapp.com/",
    github_url: "https://github.com/Ashu-tosh-Kr/inShare-file-share-express",
    category: ["express"],
    key_techs: ["Express", "Multer", "AWS SES","AWS S3","MongoDB"],
  },
  {
    name: "Techanalogy Main Website",
    description:
      "This is the landing website of techanalogy",
    image_path: "/assets/projects/Techanalogy.png",
    deployed_url: "https://techanalogy.org/",
    github_url: "",
    category: ["next"],
    key_techs: ["Next", "Framer Motion", "Contentful","Typescript"],
  },


];