import { MdMail } from 'react-icons/md';
import i18n from '../i18n.json';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import frFlag from '../assets/fr.png'
import gbFlag from '../assets/gb.png'
import { motion } from 'framer-motion';

export default function FooterComponent({ language, openMailModal }) {




  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5}}
    >

      <footer className="text-white mt-52 pb-28 p-2 border-2 border-b-0 border-primary relative">
        <h1 className="text-xl lg:text-5xl font-bold">{i18n[language].interested}</h1>
        <div className='pt-5 pr-0 lg:pr-3 flex w-full justify-between items-center'>
          <div className='flex flex-col justify-center items-start gap-2'>
            <button className='btn btn-primary p-1!' onClick={openMailModal}>
              {i18n[language].contact} <MdMail />
            </button>
            <button className='btn btn-primary p-1!' onClick={() => { downloadURI(language == "fr" ? "/CV.pdf" : "/CV EN.pdf", "CV_Maxence_Perlot.pdf") }}>
              {i18n[language].cv} <MdMail />
            </button>
          </div>
          <div></div>
          <div className='flex flex-col items-end text-md *:hover:text-primary *:transition-all *:duration-300'>
            <a className='flex items-center gap-2' href="https://github.com/perlot-maxence">Github <FaGithub /></a>
            <a className='flex items-center gap-2' href="https://linkedin.com/in/perlot-maxence">LinkedIn <FaLinkedin /></a>
            <button className='flex items-center gap-2 cursor-pointer' onClick={() => { scrollTo(0, 0) }}>Go to top <FaArrowUp /></button>
            {language === "en" ?
              <button className='flex items-center gap-2 cursor-pointer' onClick={() => { localStorage.setItem("language", "fr"); window.location.reload() }}>Back to french version <img className='w-4' src={frFlag} alt="french flag" /></button> :
              <button className='flex items-center gap-2 cursor-pointer' onClick={() => { localStorage.setItem("language", "en"); window.location.reload() }}>version anglaise <img className='w-4' src={gbFlag} alt="english flag" /></button>}
          </div>
        </div>
        <p className='absolute bottom-0'>© {new Date().getFullYear()} <span className='font-bold text-primary underline'>Perlot Maxence</span> · All rights reserved</p>
      </footer>
    </motion.div>
  )

}