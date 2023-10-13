import react ,{useEffect, useState} from "react";

import './style.css';
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const[search,setSearch]=useState("Mumbai");

    useEffect(()=>{
        const fetchApi=async () => {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1629373c7ba1f9a3c9cfe9ba41a4d87`;
            const response=await fetch(url);
            //console.log(response);
            const responsejson=await response.json();
            setCity(responsejson.main);
        };
        fetchApi();
    
    },[search])

    return(
        <>
           <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild"onChange={(event)=>{
                        setSearch(event.target.value)
                    }}
                   />
                </div>
                {!city?
                <p className="errorMsg">No data found</p>
                 :
                <div>
                    <div className="info">
                        <h2 className="lacation">
                        <i className="fas fa-street-view"></i><span className="citycs">{search}</span>
                        </h2>
                        <h1 className="temp"> 
                        {city.temp} °C

                        </h1>
                        <h3 className="tempmin_max">
            
                            <strong>Pressure : {city.pressure} Pa </strong>
                            

                        </h3>
                        <h3 class="tempmin_max">Humidity :{city.humidity} g.m-3</h3>

                    </div>
                    <div className="wavegen">
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                    </div>
                    
                    </div>
            }
            </div>
        </>
    )
}
export default Tempapp;