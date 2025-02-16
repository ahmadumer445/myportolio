import ContactForm from "./ContactForm";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
          {/* //social connections */}
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bxl-messenger contact__card-icon"></i>
                <h3 className="contant__card-title">Messenger</h3>
                <span className="contact__card-data">ahmadumer</span>

                <a href="#" className="contact__button">
                  Write Me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contant__card-title">Email</h3>
                <span className="contact__card-data">
                  ahmadumer6676@gmail.com
                </span>

                <a href="#" className="contact__button">
                  Write Me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contant__card-title">Whatsapp</h3>
                <span className="contact__card-data"> 92-3046300920</span>

                <a
                  href="https://wa.me/923046300920?text=Hello%20I%20am%20interested%20in%20your%20services"
                  className="contact__button"
                >
                  Write Me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>
          {/* //form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
