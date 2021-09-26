function Day (props) {
    return (

        <div className="day">
            <div>
            <img src={props.image}/>
            <h3>{props.occasion}</h3>
            <ul>
                <li>{props.date}</li>
                <li>{props.day}</li>
            </ul>
            </div>
        </div>
        
    )
}
    
export default Day

