import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Locations from "../components/Locations"
import './About.css'

function AboutPage() {
  return (
    <div className="flex flex-col gap-[10rem]">
    <div className="about_container">
      <Hero title={"About Us"} paragraph={"Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."}/>
    </div>

    <div className="section1 grid gap-[2rem] text-center md:flex md:text-start">
      <img className="md:hidden" src="/src/assets/about/mobile/image-commitment.jpg" alt="" />
      <img className="hidden md:inline-block lg:hidden" src="/src/assets/about/tablet/image-commitment.jpg" alt="" />
      <img className="hidden lg:inline-block" src="/src/assets/about/desktop/image-commitment.jpg" alt="" />

      <div>
        <h2>Our Commitment</h2>
        <p className="font-serif font-normal">We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
      </div>
    </div>

    <div className="section2 grid gap-[2rem] place-items-center text-center lg:flex lg:flex-row-reverse lg:text-end">
      <img className="md:hidden" src="/src/assets/about/mobile/image-quality.jpg" alt="" />
      <img className="hidden md:inline-block lg:hidden" src="/src/assets/about/tablet/image-quality.jpg" alt="" />
      <img className="hidden lg:inline-block" src="/src/assets/about/desktop/image-quality.jpg" alt="" />

    <div>
      <h2>Uncompromising quality</h2>
      <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
    </div>
    </div>

    <div className="md:flex md:justify-center md:items-baseline lg:gap-[4rem]">
      <Locations bgImg={"/src/assets/about/desktop/illustration-uk.svg"} title={"UK"} loc1={"68 Asfordby Rd "} loc2={"Alcaston"} loc3={"+44 1241918425"}/>
      <Locations bgImg={"/src/assets/about/desktop/illustration-australia.svg"} title={"Australia"} loc1={"36 Swanston Street"} loc2={"Kewell "} loc3={"+61 4 9928 3629"}/>
      <Locations bgImg={"/src/assets/about/desktop/illustration-canada.svg"} title={"Canada"} loc1={"1528 Eglinton Avenue"} loc2={"Toronto"} loc3={"+1 416 485 2997"}/>
    </div>

    <Footer />

    </div>
  )
}

export default AboutPage