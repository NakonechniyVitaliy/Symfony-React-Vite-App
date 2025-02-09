import './FeedbackFrom.css'
import {useState, useRef} from "react";
import Manufactures from "../Manufactures/Manufactures.jsx";


export default function FeedbackForm(props) {
    const [name, setName] = useState('')
    const reason = useRef()
    const [manufacturers, setManufacturers] = useState([])



     function changeName(event){
        setName(event.target.value);
    }



    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" className="form-input" id="name" onChange={changeName}/>
            <br/>

            <label htmlFor="reason">Reason: </label>
            <input type="text" className="form-input" id="reason" ref={reason}/>

            <p>Your Name: {name}</p>
            <p>Reason: {reason.current?.value}</p>
        </div>
    )
}