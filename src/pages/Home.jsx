import React, { useEffect, useState } from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import CatBlock from '../components/CatBlock';
import Skeleton from "../components/CatBlock/skeleton.jsx";
import Pagination from '../components/Pagination';

const Home = ({searchValue}) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortType, setSortType] = useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	useEffect(() => { 
		setIsLoading(true);

		const sortBy = sortType.sortProperty.replace('-', '');
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const search = searchValue ? `&search=${searchValue}` : '';

		fetch(`https://62e266d53891dd9ba8e74514.mockapi.io/cats?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
		.then(res => res.json())
		.then(data => {
			setItems(data)
			setIsLoading(false);
		});
		window.scrollTo(0, 0);
		/*eslint-disable */
	}, [categoryId, sortType, searchValue, currentPage]);

	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const cats = items.map((obj) => <CatBlock key={obj.id} {...obj} /> );
	// const cats = items.filter(obj => {
	// 	if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
	// 		return true;
	// 	}
	// 	return false;
	// }).map((obj) => <CatBlock key={obj.id} {...obj} /> );

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
				<Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
			</div>
			<h2 className="content__title">Все котики</h2>
			<div className="content__items">
				{isLoading ? skeletons : cats}
			</div>
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	);
};

export default Home;