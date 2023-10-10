import Button from "./Button"

function Hero({title, paragraph}) {
  return (
    <div className={`main__container text-white text-center md:text-start md:items-start lg:justify-center pb-[2rem]`}>
        <h1 className="font-[900] mt-[2rem]">{title}</h1>
        <p>{paragraph}</p>
        <Button>Create Plan</Button>
    </div>
  )
}

export default Hero