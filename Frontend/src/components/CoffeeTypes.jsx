
function CoffeeTypes({img, title, text}) {
  return (
    <div>
        <img src={img} alt="" />

        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CoffeeTypes