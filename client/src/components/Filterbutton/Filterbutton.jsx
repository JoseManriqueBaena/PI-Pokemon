import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTypes, orderFilter, refresh } from '../../redux/actions';

export default function Filterbutton({
	name,
	all,
	opciones,
	paginado,
	ordenado,
}) {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	const handlerChange = async (event) => {
		const targetName = event.target.name;
		const targetValue = event.target.value;

		switch (targetName) {
			case 'Types':
				paginado(1);
				event.target.value === 'All types'
					? dispatch(refresh())
					: dispatch(filterTypes(targetValue));
				break;

			default:
				paginado(1);
				ordenado(targetValue);
				dispatch(orderFilter(targetValue));
				break;
		}
	};

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

	return (
		<>
			{loading ? null : (
				<div>
					<select name={name} id={name} onChange={handlerChange}>
						<option key={all} value={all}>
							{all}
						</option>
						{opciones?.map((element) => (
							<option key={element} value={element}>
								{capitalize(element)}
							</option>
						))}
					</select>
				</div>
			)}
		</>
	);
}
