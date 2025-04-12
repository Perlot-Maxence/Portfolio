import "animate.css/animate.compat.css"
import { useEffect, useLayoutEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaArchive } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { RxCross2 } from "react-icons/rx"
import Modal from 'react-modal'
import { toast } from 'sonner'
import './App.css'
import FooterComponent from './components/Footer'
import Knowledge from './components/Knowledge'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollIndicator from './components/Scrollindicator'
import i18n from "./i18n.json"
import Select from 'react-select'
import mailPreset from "./mailpreset.json"

function App() {

  const [language, setLanguage] = useState(localStorage.getItem("language") || "fr");
  const [mailModalOpen, setMailModalOpen] = useState(false);

  function closeModal() {
    setMailModalOpen(false);
  }
  function openModal() {
    setMailModalOpen(true);
  }

  useLayoutEffect(() => {
    let favoriteColor = ["#00e8a3", "#f2aa2d", "#00a3cc"]
    let darkColor = ["#00be85", "#dc6c10", "#038ab7"]

    let random = Math.floor(Math.random() * favoriteColor.length);

    document.documentElement.style.setProperty('--color-primary', `${favoriteColor[random]}`);
    document.documentElement.style.setProperty('--color-primary-dark', `${darkColor[random]}`);

  }, [])


  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const isFrench = userLang.split('-')[0] === 'fr';
    if (localStorage.getItem("language" == undefined))
      localStorage.setItem('language', (isFrench ? 'fr' : 'en'));

    if (!isFrench && language != 'en') {
      var langtoast = toast.info(<div>
        Welcome! I noticed your main language is not french!<br />
        <button className='border p-1 rounded cursor-pointer' onClick={() => { setLanguage("en"); toast.dismiss(langtoast); localStorage.setItem("language", "en") }}>Click here</button> to see the english version of the website.
      </div>, {
        duration: 10000,
        closeButton: true,
      })
    }
  }, [localStorage.getItem("language")])

  const options = {
    "fr": [
      { value: 'empty', label: 'vide' },
      { value: 'poste', label: 'Proposition de poste' },
      { value: 'rdv', label: 'Prise de rendez-vous' }
    ],
    "en": [
      { value: 'empty', label: 'empty' },
      { value: 'poste', label: 'Job proposal' },
      { value: 'rdv', label: 'Appointment' }
    ]
  }

  const updateMail = (input) => {
    const mailFrom = document.querySelector("textarea");
    mailFrom.value = mailPreset[language][input.value];
  }

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function sendEmail() {
    const emailInput = document.querySelector("#emailInput");
    const mailValue = document.querySelector("#mailvalue");


    if (!checkEmail(emailInput.value)) {
      toast.error(language == "fr" ? "L'email n'est pas valide" : "Email is not valid");
      return;
    }

    if (mailValue.value.length < 10) {
      toast.error(language == "fr" ? "Le contenu doit faire au moins 10 caractères" : "Content must be at least 10 characters long");
      return;
    }

    document.querySelector("#sendMailBTN").disabled = true;
    document.querySelector("#sendMailBTN").classList.add("btn-disabled");
    toast.loading(language == "fr" ? "Envoi de l'email..." : "Sending email...", { id: "mail" });
    
    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput.value,
          message: mailValue.value,
          language,
        }),
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Error sending email");
        }
        return res.json();
      }).then((data) => {
        if (data.success) {
          toast.success(language == "fr" ? "Email envoyé avec succès" : "Email sent successfully", { id: "mail" });
          closeModal();
        } else {
          toast.error(language == "fr" ? "Erreur lors de l'envoi de l'email" : "Error sending email");
        }
      })
      ;


      document.querySelector("#sendMailBTN").disabled = false;
      document.querySelector("#sendMailBTN").classList.remove("btn-disabled");

    } catch (error) {
      console.error(error);
      toast.error(language == "fr" ? "Erreur lors de l'envoi de l'email" : "Error sending email");
    }
  }


  return (
    <div className='text-white selection:bg-primary'>
      <Modal
        isOpen={mailModalOpen}
        onRequestClose={closeModal}
        contentLabel="Email Modal"
        className="bg-gray-800 selection:bg-primary selection:text-black text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-1/2 h-1/2 p-5 rounded-lg "
      >
        <header className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-bold">{language == "fr" ? "Envoyer un e-mail" : "Send an e-mail"}</h2>
          <button onClick={closeModal}><RxCross2 size={"5vh"} /></button>
        </header>
        <div className="flex flex-col lg:flex-row gap-2 w-full justify-between">
          <div className="flex bg-gray-600 w-fit rounded h-10 pl-2 items-center" id="emailInputContainer">
            <p>{language == "fr" ? "De" : "From"} : </p>
            <input type="email" id="emailInput" className="bg-gray-700 h-full rounded-r outline-0 px-2 selection:text-black ml-2" />
          </div>
          <div className="flex-col w-1/2">
            <Select id="mailPresetSelector" onChange={(input) => updateMail(input)} options={options[language]} placeholder={language == "fr" ? "Example de mail" : "Mail preset"} styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#364153",
                color: "black",
                border: "none",
              }),
              menuList: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#364153",
                color: "black",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#364153",
                color: "black",
              }),
            }}
            />
          </div>

        </div>
        <textarea name="mailvalue" id="mailvalue" className="bg-gray-700 w-full h-1/2 mt-5 rounded p-2 outline-none resize-none" >
        </textarea>
        <button className="btn btn-primary" id="sendMailBTN" onClick={() => { sendEmail() }}>{language == "fr" ? "Envoyer l'e-mail" : "Send e-mail"}</button>
      </Modal>


      <div className='from-gray-900 to-gray-700 bg-gradient-to-b h-full -z-10 fixed w-full top-0 left-0'></div>
      <ScrollIndicator />
      <Navbar language={language} />
      <div className='h-screen p-5 lg:p-[15rem] pt-10 pb-60'>
        <ScrollAnimation animateIn='fadeInUp' >
          <h1 className='wosker text-3xl lg:text-8xl lg:text-center' dangerouslySetInnerHTML={{ __html: i18n[language].title }}></h1>

          <div className='flex flex-col lg:flex-row w-full justify-center items-center mt-10 gap-5'>
            <a className='btn btn-outline text-2xl' href='#knowledge'>
              {i18n[language].skills} <FaArchive />
            </a>
            <button className='btn btn-primary text-2xl' onClick={() => { setMailModalOpen(true) }}>
              {i18n[language].contact} <MdMail />
            </button>
          </div>
        </ScrollAnimation>


        <Knowledge language={language} />


        <ScrollAnimation animateIn='fadeInUp' className="w-4/5 lg:w-full">
          <Projects language={language} />
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn' className="w-5/6 lg:w-full">
          <FooterComponent language={language} openMailModal={() => setMailModalOpen(true)} />
        </ScrollAnimation>




      </div>
    </div>
  )
}

export default App
