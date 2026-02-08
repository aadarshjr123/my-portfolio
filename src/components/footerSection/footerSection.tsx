import "./footerSection.scss";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__name">Aadarsh Sasi Kumar</div>
          <div className="footer__role">
            Software Engineer • Backend & Systems
          </div>
          <div className="footer__location">Germany</div>
        </div>

        <div className="footer__right">
          <a href="mailto:aadarshsasikumar@gmail.com">
            aadarshsasikumar@gmail.com
          </a>
          <a
            href="https://github.com/aadarshjr123"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aadarshss"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Aadarsh Sasi Kumar
      </div>
    </footer>
  );
};

export default FooterSection;
