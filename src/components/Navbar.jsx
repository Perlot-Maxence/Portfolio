import i18n from '../i18n.json'

export default function Navbar({language}) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-extrabold text-primary">PERLOT Maxence</h1>
      <p className="text-xl">{i18n[language].job}</p>
    </div>
  )
}