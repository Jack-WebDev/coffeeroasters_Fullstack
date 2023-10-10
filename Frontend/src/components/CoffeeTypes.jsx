
function CoffeeTypes({img, title, text}) {
  return (
    <div>
        <img className="mx-auto" src={img} alt="" />

        <div>
            <h2 className="font-[600]">{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CoffeeTypes