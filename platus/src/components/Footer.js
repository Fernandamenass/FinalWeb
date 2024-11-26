import React from "react";

export default function Footer() {
  return (
    <div className="Footer container">
      <div className="Footer-Section">
        <p className="title">Platus.com</p>
        <p>
          Platus is a place where you can find anytipe of recipe and share your
          own recipes with other users from all around the world!
        </p>
        <p> © 2024 | All Rights Reserved </p>
      </div>
      <div className="Footer-Section">
        <p className="title">Contact Us</p>
        <p> contacto@platus.com </p>
        <p> Calle de la Cocina, 123, Ciudad de los Sabores, México </p>
        <p> +52 55 1234 5678 </p>
      </div>
      <div className="Footer-Section">
        <p className="title">Socials</p>
        <p> Instagram </p>
        <p> Facebook </p>
        <p> Twitter </p>
      </div>
    </div>
  );
}
