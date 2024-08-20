
export function Filtro(){
    return(
        <div className="Contenedor-Filtro">
            <div className="Filtro-Btns">
                <button>ALL</button>
                <button>NO READ</button>
                <button>GROUPS</button>
            </div>

            <div className="Filtro-Input">
                <input type="text" placeholder="Search User"/>
                <button>d</button>
            </div>
        </div>
    );
}