import { useState } from "react";

const useFetchReservations = () => {

    const [reservations, setReservations] = useState(()=>{
        try{
            const data = window.sessionStorage.getItem("reservations");
            if(data){
                return JSON.parse(data);
            }
            else{
                window.sessionStorage.setItem("reservations",JSON.stringify([]));
                return {};
            }
        }
        catch (error){
            localStorage.setItem("reservations",JSON.stringify([]));
            return []
        }
    });

    const makeReservations = (reservation)=>{
        window.sessionStorage.setItem("reservations",JSON.stringify(reservation));
        setReservations(reservation);
    }

    return [reservations,makeReservations];
  }
  
export default useFetchReservations;