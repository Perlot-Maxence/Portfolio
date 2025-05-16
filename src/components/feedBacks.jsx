export default function FeedBacks() {
  const feedBacks = [
    {
      id: 0,
      name: "R.H",
      date: "2025-05-08",
      text: "J'ai le plaisir de vous recommander Maxence que j'ai accompagné durant son parcours au centre hospitalier de Wissembourg...\nMaxence s'est illustré par son sérieux, sa motivation, son implication et sa capacité d'adaptation. Rapidement, il a su assimiler les outils et les méthodes de travail demandés.",
      from: "Centre hospitalier de Wissembourg (Alternance)"
    }
  ];

  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {feedBacks.map((feedback) => (
        <div key={feedback.id} className="bg-accent flex-none w-fit min-h-64 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-4 p-4">
          <img src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${feedback.name}`} className="w-16 border-2! rounded-full" alt="" />
          <h2 className="text-xl font-bold">{feedback.name}</h2>
          </div>
          <p className="mt-2 whitespace-break-spaces">"{feedback.text}"</p>
          <p className="mt-2 text-gray-500 italic">{feedback.from} - {new Date(feedback.date).toLocaleDateString("fr")}</p>
        </div>
      ))}
    </div>
  )
}