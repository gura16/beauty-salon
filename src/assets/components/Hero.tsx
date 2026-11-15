
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">BEAUTY SALON</span>

        <h1>
          შენი სილამაზე
          <br />
          ჩვენი შთაგონებაა
        </h1>

        <p>
          პროფესიონალური თმის მოვლა,
          თანამედროვე ვარცხნილობები
          და ინდივიდუალური სტილი.
        </p>

        <a href="#services" className="hero-button">
          ჩვენი მომსახურებები →
        </a>
      </div>

      <div className="hero-image">
        <img
  src="/images/salon-hero.png"
  alt="ელეგანტური ვარცხნილობა"
/>
      </div>
    </section>
  );
}

export default Hero;
