import React, { useState } from "react";

function CatBlock({title, price}) {
	const [catCount, setCatCount] = useState(0);

	const onClickAddButton = () => {
		setCatCount(catCount + 1);
	}

	return (
		<div className="cat-block">
			<img
				className="cat-block__image"
				src="../img/british2.jpg"
				alt="British"
			/>
			<h4 className="cat-block__title">{title}</h4>
			<div className="cat-block__selector">
				<ul>
					<li className="active">взрослый</li>
					<li>котёнок</li>
				</ul>
				<ul>
					<li className="active">1 кг.</li>
					<li>3 кг.</li>
					<li>5 кг.</li>
				</ul>
			</div>
			<div className="cat-block__bottom">
				<div className="cat-block__price">от {price} L</div>
				<button onClick={onClickAddButton} className="button button--outline button--add">
					<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path
						d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
						fill="white"
					/>
					</svg>
					<span>Добавить</span>
					<i>{catCount}</i>
				</button>
			</div>
		</div> 
	)
}

export default CatBlock;