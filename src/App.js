import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import CatBlock from './components/CatBlock';

import './scss/app.scss';

function App() {
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
					<CatBlock title='Британская' price={500} />
					<CatBlock title='Абиссин' price={400} />
					<CatBlock title='Русская голубая' price={350} />
					<CatBlock title='Оцикет' price={600} />
					<CatBlock title='Персидская' price={550} />
					<CatBlock title='Сиамская' price={450} />
				</div>
			</div>
			</div>
		</div>
	);
}

export default App;
