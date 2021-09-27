import { useState } from "react";


function Form (){
    const [parkingLocation, setParkingLocation] = useState("");
    const [submittedData, setSubmittedData] = useState([]);


function handleSubmit (event) {
    event.preventDefault();
    setParkingLocation(event.target.value);
}

function handleActualSubmit (event) {
    event.preventDefault();
    console.log(event);
    const formData = {parkingLocation: parkingLocation};
    const dataArray = [... submittedData, formData];
    setSubmittedData(dataArray);
    setParkingLocation("");
    console.log(dataArray)
}

const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.parkingLocation} 
      </div>
    );
  });


return (
    <div className="form-group">
    <form onSubmit={handleActualSubmit}> 
      <label className="form-label mt-4">Where did I leave the car?</label>
      <textarea className="form-control" onChange={handleSubmit} id="exampleTextarea" value={parkingLocation} rows="3"></textarea>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>  
      {listOfSubmissions}

    </div>
)

}

export default Form