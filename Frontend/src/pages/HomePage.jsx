import Button from "../components/Button";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div>
      <Hero
        title={"Great coffee made simple."}
        paragraph={
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        }
      />
      <Button>Create Plan</Button>

    </div>
  );
}

export default HomePage;
