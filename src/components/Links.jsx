import { PiEnvelope, PiEnvelopeOpenBold } from "react-icons/pi";
import { SiGithub, SiHackerrank, SiLetterboxd, SiLinkedin, SiMaildotru } from "react-icons/si";

export default function Links() {

  const links = [
    {icon: PiEnvelopeOpenBold, name: "Mail", url: "mailto:perlot.maxence.pro@gmail.com"},
    {icon: SiLinkedin, name: "LinkedIn", url: "https://linkedin.com/in/perlot-maxence"},
    {icon: SiGithub, name: "GitHub", url: "https://github.com/perlot-maxence"},
    {icon: SiHackerrank, name: "HackerRank", url: "https://www.hackerrank.com/profile/Ishoshinou"},

  ]

  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {links.map((link) => ( 
        // todo: create a custom class for the link
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="no-underline! *:hover:cursor-pointer! hover:cursor-pointer! flex gap-4 items-center p-4 bg-accent! rounded-lg shadow-md hover:scale-105 hover:bg-zinc-700 transition-all duration-300">
          <link.icon size={32} />
          <h2 className="text-2xl! font-bold text-gray-300!">{link.name}</h2>
        </a>
      ))}
    </div>
  )



}