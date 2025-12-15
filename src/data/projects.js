import AngularIcon from "../components/icons/AngularIcon.astro";
import SpringBootIcon from "../components/icons/SpringBootIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import MySQLIcon from "../components/icons/MySQLIcon.astro";

export const TAGS = {
 ANGULAR: {
  name: "Angular",
  class: "bg-red-100 text-red-600",
  icon: AngularIcon,
 },
 SPRINGBOOT: {
  name: "SpringBoot",
  class: "bg-green-100 text-green-600",
  icon: SpringBootIcon,
 },
 TAILWIND: {
  name: "TailwindCSS",
  class: "bg-blue-100 text-blue-600",
  icon: TailwindIcon,
 },
 MYSQL: {
  name: "MySQL",
  class: "bg-gray-700 text-gray-200",
  icon: MySQLIcon,
 },
};

export const PROJECTS = [
 {
  title: "CliniCare - Aplicación Web Full Stack",
  description: `
   Este proyecto corresponde a mi Proyecto Final y consiste en una aplicación web full stack desarrollada con Angular en el frontend y Spring Boot en el backend. La aplicación implementa una arquitectura cliente–servidor siguiendo buenas prácticas de desarrollo, separación de responsabilidades y uso de tecnologías modernas.
   `,
  link: "#",
  github: "https://github.com/SergioAG21/clinicare",
  image: "/projects/clinicare.webp",
  technologies: [TAGS.ANGULAR, TAGS.SPRINGBOOT, TAGS.TAILWIND, TAGS.MYSQL],
 },
];
