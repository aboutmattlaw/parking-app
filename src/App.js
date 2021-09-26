import './App.css';
import parkingData from "./ParkingData"
import CurrentDate from './CurrentDate';
import Day from "./Day"


function App() {
  // console.log(parkingData)

  const parkingDay = parkingData.map((day) => (<Day occasion={day.occasion} date = {day.date }day = {day.day} image = {day.image}/>
    
  ));

  return (
    <div>
      <h1>A small app to help me know when I need to move the car.</h1> 
      <h2><a href="https://www1.nyc.gov/html/dot/downloads/pdf/asp-calendar-2021.pdf">Alternate Side Parking Calendar</a></h2>
      <CurrentDate />
      {parkingDay}
     </div>
  );
}

export default App;



  //     occasion: "Three King's Day",
  //     date: "Jan 6, 2021",
  //     day: "Wednesday",
  //     image: "",
  //     },
      