import CardsInfo from "../components/CardsInfo";
import CarouselMain from "../components/CarouselMain";
import FooterJJ from "../components/FooterJJ";
import HeaderJJ from "../components/HeaderJJ";
import "./MainPage.css";

export default function ShowMain() {
    return (
        <>
            <HeaderJJ />
            <CarouselMain />
            <div className="video-main">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3UmPD7biyu0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />
            </div>
            <CardsInfo />
            <FooterJJ />
        </>
    );
}