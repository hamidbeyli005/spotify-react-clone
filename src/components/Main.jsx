import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

function Main() {
  return (
    <div>
      <section className="spotify_premium">
        <p className="header">spotify premium</p>
        <h1>
          3 aylıq pulsuz Premium <br /> əldə et
        </h1>
        <h2>
          Reklamsız musiqi dinləmə.oflayn oxutma və daha cox <br /> imkandan  həzz
          al.İstənilən vaxt ləgv et.
        </h2>
        <Link className="btn" to="/signup">3 ay pulsuz əldə et</Link>
        <p className="description">
          Yalnız fərdi plan.Sonra ayda USD 4.99{" "}
          <a href="https://www.spotify.com/az-az/legal/premium-promotional-offer-terms/">
            Qaydalar və şərtlər tətbiq olunur. 
          </a>
            Yalnız hələ Premium-u sınamayan <br /> istifadəçilərə açıqdır.  Təklif
          12 may 2022-cə ildə başa çatır.
        </p>
        <div className="image">
          <img src="https://i.scdn.co/image/ab678e040000ed3a0457b4e850621c2c607e0e83" alt="" />
        </div>

      </section>

      <section className="spotify_free">
        <p className="header">spotify free</p>
        <h1>
          Dinləmək hər şey deməkdir.
        </h1>
        <h2>
          Milyonlarla mahnı və podkast. Kredit kartı tələb <br /> olunmur
        </h2>
        <Link className="btn" to="/signup">spotify-ı pulsuz əldə et</Link>
        
       

      </section>
    </div>
  );
}

export default Main;
