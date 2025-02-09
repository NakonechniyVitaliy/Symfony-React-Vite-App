import { useEffect, useState } from "react";
import axios from "axios";
import './Manufactures.css'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



export default function Manufactures() {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/manufacturer`)
            .then(response => setManufacturers(response.data))
            .catch(error => console.error("Ошибка загрузки:", error))

    }, []);


    return (
        <div className="table-main-div">
            <table className="table table-manufacturers">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Country</th>
                </tr>
                </thead>
                <tbody>
                {manufacturers.map((manufacturer) => (
                    <tr key={manufacturer.id}>
                        <td>{manufacturer.id}</td>
                        <td>{manufacturer.title}</td>
                        <td>{manufacturer.country.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}