import React, {useState, useEffect} from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import CatBlock from './components/CatBlock';

import './scss/app.scss';

function App() {
	const [items, setItems] = useState([]);
	
	useEffect(() => { 
		fetch('https://62e266d53891dd9ba8e74514.mockapi.io/cats')
		.then(res => res.json())
		.then(data => setItems(data))
	}, []);

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories/>
					<Sort/>
				</div>
				<h2 className="content__title">Все котики</h2>
				<div className="content__items">
					{items.map(obj => (
						<CatBlock 
							key={obj.id}
							{...obj}
						/>
					))}

					{/* <CatBlock title='Британская' price={500} />
					<CatBlock title='Абиссин' price={400} />
					<CatBlock title='Русская голубая' price={350} />
					<CatBlock title='Оцикет' price={600} />
					<CatBlock title='Персидская' price={550} />
					<CatBlock title='Сиамская' price={450} /> */}
				</div>
			</div>
			</div>
		</div>
	);
}

export default App;
