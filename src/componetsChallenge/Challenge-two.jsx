import React, { useState } from 'react'
import axios from 'axios'

function PersonList() {
  const [CovidCases, setCovidCases] = useState([])
  const [textCity, setTextCity] = useState('')
  const [date, setDate] = useState('')

  const getCovid = () => {
    axios
      .get(
        'https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=' +
          textCity +
          '&fecha_diagnostico=' +
          date +
          'T00:00:00.000',
      )
      .then((res) => {
        setCovidCases(res.data)
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="my-5 text-center">
            Consulta sobre pacientes con Covid-19{' '}
          </h4>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                placeholder="Municipio"
                type="text"
                name="cityinput"
                value={textCity}
                onChange={(e) => {
                  setTextCity(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="date"
                name="textdate"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={getCovid}>
                Buscar
              </button>
            </div>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {CovidCases.map((CovidCase, index=1) => {
                  index += 1 
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{CovidCase.edad}</td>
                      <td>{CovidCase.sexo}</td>
                      <td>{CovidCase.tipo}</td>
                      <td>{CovidCase.estado}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PersonList
