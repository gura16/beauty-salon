
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import ServiceCard from "./assets/components/ServiceCard";
import Footer from "./assets/components/Footer";
import "./App.css";

const services = [
  { id: 1, name: "ქალის თმის შეჭრა", price: 40 },
  { id: 2, name: "თმის შეღებვა", price: 120 },
  { id: 3, name: "თმის დავარცხნა", price: 35 },
  { id: 4, name: "სადღესასწაულო ვარცხნილობა", price: 80 },
  { id: 5, name: "თმის კერატინი", price: 150 },
];

function App() {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <section className="services-section" id="services">
          <span className="section-label">OUR SERVICES</span>
          <h2>ჩვენი მომსახურებები</h2>

          <div className="services">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                price={service.price}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
