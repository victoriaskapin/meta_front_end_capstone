import { useState } from "react";
import './ComponentsStyle.scss';

function ListItem(props) {
  return (
    <option key={props.value}>{props.value}</option>
  );
}

function ReservationsForm(props) {
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [guests,setGuests] = useState(1);
  const [occasion,setOccasion] = useState("");

  const handleChange = (e)=>{
    setDate(e);
    props.dispatch(e);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.submitForm(e);
  }
  let today = new Date().toISOString().split('T')[0];

  return (
    <header className="ReservationsForm">
        <section>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <fieldset>
              <label htmlFor="book-date">Choose date:</label>
              <input id="book-date" name="datepicker" value={date} type="date" min={today}  onChange={e => handleChange(e.target.value)} required/>
              <div className="time">
                <label htmlFor="book-time">Choose time:</label>
                <select id="book-time" value={time} onChange={e => setTime(e.target.value)} required>
                  <option value="">Select a time</option>
                  {date && 
                    props.availableTimes.availableTimes.map(times =>{return <ListItem value={times} key={times}/>})
                  }
                </select>
              </div>
              <div className="guests">
                  <label htmlFor="book-guests">Number of guests:</label>
                  <input id="book-guests" min='1' value={guests} onChange={e => setGuests(e.target.value)} type="number" required/>
              </div>
              <div className="occasion">
                <label htmlFor="book-occasion">Occasion:</label>
                <select id="book-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                  {props.occasion_list.map((occasion) => {return <ListItem value={occasion} key={occasion}/>})}
                </select>
              </div>
              <div className="btnReceive">
                <input aria-label="On Click" type="submit" value={"Make your reservation"}/>
              </div>
            </fieldset>

          </form>
        </section>
    </header>
  );
}

export default ReservationsForm;