import React, { useState } from 'react'
import axios from 'axios'


function PersonList (){
    const [CovidCases, setCovidCases] = useState([]);

    const getCovid =() => {
        axios
        .get("https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Marinilla&fecha_diagnostico=2020-08-06T00:00:00.000")
        .then((res)=>{
            setCovidCases(res.data)
        })
    }

    const [textCity, setTextCity] = useState('');
    const [date, setDate] = useState('');

    return(
        <div className="Help-header">
        <p>Consulta sobre pacientes con Covid-19 en el Oriente Antioqueño </p>
        <div className= "Help-input">
        <input 
            className ="Help-input" 
            type="text" 
            name="cityinput"
            value={textCity.cityinput}
            onChange={(e) => {
                setTextCity(e.target.value)
            }} />
        <input 
            className ="Help-input" 
            type ="date"
            name="textdate"
            value={date.textdate}
            onChange={(e) => {
                setDate(e.target.value)
            }} />
        <button className = "button-input" onClick={getCovid}>Search</button>
        <br/>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Edad</th>
                <th scope="col">Sexo</th>
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            {CovidCases.map((CovidCase) => {
                return (
                    <div>
                        {(textCity === CovidCase.ciudad_de_ubicaci_n) && 
                        (date + "T00:00:00.000" === CovidCase.fecha_diagnostico) &&
                        (
                            <tbody>
                                <tr>
                                <th scope="row"></th>
                                <td>{CovidCase.edad}</td>
                                <td>{CovidCase.sexo}</td>
                                <td>{CovidCase.tipo}</td>
                                <td>{CovidCase.estado}</td>
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td>{CovidCase.edad}</td>
                                <td>{CovidCase.sexo}</td>
                                <td>{CovidCase.tipo}</td>
                                <td>{CovidCase.estado}</td>
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td>{CovidCase.edad}</td>
                                <td>{CovidCase.sexo}</td>
                                <td>{CovidCase.tipo}</td>
                                <td>{CovidCase.estado}</td>
                                </tr>
                            </tbody>
                        )}
                    </div>                 
                )
            })}
        </table>
    </div>
    </div>
)
        }
export default PersonList                          