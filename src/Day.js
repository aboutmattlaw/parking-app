import {useState} from 'react'

function Day ({
    occasion,
    day, 
    date,
    image = "https://cdn.vox-cdn.com/thumbor/baiAt8Qc4nWGs2JJywpPpkpssdo=/0x0:700x353/1400x1400/filters:focal(294x121:406x233):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/51616429/ios-10-shrug-emoji.0.png"
}) 




{
    const [checkedDay, setCheckedDay] = useState(false);
    function dayClick () {
        setCheckedDay((checkedDay) => !checkedDay);
    }
    
    return (

        
        <div onClick={dayClick} className={checkedDay ? "day-checked" : "day"}>
            <div className="card text-white bg-primary mb-3">
            <img src={image}/>
            <h3 class="card-header">Reason: {occasion}</h3>
            <ul className="card-text">
                <li>Date: {date}</li>
                <li>Day: {day}</li>
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