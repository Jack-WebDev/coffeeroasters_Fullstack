
function Hero({title, paragraph}) {
  return (
    <div className="main__container text-white py-[2rem] text-center md:text-start">
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default Hero