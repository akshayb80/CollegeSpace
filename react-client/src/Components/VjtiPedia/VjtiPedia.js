import React from "react";
import "./VjtiPedia.css";

function VjtiPedia() {
    return (

        <div className="VjtiPedia">

            <img src="https://vjtimumbai.in/wp-content/uploads/2020/07/VJTI-LandingPageV3.jpg" />
            <h1>VjtiPedia</h1>
            <form action="http://maps.google.com/maps" method="get" target="_blank">
                Enter your starting address
                <input type="text" name="saddr" />
                <input type="hidden" name="daddr" value="Veermata Jijabai Technological Institute, Matunga Mumbai 400019" />
                <input type="submit" value="Get Directions" />
            </form>
            <p>
                VJTI Mumbai (estd. in 1887 as Victoria Jubilee Technical Institute) has pioneered India’s Engineering education, research and training ecosystem. Pre-independence, VJTI had been instrumental in driving industrial growth throughout united India. Post-independence, VJTI played a pivotal role in setting up IITs and RECs of India and strengthened technology excellence of country.

                In 1997, VJTI changed its name to Veermata Jijabai Technological Institute to honor mother of Chhatrapati Shivaji Maharaj.

                Located in South Mumbai, VJTI is an autonomous institution owned by Maharashtra State Government. The institute offers programs in engineering and technology at the diploma, degree, post-graduate and doctoral levels.

                VJTI is known for its high quality teaching, collaborative research, industry connect and strong alumni network.
    </p>







        </div>







    );
}
export default VjtiPedia;