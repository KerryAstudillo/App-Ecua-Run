import Navbar from "./navbar/navbar";
import MainPart from "./mainPart/mainPart";
import InforPart from "./infoPart/infoPart";
import InforCard from "./infoPart/infoCard";
import InfoPartAloja from "./infoPart/infoPartAloja";
import InforCardAloja from "./infoPart/inforCardAloja";
import ScrollTopButton from "../../littleComponents/ScrollTopButton";
import Footer from "./footer/footer";

import { BrowserRouter as Router } from "react-router-dom";

const PrincipalPage = () => {
    return(
        <div className="parallax-container gap-4">
            <Navbar />
            <MainPart />
            <InforPart />
            <InforCard />
            <InfoPartAloja />
            <InforCardAloja />
            <ScrollTopButton />
            <Footer />
        </div>
    );
}

export default PrincipalPage;