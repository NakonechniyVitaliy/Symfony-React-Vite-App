import './App.css'
import Header from './components/Header/Header.jsx'
import Manufactures from "./components/Manufactures/Manufactures.jsx";
import Button from "./components/Button/Button.jsx";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.jsx";

export default function App() { return (
    <div className="App">
        <Header />
        <Manufactures />
        <FeedbackForm />
    </div>
  )
}


