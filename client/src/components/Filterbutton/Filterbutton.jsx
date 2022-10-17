import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTypes, orderFilter, refresh } from '../../redux/actions';

export default function Filterbutton({ name, all, opciones }) {
	const dispatch = useDispatch();

	const handlerChange = async (event) => {
		const targetName = event.target.name;
		const targetValue = event.target.value;

		switch (targetName) {
			case 'Types':
				event.target.value === 'All types'
					? dispatch(refresh())
					: dispatch(filterTypes(targetValue));
				break;

			default:
				dispatch(orderFilter(targetValue));
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
