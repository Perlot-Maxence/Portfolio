export default function Slider({ value, label, className }) {

  return (
    <>
      <p>{label}</p>
      <div className={`${className} w-full h-2 bg-gray-200 rounded-full border`}>
        <div
          className="h-full bg-accent rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </>
  )
}