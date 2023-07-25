import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import IncomeContext from '../context/IncomeContext';

const Income = (props) => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        amount: "",
    });

    const { value1, value2 } = useContext(IncomeContext)
    const [state1, setState1] = value1;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState1(state1 + Number(formValues.amount));
        console.log(state1);
        navigate('/');

    };

    const handleClick = () => {
        navigate('/');
    };



    return (
        <>
            <h1>Income</h1>
            <hr></hr>


            <form id="formu" onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="amount">Income Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder=""
                        value={formValues.amount}
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
export default Income;