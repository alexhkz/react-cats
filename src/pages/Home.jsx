import React, { useEffect, useState } from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import CatBlock from '../components/CatBlock';
import Skeleton from "../components/CatBlock/skeleton.jsx";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => { 
		fetch('https://62e266d53891dd9ba8e74514.mockapi.io/cats')
		.then(res => res.json())
		.then(data => {
			setItems(data)
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories/>
				<Sort/>
			</div>
			<h2 className="content__title">Все котики</h2>
			<div className="content__items">
				{isLoading 
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((obj) => <CatBlock key={obj.id} {...obj} /> )}
			</div>
		</>
	);
};

export default Home;