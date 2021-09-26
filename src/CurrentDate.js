
function CurrentDate (){

    

    const current = new Date();
        const date = `${current.toLocaleString("default", { weekday: "long" })}, ${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    
    

    return  (
        <div className="alert alert-dismissible alert-warning">
        <h3 class="nav-link active">Today is {date}</h3>
        </div>
    )
}

export default CurrentDate