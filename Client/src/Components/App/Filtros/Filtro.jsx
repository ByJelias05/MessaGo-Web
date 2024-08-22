import sent from "../../../icons/Sent2.png"

export function Filtro(){
    return(
        <div className="Contenedor-Filtro">
            <div className="Filtro-Btns">
                <button style={{cursor: 'pointer'}}>ALL</button>
                <button style={{cursor: 'pointer'}}>NO READ</button>
                <button style={{cursor: 'pointer'}}>GROUPS</button>
            </div>

            <div className="Filtro-Input">
                <input type="text" placeholder="Search User"/>
                <button>
                    <img style={{cursor: 'pointer'}} src={sent} alt="" />
                </button>
            </div>
        </div>
    );
}