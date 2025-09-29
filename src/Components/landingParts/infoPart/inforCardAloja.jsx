


const InforCardAloja = () => {
    return(
        <div className="container">
            <div className="container-info-card">
                <div className="intern-container-info-card">
                    <h2 className="subTitles">Cabaña Lojana</h2>
                    <p className="p">Esta humilde cabañita es una buena estancia 
                        para quedarse un fin de semana, esta en un valle a 
                        20 minutos de la ciudad de Loja, si te quedas aquí 
                        te aseguro que resuelves todo.</p>
                    <button className="btn-3">
                        Ver más
                    </button>
                </div>
                <div className="intern-container-info-img ">
                    <img 
                        src='/Assets/Cabaña_Lojana2.jpg'
                        alt="Foto de la cabaña" 
                        className="card-img"
                    />
                    <div className="title-overlay">
                        <div className="title-img">Cabaña Lojana</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforCardAloja;