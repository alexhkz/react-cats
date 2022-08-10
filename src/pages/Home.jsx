import React, { useEffect, useState } from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import CatBlock from '../components/CatBlock';
import Skeleton from "../components/CatBlock/skeleton.jsx";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	const sortBy = sortType.sortProperty.replace('-', '');
	const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
	const category = categoryId > 0 ? `category=${categoryId}` : '';
	
	useEffect(() => { 
		setIsLoading(true);
		fetch(`https://62e266d53891dd9ba8e74514.mockapi.io/cats?${category}&sortBy=${sortBy}&order=${order}`)
		.then(res => res.json())
		.then(data => {
			setItems(data)
			setIsLoading(false);
		});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className="content__title">Все котики</h2>
			<div className="content__items">
				{isLoading 
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((obj) => <CatBlock key={obj.id} {...obj} /> )}
			</div>
		</div>
	);
};

export default Home;