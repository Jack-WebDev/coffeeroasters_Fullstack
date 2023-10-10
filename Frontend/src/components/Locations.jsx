
function Locations({bgImg, title, loc1,loc2,loc3}) {
  return (
    <div className="grid place-items-center text-center gap-[1rem]">
        <img src={bgImg} alt="" />
        <h3 className="font-[900]">{title}</h3>
        <p>{loc1} | {loc2} | {loc3}</p>
    </div>
  )
}

export default Locations