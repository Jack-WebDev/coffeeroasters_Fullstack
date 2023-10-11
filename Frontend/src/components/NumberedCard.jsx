
function NumberedCard({number, title, text}) {
  return (
    <div className="grid place-items-center gap-[1rem] text-center md:place-items-start md:text-start">
        <span className="text-[#fdd6ba] text-[4rem]">{number}</span>
        <h2 className="font-[900]">{title}</h2>
        <p className="font-serif">{text}</p>
    </div>
  )
}

export default NumberedCard