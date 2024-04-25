import ReservationsForm from "../Components/ReservationsForm";
import ConfirmedReserve from "../Components/ConfirmedReserve";
import { useReducer, useState } from "react";
import useFetchReservations from "../Hooks/useFetch_reservations";
import PreviousReservations from "../Components/PreviousReservations";

function Reservations(props) {
  const [previous_reservations,save_reservation] = useFetchReservations();
  const filterPreviousReservations = (date,times,prev)=>{
    prev.forEach(reservation =>{
      if(reservation.date === date && times.indexOf(reservation.time)){
        times.splice(times.indexOf(reservation.time),1)
      }
    })
    return times;
  }
  const fetchAPI = (date)=>{
    const start_time = 17;
    const end_time = 23;

    let result = [];
    let random = ()=>{return Math.random()}

    for(let i=start_time; i<= end_time;i++){
      if(random() < 0.5){
        result.push(i + ':00');
      }
      else if (random() >= 0.5){
        result.push(i + ':30');
      }
    }
    return filterPreviousReservations(date,result,previous_reservations);
  }
  const submitAPI = (formData)=>{
    const response = {
      date: formData.target["book-date"].value,
      time: formData.target["book-time"].value,
      guests: formData.target["book-guests"].value,
      occasion: formData.target["book-occasion"].value
    }
    var prev_reserv = previous_reservations.length ? previous_reservations:[];
    prev_reserv.push(response);
    save_reservation(prev_reserv);
    return true;
  }
  const updateTimes = (state,date)=>{
    return { availableTimes: fetchAPI(date)}
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state,dispatch] = useReducer(updateTimes,initialState);
  const occasion_list= ["Birthday","Engagement","Anniversary", "Other"];
  const [isSubmited, setIsSubmited] = useState(false);

  const submitForm = (formData)=>{
    if( submitAPI(formData)){
      setIsSubmited(true);
    }
  };


  return (
    <main className="Reservations">
      { !isSubmited && <ReservationsForm  occasion_list={occasion_list} availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}
      {isSubmited && <ConfirmedReserve/>}
      <section className="previous-reservations">
          {previous_reservations.length && previous_reservations.map((reservation,i) => {return <PreviousReservations reservation={reservation} key={i}/>})}
      </section>
    </main>
  );
}

export default Reservations;