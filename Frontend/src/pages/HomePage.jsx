import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Home.css";
import CoffeeTypes from "../components/CoffeeTypes";
import Card from "../components/Card";
import NumberedCard from "../components/NumberedCard";
import Button from "../components/Button";



function HomePage() {
  return (
    <div>
      <div className="container">
        <Hero
          title={"Great coffee made simple."}
          paragraph={
            "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
          }
        />
      </div>

      <section className="my-[4rem] text-center">
        <h2 className="mb-[2rem]">Our Collection</h2>
        <div className="grid place-items-center gap-[2rem] text-center">
          <CoffeeTypes img={"/src/assets/home/desktop/image-gran-espresso.png"} title={"Grand Espresso"} text={"Light and flavorful blend with cocoa and black pepper for an intense experience"}/>

          <CoffeeTypes img={"/src/assets/home/desktop/image-planalto.png"} title={"Planalto"} text={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"}/>

          <CoffeeTypes img={"/src/assets/home/desktop/image-piccollo.png"} title={"Piccollo"} text={"Mild and smooth blend featuring notes of toasted almond and dried cherry"}/>

          <CoffeeTypes img={"/src/assets/home/desktop/image-danche.png"} title={"Danche"} text={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes"}/>
        </div>
      </section>

      <section className="grid gap-[1.5rem] bg-[#2c343e] text-white text-center w-[90%] mx-auto p-[2rem] rounded-lg">
        <h2>Why choose us?</h2>

        <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>

        <div className="cards grid gap-[2rem]">
          <Card img={"/src/assets/home/desktop/icon-coffee-bean.svg"} title={"Best quality"} text={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."} />

          <Card img={"/src/assets/home/desktop/icon-truck.svg"} title={"Free Shipping"} text={"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."} />

          <Card img={"/src/assets/home/desktop/icon-gift.svg"} title={"Exclusive benefits"} text={"Special offers and swag when you subscribe, including 30% off your first shipment."} />
        </div>
      </section>


      <section className="grid place-items-center gap-[2rem] text-center my-[3rem]">
        <h2>How it works</h2>

        <div className="grid place-items-center gap-[1.5rem]">
          <NumberedCard number={"01"} title={"Pick your coffee"} text={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."} />

          <NumberedCard number={"02"} title={"Choose the frequency"} text={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."} />

          <NumberedCard number={"03"} title={"Receive and enjoy!"} text={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."} />
        </div>

        <Button>Create Your Plan</Button>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
