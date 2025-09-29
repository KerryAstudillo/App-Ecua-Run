import React, {useState, useEffect} from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar/ocultar el botón basado en el scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300){
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función para hacer scroll suave hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <>
            <div>

            </div>

            {/* Botón Volver arriba */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="btnScrollTop"
                >
                    <ArrowUp size={25} />
                </button>
            )}
        </>
    );
}

export default ScrollTopButton;