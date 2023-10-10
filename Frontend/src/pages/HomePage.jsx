import Hero from "../components/Hero";
import './Home.css'

function HomePage() {
  return (
    <div className="container">
      <Hero
        title={"Great coffee made simple."}
        paragraph={
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        }
        />

    </div>
  );
}

export default HomePage;
