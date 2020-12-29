import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const App = () => {
  const [city,setcity] = useState(null);
  const [search,setsearch] = useState();

  useEffect(()=> {
    const fetchApi = async () => {
      const API_Key = '452d61205f521c00ab7a62ea3a57ba26';
      const API_Call = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_Key}`;
      const reponse = await fetch(API_Call);
      const finalresponse = await reponse.json();
      setcity(finalresponse.main)
    }
    fetchApi();
  },[search]);

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <h2 className="text-center">Weather App</h2>
          <div className="search">
            <input type="search" onChange={(e) => { setsearch(e.target.value) }} placeholder="search city" className="citysearch form-control my-4" />
          </div>
          {
            !city ? (
              <p className="text-center my-5">NO Data Found</p>
            ): (
              <div className="content text-center">
              <h1 className="py-4"><i class="fas fa-street-view mr-3"></i>{search}</h1>
              <h3 className="py-4">{city.temp}°Cel</h3>
              <h4>Min : {city.temp_min}°Cel || Max : {city.temp_max}°Cel</h4>
          </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
