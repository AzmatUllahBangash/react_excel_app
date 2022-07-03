import React, { Component, useEffect, useState } from 'react';

import axios from 'axios';

export default function SheetData() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, [])

  function getCountries() {
    axios({
      url: 'http://localhost:80/excel_api/excel.php',
      method: "get",
    }).then((res) => {
      console.log(res.data)
      setCountries(res.data)
    })
  }

  return (
    <>


      <div className='container'>
        <div className="row justify-content-even">
          {countries.map((countries, key) =>
            <div className="col-md-4 mt-4 " key={key}>
              <div className="card" style={{ width: '25rem', background: 'lighCyan' }}>
                <div className="card-body">
                  <h5 className="card-title">Country Name: <span style={{ color: '#81AFDD' }}> {countries.countryName}</span></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Population: <span style={{ color: '#81AFDD' }}>{countries.population}</span></h6>
                  <p className="card-text"> Capital:
                    <span style={{ color: '#81AFDD' }}>{countries.capital}</span>
                  </p>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
