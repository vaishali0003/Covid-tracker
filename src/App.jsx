import React, { useState, useEffect } from 'react'

function App() {
  const [data, setdata] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const res1 = await res.json();
      console.log(res1)
      setdata(res1.statewise)
      // console.log(data)
    }
    catch (err) {
      // console.log(err)
    }
  }

  useEffect(() => {
    getCovidData();
  }, [])

  return (
    <div>
      <h3 className="text-center my-3 py-3">INDIA COVID-19 DASHBOARD</h3>
      <div className="main1 container">
        <table className="table table-borderless table-hover">
          <thead className='table-dark'>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Active</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deceased</th>
              <th scope="col">Recovered</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((curElem,index) => {
                return (<>
                  <tr key={index}>
                    <td>{curElem.state}</td>
                    <td className='active'>{curElem.active}</td>
                    <td className='conf'>{curElem.confirmed}</td>
                    <td className='deaths'>{curElem.deaths}</td>
                    <td className='recovered'>{curElem.recovered}</td>
                  </tr>
                </>)
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
