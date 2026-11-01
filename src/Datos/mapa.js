import React from "react";

export default function Mapa() {
  return (
    <div className="mapa">
      <h3>Ubicación actual</h3>
      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.7855976669803!2d-65.98583792667218!3d-26.073262477157428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f3116db715a69%3A0x7bff169e6ded6f8c!2sPje.%20Sta.%20Rosa%20557%2C%20A4427%20Cafayate%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1793471399535!5m2!1ses-419!2sar"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
