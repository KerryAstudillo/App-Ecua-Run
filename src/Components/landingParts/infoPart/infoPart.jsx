import React, { useState, useEffect} from "react";

const InforPart = () => {

    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(18);

    const images = [
        {
            url: '/Assets/Cuenca.jpg',
            title: "Cuenca",
            description: "Ciudad Patrimonio de la Humanidad"
        },
        {
            url: '/Assets/Quito.jpg',
            title: "Quito",
            description: "Capital del Ecuador"
        },
        {
            url: '/Assets/Guayaquil.jpg',
            title: "Guayaquil",
            description: "La Perla del Pacífico"
        }, 
        {
            url: '/Assets/Loja.jpg',
            title: "Loja",
            description: "Ciudad de las flores"
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
            <h1 className="carrusel-title">Ciudades</h1>
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

export default InforPart;