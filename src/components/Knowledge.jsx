import { SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMysql, SiNodedotjs, SiReact, SiSupabase } from "react-icons/si"
import Slider from "./Slider"
import { motion } from "framer-motion"

export default function Knowledge() {


  const known = [
    { icon: SiHtml5, name: "HTML", level: 80 },
    { icon: SiCss3, name: "CSS", level: 90 },
    { icon: SiJavascript, name: "JavaScript", level: 80 },
    { icon: SiReact, name: "React", level: 70 },
    { icon: SiNodedotjs, name: "Node.js", level: 80 },
    { icon: SiExpress, name: "Express.js", level: 60 },
    { icon: SiFirebase, name: "FireBase", level: 35 },
    { icon: SiSupabase, name: "Supabase", level: 70 },
  ]

  return (
    known.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "keyframes", delay: index/2*0.2 }}
        className='bg-accent p-3 rounded-lg flex gap-5 hover:bg-zinc-700 transition-all duration-300'>
        <item.icon className="flex-shrink-0" size={64} />
        <div>
          <h2 className='text-2xl! lg:text-3xl! font-bold'>{item.name}</h2>
          <Slider value={item.level} label={`${item.level}%`} className="w-32!" />
        </div>
      </motion.div>
    ))
  )
}