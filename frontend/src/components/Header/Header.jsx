import './Header.css';
import {useState} from "react";
import Button from "../Button/Button.jsx";
import Manufactures from "../Manufactures/Manufactures.jsx";

export default function Header(){
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 1000);

    function HeaderTab(props){
        return (
            <div className="header-tab">
                {props.title}
            </div>
        )
    }

    return (
        <header className="header">
            <div className="header-logo"></div>
            <div className="space">
                <p>{time.toLocaleTimeString()}</p>
                {/*<Button buttonClass="classic-btn" buttonText="Reload Time" />*/}
            </div>
            <div className="header-items">
                <HeaderTab title='MAIN'/>
                <HeaderTab title='MANUFACTURER'/>
                <HeaderTab title='COUNTRY'/>
                <HeaderTab title='CATEGORY'/>
                <HeaderTab title='LOGIN'/>
            </div>
        </header>
    )
}