import { CgBrowser } from "react-icons/cg";
import { FaDatabase, FaLink, FaNode } from "react-icons/fa";
import { RiFirebaseFill, RiJavaFill, RiJavaLine, RiJavascriptFill, RiReactjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiChartdotjs, SiElectron, SiGodotengine, SiHibernate, SiJavascript, SiSpring, SiTypescript } from "react-icons/si";
import i18n from "../i18n.json";
import ScrollAnimation from "react-animate-on-scroll";

export default function Knowledge({ language }) {
  const data = [
    {
      title: "React",
      description: "Frontend · javascript/typescript",
      icon: RiReactjsFill,
      link: "https://react.dev/"
    },
    {
      title: "TailwindCSS",
      description: "Frontend · CSS",
      icon: RiTailwindCssFill,
      link: "https://tailwindcss.com/"
    },
    {
      title: "Supabase",
      description: `Backend · ${language === "fr" ? "Base de données" : "Database"}`,
      icon: RiSupabaseFill,
      link: "https://supabase.com/"
    },
    {
      title: "Firebase",
      description: "Backend · Multifonctions",
      icon: RiFirebaseFill,
      link: "https://firebase.com/"
    },
    {
      title: "Chart.js",
      description: language === "fr" ? "Graphiques web" : "Web graphs",
      icon: SiChartdotjs,
      link: "https://www.chartjs.org/"
    },
    {
      title: "Node.js",
      description: "Backend · javascript",
      icon: FaNode,
      link: "https://nodejs.org/"
    },
    {
      title: "Electron",
      description: language === "fr" ? "Application de bureau" : "Desktop application",
      icon: SiElectron,
      link: "https://www.electronjs.org/"
    },
    {
      title: "Spring",
      description: "Web Java",
      icon: SiSpring,
      link: "https://spring.io/"
    },
    {
      title: "Hibernate",
      description: "ORM Java",
      icon: SiHibernate,
      link: "https://hibernate.org"
    },
    {
      title: "Godot",
      description: language === "fr" ? "C# · Moteur de jeu" : "C# · Game engine",
      icon: SiGodotengine,
      link: "https://godotengine.org/"
    },
    {
      title: "JavaScript",
      description: language === "fr" ? "Langage de programmation" : "Programming language",
      icon: SiJavascript,
      link: "https://wikipedia.org/wiki/JavaScript"
    },
    {
      title: "TypeScript",
      description: language === "fr" ? "Javascript avec typage" : "Javascript with type",
      icon: SiTypescript,
      link: "https://wikipedia.org/wiki/TypeScript"
    },
    {
      title: "Java",
      description: language === "fr" ? "Langage de programmation" : "Programming language",
      icon: RiJavaFill,
      link: "https://www.java.com/"
    },
    {
      title: "SQL",
      description: `Backend · ${language === "fr" ? "Base de données" : "Database"}`,
      icon: FaDatabase,
      link: "https://sql.sh/"
    },
    {
      title: "API REST & WebSocket",
      description: "Backend · Communication",
      icon: CgBrowser,
      link: "https://en.wikipedia.org/wiki/API"
    },
  ]


  return (
    <section className='pt-[30vh] mt-[20vh]' id='knowledge'>
      <h1 className='font-bold text-3xl flex gap-2 items-center justify-center ml-[38px]'>{i18n[language].skills} <a href="#knowledge"><FaLink className='opacity-15 hover:opacity-75' /></a></h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-5 '>

        {data.map((item, index) => (
          <ScrollAnimation delay={index * 2} animateIn={Math.round(Math.random()) == 0 ? "fadeInLeft" : "fadeInRight"} className='w-4/5 lg:w-full' key={index}>
            <a href={item.link}>
              <div className='bg-gray-800 p-3 rounded-lg flex gap-5 hover:bg-gray-600 transition-all duration-300'>
                <item.icon size={64} color="var(--color-primary)" className="p-1 rounded" />
                <div>
                  <h2 className='text-xl font-bold'>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}