import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Income from "./components/Income"
import Expense from "./components/Expense"
import IncomeContext from "./context/IncomeContext"
import React, { useState } from 'react';

import './App.css';

function App() {
	const [state1, setState1] = useState(0);
	const [state2, setState2] = useState(0);
	return (
		<IncomeContext.Provider value={{ value1: [state1, setState1], value2: [state2, setState2] }}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="income" element={<Income />} />
					<Route path="expense" element={<Expense />} />
				</Routes>
			</div >
		</IncomeContext.Provider>



	);
}

export default App;
