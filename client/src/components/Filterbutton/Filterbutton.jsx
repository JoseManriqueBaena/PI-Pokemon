import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTypes, getAllPokemos } from '../../redux/actions';

export default function Filterbutton({ name, all, opciones }) {
	const dispatch = useDispatch();

	const handlerChange = async (event) => {
		const targetName = event.target.name;
		const targetValue = event.target.value;

		// if (targetName === 'Types') {
		// 	event.target.value === 'All types'
		// 		? dispatch(getAllPokemos())
		// 		: dispatch(filterTypes(targetValue));
		// }

		switch (targetName) {
			case 'Types':
				event.target.value === 'All types'
					? dispatch(getAllPokemos())
					: dispatch(filterTypes(targetValue));
				break;

			case 'Order':
				console.log(targetValue);
				break;

			case 'Attack':
				console.log(targetValue);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div>
				<select name={name} id={name} onChange={handlerChange}>
					<option key={all} value={all}>
						{all}
					</option>
					{opciones?.map((element) => (
						<option key={element} value={element}>
							{element}
						</option>
					))}
				</select>
			</div>
		</>
	);
}
