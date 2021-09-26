function Day ({occasion , day , date , image}) {
    return (

        <div className="day">
            <div>
            <img src={image}/>
            <h3>{occasion}</h3>
            <ul>
                <li>{date}</li>
                <li>{day}</li>
            </ul>
            </div>
        </div>
        
    )
}
    
export default Day

// occasion: "Three King's Day",
// date: "Jan 6, 2021",
// day: "Wednesday",
// image: "",
// },