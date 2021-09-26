import './App.css';
import parkingData from "./ParkingData"
import CurrentDate from './CurrentDate';
import Day from "./Day"


function App() {
  console.log(parkingData)
  return (
    <div>
      <h1>A small app to help me know when I need to move the car.</h1> 
      <h2><a href="https://www1.nyc.gov/html/dot/downloads/pdf/asp-calendar-2021.pdf">Alternate Side Parking Calendar</a></h2>
      <CurrentDate />

      <Day 
      occasion="New Years Dayy" 
      date="Jan 1, 2021" 
      day="Friday" 
      image ="https://www.jambase.com/wp-content/uploads/2020/01/phish-new-years-eve-2019-2020-setlist-skinny-1480x832.jpg" />

      <Day 
      occasion="Three Kings Day" 
      date="Jan 6, 2021" 
      day="Wednesday" 
      image ="https://upload.wikimedia.org/wikipedia/commons/4/49/Phish_2009-12-30.jpg" />

     </div>
  );
}

export default App;



  //     occasion: "Three King's Day",
  //     date: "Jan 6, 2021",
  //     day: "Wednesday",
  //     image: "",
  //     },
      