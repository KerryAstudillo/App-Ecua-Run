

const InforCard = () => {


    return(
        <div className="container">
            <div className="container-info-card">
                <div className="intern-container-info-card">
                    <h2 className="subTitles">Cuenca</h2>
                    <p className="p"><span className="">Cuenca</span> (Santa Ana de los Ríos de Cuenca) es una 
                        ciudad de las montañas andinas del sur de Ecuador. 
                        Es conocida por la ribera del río Tomebamba y 
                        las artesanías, incluidos los sombreros Panamá. 
                        Su plaza central, el Parque Calderón, alberga la 
                        Catedral Nueva con su domo azul y la Catedral Vieja 
                        del siglo XVI, que actualmente es un museo religioso. 
                    </p>
                    <button className="btn-3">
                        Ver más
                    </button>
                </div>
                <div className="intern-container-info-img ">
                    <img 
                        src='/Assets/Cuenca_1.jpg'
                        alt="Foto de Cuenca" 
                        className="card-img"
                    />
                    <div className="title-overlay">
                        <div className="title-img">Catedral de la Inmaculada Concepción de Cuenca</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforCard;