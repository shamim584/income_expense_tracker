import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import IncomeContext from '../context/IncomeContext';

const Expense = (props) => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        expamount: "",
    });

    const { value1, value2 } = useContext(IncomeContext)
    const [state2, setState2] = value2;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState2(state2 + Number(formValues.expamount));
        console.log(state2);
        navigate('/');

    };

    const handleClick = () => {
        navigate('/');
    };



    return (
        <>
            <h1>Expense</h1>
            <hr></hr>


            <form id="formu" onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="expamount">Expense Amount:</label>
                    <input
                        type="text"
                        id="expamount"
                        name="expamount"
                        placeholder=""
                        value={formValues.expamount}
                        onChange={handleChange}
                    />
                </div>



                <div className="submit">
                    <input type="submit" value="Submit" />
                    <input type="button" value="Back" onClick={handleClick} />
                </div>
            </form>





        </>
    );
};
export default Expense;