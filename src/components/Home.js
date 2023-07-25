import { Link } from "react-router-dom";
import React, { useState, useRef, useContext } from 'react';
import IncomeContext from "../context/IncomeContext";

const Home = () => {

    const { value1, value2 } = useContext(IncomeContext)
    const [state1, setState1] = value1;
    const [state2, setState2] = value2;


    return (
        <>
            <h1>Home</h1>
            <hr></hr>



            <div className="card">
                <div className="content">
                    <div className="title">Income</div>
                    <div className="price">TK {value1}</div>
                </div>
                <Link to='income'>
                    <button>
                        Add New
                    </button>
                </Link>
            </div>

            <div className="card">
                <div className="content">
                    <div className="title">Expense</div>
                    <div className="price">TK {value2}</div>
                </div>
                <Link to='expense'>
                    <button>
                        Add New
                    </button>
                </Link>
            </div>

        </>
    );
};
export default Home;