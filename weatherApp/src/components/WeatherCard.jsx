import React, { useEffect, useState } from "react";

function WeatherCard() {
  const cities = [
    "Karachi",
    "New York",
    "Tokyo",
    "Paris",
    "London",
    "Dubai",
    "Sydney",
    "Hong Kong",
    "Singapore",
    "Los Angeles",
    "Mumbai",
    "Shanghai",
    "Toronto",
    "Istanbul",
    "Cape Town",
    "Bangkok",
    "Berlin",
    "Rome",
    "Moscow",
    "Buenos Aires",
    "Seoul",
  ];

  const [chosen, setChosen] = useState(cities[0]);
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${chosen}&appid=1d845078dd17d1ce354e2e25d2322795`
    )
      .then((res) => res.json())
      .then((res) => {
        setweatherData(res);
        setLoading(false);
      });
  }, [chosen]);

  const handleCityChange = (e) => {
    setChosen(e.target.value);
  };

  const temp = Math.round(weatherData?.main?.temp - 273.15);
  const feelsLike = Math.round(weatherData?.main?.feels_like - 273.15);

  console.log("weatherData==>", weatherData);
  return (
    <>
      <div className="flex flex-col my-20 max-w-sm mx-auto py-10 bg-emerald-100 rounded-lg shadow-md p-4">
        <h2 className="text-center text-4xl font-bold mb-2">Weather App</h2>
        <select onChange={handleCityChange} value={chosen}>
          {cities.map((data, ind) => (
            <option key={ind} value={data}>
              {data}
            </option>
          ))}
        </select>
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="row text-sm ">
            <span>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                alt={weatherData?.weather[0].description}
                className="mx-auto"
              />
            </span>
            <h3 className="text-center text-xl mb-4">
              {temp}°C (Feels Like : {feelsLike}°C)
            </h3>

            <p>
              <div className="flex text-lg justify-between">
                <span className="font-bold">Humidity :</span>
                <span>{weatherData?.main?.humidity} %</span>
              </div>
            </p>
            <p>
              <div className="flex text-lg justify-between">
                <span className="font-bold">Pressure :</span>
                <span> {weatherData?.main?.pressure} hPa </span>
              </div>
            </p>
            <p>
              <div className="flex text-lg justify-between">
                <span className="font-bold">Sunrise :</span>
                <span>
                  {" "}
                  {new Date(
                    weatherData?.sys?.sunrise * 1000
                  ).toLocaleTimeString()}
                </span>
              </div>
            </p>
            <p>
              <div className="flex text-xl justify-between">
                <span className="font-bold">Sunset :</span>
                <span>
                  {new Date(
                    weatherData?.sys?.sunset * 1000
                  ).toLocaleTimeString()}
                </span>
              </div>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default WeatherCard;
