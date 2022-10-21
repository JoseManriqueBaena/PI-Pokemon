import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTypes, orderFilter, refresh } from '../../redux/actions';

export default function Filterbutton({
	defaultOption,
	name,
	all,
	opciones,
	paginado,
	ordenado,
	handleActivated,
}) {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	const handlerChange = async (event) => {
		const targetName = event.target.name;
		const targetValue = event.target.value;
		handleActivated();
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
					<select
						defaultValue={defaultOption}
						name={name}
						id={name}
						onChange={handlerChange}
					>
						<option hidden key={defaultOption} value={defaultOption}>
							{defaultOption}
						</option>

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
