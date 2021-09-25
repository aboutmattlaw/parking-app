import './App.css';
import parkingData from "./ParkingData.js"
import CurrentDate from './CurrentDate';


function App() {
  console.log(parkingData)
  return (
    <div>
      <h1>This is going to be a small app to help me know when I need to move the car.</h1> 
      <h2><a href="https://www1.nyc.gov/html/dot/downloads/pdf/asp-calendar-2021.pdf">Alternate Side Parking Calendar</a></h2>
      <CurrentDate />
     </div>
  );
}

export default App;
