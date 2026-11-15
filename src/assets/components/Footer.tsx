
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Beauty Salon</h2>
          <p>
            შენი სილამაზე ჩვენი შთაგონებაა.
            პროფესიონალური მომსახურება და
            ინდივიდუალური მიდგომა.
          </p>

          <div className="social-links">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook ↗
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
              TikTok ↗
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>ნავიგაცია</h3>
          <a href="#home">მთავარი</a>
          <a href="#services">მომსახურებები</a>
          <a href="#gallery">გალერეა</a>
          <a href="#contact">კონტაქტი</a>
        </div>

        <div className="footer-contact">
          <h3>კონტაქტი</h3>
          <p>თბილისი, საქართველო</p>
          <p>
            <a href="tel:+995XXXXXXXXX">
              ტელეფონი: +995 XXX XX XX XX
            </a>
          </p>
          <p>
            <a href="mailto:info@example.com">
              info@example.com
            </a>
          </p>
        </div>

        <div className="footer-hours">
          <h3>სამუშაო საათები</h3>
          <p>ორშაბათი – შაბათი</p>
          <p>10:00 – 19:00</p>
          <p>კვირა — დასვენება</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Beauty Salon. ყველა უფლება დაცულია.</p>
        <p>Designed & Developed by GURA</p>
      </div>
    </footer>
  );
}

export default Footer;
