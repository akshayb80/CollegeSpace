import React from "react";
import Carditem1 from "./Carditem1";
import "./Clubs.css";



function Clubs() {

  return (
    <div className="ClubCards">
      <h1>Clubs & Societies</h1>
      <div className="ClubCards__container">
        <div className="ClubCards__wrapper">

          <ul className="ClubCards__items">
            <Carditem1
              src="https://pbs.twimg.com/profile_images/1182361454072209408/VEaUkAkk_400x400.png"
              text="Developer Students Clubs | VJTI"
              path="https://www.dscvjti.tech/"
            />
            <Carditem1
              src="https://media-exp1.licdn.com/dms/image/C510BAQERs5qm9kdQOg/company-logo_200_200/0/1545567197676?e=2159024400&v=beta&t=8K_qiUe9COZpBiE3Ix5sVYHar1E2ot_xpY6LAsEBz4s"
              text="Community of Coders | Programmers"
              path="https://www.communityofcoders.in"
            />
            <Carditem1
              src="data:image/png;base64,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"
              text="Society of Robotics and Automation | Robotics"
              path="https://www.sravjti.in/"
            />

          </ul>
          <ul className="ClubCards__items">
            <Carditem1
              src="https://www.knowafest.com/files/uploads/logo-2017102803.jpg"
              text="Technovanza | Technical Fest"
              path="https://technovanza.org/"
            />
            <Carditem1
              src="https://www.oliviacosmetics.net/web/files/2809766a93c111e89c8a124d46038552/61aaf97409ef11eaa4d10242b290a65e"
              text="Pratibimb | Cultural"
              path="https://www.facebook.com/pratibimbvjti/"
            />
            <Carditem1
              src="https://yt3.ggpht.com/ytc/AAUvwnhKGcMo55PSei5IWCy0Ei9S4iYyl2KNQBIFqws_Ew=s900-c-k-c0x00ffffff-no-rj"
              text="Enthusia | Sports"
              path="https://www.enthusia.in"
            />


          </ul>
        </div>
      </div>
    </div>









  );
}
export default Clubs;