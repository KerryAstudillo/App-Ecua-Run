import { useState, useEffect } from "react";


const InfoPartAloja = () => {

    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(18);

    const images = [
        {
            url: '/Assets/La_casita_machaleña.jpg',
            title: "La casita machaleña",
            description: "Casa acogedora en Machala"
        },
        {
            url: '/Assets/Depa_guayaco.jpg',
            title: "El depa guayaco",
            description: "Depa en buena zona de Guayaquil"
        },
        {
            url: '/Assets/La_chozita_quiteña.jpg',
            title: "La chozita quiteña",
            description: "Cabaña en las afueras de Quito"
        },
        {
            url: '/Assets/Cabaña_lojana.jpg',
            title: "La cabaña lojana",
            description: "Cabaña en las afueras de Loja"
        }
    ];

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsPaused(true);
            }else{
                setIsPaused(false);
            }
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [])

    return(
        <div className="container">
            <h1 className="carrusel-title">Alojamientos</h1>
            <div className="container-carrusel-horizontal">
                <div 
                    className={`carrusel-track ${isPaused ? 'paused' : ''}`}
                    style={{ animationDuration: `${speed}s` }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {[...images, ...images].map((image, index) => (
                        <div key={index} className="carrusel-slide">
                            <img src={image.url} alt={image.title} />
                            <div className="slide-overlay">
                                <div className="slide-title">{image.title}</div>
                                <div className="slide-description">{image.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InfoPartAloja;