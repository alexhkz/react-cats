import React, { createContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { increment, decrement } from "./redux/slices/filterSlice";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import './scss/app.scss';

export const SearchContext = createContext();

function App() {
	const [searchValue, setSearchValue] = useState('');
	const count = useSelector((state) => state.counter.count)
 	const dispatch = useDispatch()

	return (
		<div className="wrapper">
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
			<textarea>Что-то</textarea>
			<SearchContext.Provider value={{searchValue, setSearchValue}}>
				<Header />
				<div className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
