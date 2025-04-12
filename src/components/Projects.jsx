import { FaExternalLinkAlt, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import i18n from "../i18n.json";
import discordThumbnail from "../assets/discordJisho.png"
import MinazonThumbnail from "../assets/minazon.png"
import SteamThumbnail from "../assets/Steam-logo.svg"
import RaspberryThumbnail from "../assets/raspberry.jpg"

export default function Projects({language}) {
  const data = [
    {
      title: "Discord Jisho Dictionnary",
      description: language === "fr" ?
      "Un plugin Discord qui intègre un dictionnaire japonais et la lecture simplifé de caractères." :
      "A Discord plugin that integrates a Japanese dictionary and simplified character reading.",
      thumbnail: discordThumbnail,
      badges: ["Plugin"],
      links: [
        { "github": "https://github.com/Perlot-Maxence/DiscordJishoDictionnary" },
        // { "website": "https://www.linkedin.com/in/" }
      ],
    },
    {
      title: "Steam UI Remake",
      description: language === "fr" ?
      "Un projet de refonte de l'interface utilisateur de Steam, mettant en avant mes compétences de développement.":
      "A project to remake the Steam UI, showcasing my development skills.",
      thumbnail: SteamThumbnail,
      badges: ["React", "UI", "Web"],
      links: [
        { "github": "https://github.com/Perlot-Maxence/Steam-UI-Remake" },
        // { "website": "https://www.linkedin.com/in/" }
      ],
    },
    {
      title: "Minazon",
      description: language === "fr" ?
      "Un projet permettant aux utilisateurs d'organiser des échanges sécurisés sur le jeu Minecraft." :
      "A project allowing users to organize secure exchanges on the Minecraft game.",
      thumbnail: MinazonThumbnail,
      badges: ["React", "UI", "Web"],
      links: [
        { "github": "https://github.com/Perlot-Maxence/Minazon" },
        // { "website": "https://www.linkedin.com/in/" }
      ],
    },
    {
      title: "RaspHome",
      description: language === "fr" ?
      "Un projet de gestion de la domotique depuis une Raspberry Pi." :
      "A project to manage home automation from a Raspberry Pi.",
      thumbnail: RaspberryThumbnail,
      badges: ["React", "UI", "Web"],
      links: [
        // { "github": "https://github.com/Perlot-Maxence/Minazon" },
        // { "website": "https://www.linkedin.com/in/" }
      ],
    },
  ]


  return (
    <section className='mt-[30vh]' id='projects'>
      <h1 className='font-bold text-3xl flex gap-2 items-center justify-center ml-[38px]'>
        {i18n[language].projects} <a href="#projects"><FaLink className='opacity-15 hover:opacity-75' /></a>
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-5'>


        {data.map((item, index) => (
            <div className='bg-gray-800 shadow-xl p-2 rounded-lg flex flex-col relative' key={index}>
              <img src={item.thumbnail} alt={item.title + " thumbnail"} className='w-full h-40 object-contain rounded-lg' />
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <p>{item.description}</p>
              {item.badges &&
                <div className="flex gap-2 mt-2">
                  {item.badges.map((badge, bindex) => (
                    <span key={bindex} className="bg-primary-dark shadow-2xl text-sm px-3 py-1 rounded-full">{badge}</span>
                  ))}
                </div>
              }
              {item.links &&
                <div className="flex gap-4 mt-4 absolute bottom-4 right-4">
                  {item.links.map((link, lindex) => (
                    <a href={Object.values(link)[0]}
                      target="_blank" key={index} className='text-3xl text-primary hover:scale-110 transition-transform duration-200'>
                      {Object.keys(link)[0] === "github" && <FaGithub />}
                      {Object.keys(link)[0] === "website" && <FaExternalLinkAlt />}
                    </a>
                  ))}
                </div>
              }

            </div>
        ))}

      </div>
    </section>
  )
}