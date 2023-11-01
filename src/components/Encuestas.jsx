import React,{useState} from "react";
function Encuestas({encuestas}){
    return(
        <div class="encuesta">
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                        <li key={encuesta.id}><p>{encuesta.pregunta}</p>
                            {encuesta.opciones.map((opcion,index) =>(
                                <div class={"opciones-"+encuesta.id}>
                                    <input 
                                        type="radio" 
                                        name={encuesta.id} 
                                        value={opcion}
                                        />
                                    <label>{opcion}</label>
                                </div>
                            ))}
                        </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default Encuestas;