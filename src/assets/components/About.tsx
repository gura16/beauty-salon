
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-visual">
        <img
          src="/images/stylist.jpg"
          alt="ჩვენი სტილისტი"
          className="about-portrait"
        />
      </div>

      <div className="about-content">
        <span className="about-subtitle">
          MEET THE STYLIST
        </span>

        <h2>გაიცანით ჩვენი სტილისტი</h2>

        <div className="about-rule"></div>

        <p className="about-intro">
          სილამაზე იწყება ინდივიდუალური მიდგომით.
        </p>

        <p className="about-description">
          15-წლიანი პროფესიული გამოცდილება
          თმის შეჭრის, შეღებვისა და
          განსაკუთრებული ვარცხნილობების
          შექმნის მიმართულებით.
        </p>

        <p className="about-description">
          თითოეული სტუმრისთვის ვქმნით
          სტილს, რომელიც მის ინდივიდუალობას
          საუკეთესოდ გამოხატავს.
        </p>

        <a href="#contact" className="about-button">
          დაგვიკავშირდით
        </a>
      </div>

    </section>
  );
}

export default About;
