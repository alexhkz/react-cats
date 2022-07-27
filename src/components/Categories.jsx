import React from 'react'
import { useState } from 'react';

function Categories() {
	const [activeIndex, setActiveIndex] = useState(0);

	const categories = [
		'Все',
		'Чёрные',
		'Белые',
		'Серые',
		'Рыжие',
		'Разноцветные',
	]
	
	return (
		<div className="categories">
			<ul>
				{categories.map((value, i) => (
					<li 
						key={i}
						onClick={() => setActiveIndex(i)} 
						className={activeIndex === i ? 'active' : ''}>
						{value}
					</li>
				))}
				
			</ul>
		</div>
	)
}

export default Categories;