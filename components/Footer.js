import { useState } from "react";

export default function Footer() {
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer id="footer" className="footer-area section-padding">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                A propos de <span>Nous</span>
              </h3>
              <ul className="footer-link">
                <li>
                  <a href="#">Companie</a>
                </li>
                <li>
                  <a href="#">Equipe</a>
                </li>
                <li>
                  <a href="#">Carière</a>
                </li>
                <li>
                  <a href="#">Expérience</a>
                </li>
                <li>
                  <a href="#">Trophées</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Liens<span> Utiles</span>
              </h3>
              <ul className="footer-link">
                <li>
                  <a href="#">Colonel Ebeya, Kinshasa</a>
                </li>
                <li>
                  <a href="#">Sankola, Lubumbashi</a>
                </li>
                <li>
                  <a href="#">Rukuru, Goma</a>
                </li>
                <li>
                  <a href="#">Boso, Matadi</a>
                </li>
                <li>
                  <a href="#">gungu, Kikwit</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Contact <span>Info</span>
              </h3>
              <ul className="address">
                <li>
                  <a href="#">
                    <i className="lni-map-marker"></i> N°3, Colonel Ebeya,
                    Gombe, Kinshasa
                    <br />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-phone-handset"></i> +243 999 992 118
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-envelope"></i> blaisembombo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Ecrivez-nous un <span> Message</span>
              </h3>
              <form
                method="post"
                id="subscribe-form"
                name="subscribe-form"
                className="validate"
              >
                <div className="form-group is-empty">
                  <div style={{ marginBottom: 10 }}>
                    <input
                      type="text"
                      name="Nom"
                      className="form-control"
                      id="NAME"
                      placeholder="Nom"
                      required=""
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <input
                      type="text"
                      name="Phone"
                      className="form-control"
                      id="PHONE"
                      placeholder="Téléphone"
                      required=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      id="EMAIL"
                      placeholder="Adresse mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <textarea className="form-control"></textarea>
                  </div>
                  <button
                    type="submit"
                    name="subscribe"
                    id="subscribes"
                    className="btn"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
              <div className="social-icon">
                <a className="facebook" href="#">
                  <i className="lni-facebook-filled"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="lni-twitter-filled"></i>
                </a>
                <a className="instagram" href="#">
                  <i className="lni-instagram-filled"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="lni-linkedin-filled"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
