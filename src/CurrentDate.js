
function CurrentDate (){

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


    return (
        <>
        <p>Today is {date}</p>
        </>
    )
}

export default CurrentDate