import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-gray-800 py-6">
      <div className="footer__container container mx-auto px-4">

        <ul className="footer__list flex justify-center space-x-6 mb-6">
          <li>
            <a href="#about" className="footer__link text-white hover:text-indigo-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link text-white hover:text-indigo-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link text-white hover:text-indigo-500">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social flex justify-center space-x-6 mb-6">
          <a href="#" className="footer__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="#" className="footer__social-icon" target="_blank">
            <i className="uil uil-facebook"></i>
          </a>
          <a href="#" className="footer__social-icon" target="_blank">
            <i className="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy text-center text-white">
          &#169; Ahmad Umer. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
