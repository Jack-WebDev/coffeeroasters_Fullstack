
import NumberedCard from "../components/NumberedCard";
import Button from "../components/Button";
import Hero from "../components/Hero";
import "./CreatePlan.css";
import Faq from "../components/Faq";
import OrderSummary from "../components/OrderSummary";

function CreatePlanPage() {
  return (
    <div>
      <div className="create_container">
        <Hero
          title={"Create Your Plan"}
          paragraph={
            "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
          }
        />
      </div>

      <section className="grid gap-[1.5rem] bg-[#2c343e] text-white text-center w-[90%] mx-auto p-[2rem] rounded-lg my-[5rem]">

        <h2>How it works</h2>

        <div className="grid place-items-center gap-[1.5rem] md:grid-cols-3">
          <NumberedCard number={"01"} title={"Pick your coffee"} text={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."} />

          <NumberedCard number={"02"} title={"Choose the frequency"} text={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."} />

          <NumberedCard number={"03"} title={"Receive and enjoy!"} text={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."} />
        </div>

        <Button>Create Your Plan</Button>
      </section>

      <section className="grid place-items-center text-white">
        <Faq/>
      </section>

      <section>
        <OrderSummary />
      </section>
    </div>
  );
}

export default CreatePlanPage;
