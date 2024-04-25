
function PreviousReservations (props){

    return(
        <div className="PreviousReservations">
            <p>
                <label>Date: </label><span> {props.reservation.date}</span><br/>
                <label>Time: </label><span> {props.reservation.time}</span><br/>
                <label>Guests: </label><span> {props.reservation.guests}</span><br/>
                <label>Occasion: </label><span> {props.reservation.occasion}</span><br/>
            </p>
        </div>
    )
}

export default PreviousReservations;