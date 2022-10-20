import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../../redux/actions';
import { createPokemon } from '../../redux/actions';
import style from './CreatePokemon.module.css';

export default function CreatePokemon() {
	const [newPokemon, setNewPokemon] = useState({
		name: '',
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		height: 0,
		weight: 0,
		img: '',
		type: [],
	});

	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getAllTypes());
	}, []);

	const handlerChange = (event) => {
		const nameProp = event.target.name;
		let valueProp = event.target.value;
		if (nameProp !== 'name' && nameProp !== 'img')
			valueProp = parseInt(event.target.value);
		setNewPokemon({ ...newPokemon, [nameProp]: valueProp });
	};

	const handlerChangeSelect = (event) => {
		const valueProp = event.target.value;
		if (newPokemon?.type?.length < 2) {
			if (newPokemon.type.includes(valueProp))
				return alert('No se pueden agregar dos tipos iguales');
			setNewPokemon({
				...newPokemon,
				type: [...newPokemon.type, valueProp],
			});
		} else {
			alert('No se puede agregar más de dos tipos');
		}
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		dispatch(createPokemon(newPokemon));
		console.log(newPokemon);
		alert('Created pokemon');
		setNewPokemon({
			name: '',
			hp: 0,
			attack: 0,
			defense: 0,
			speed: 0,
			height: 0,
			weight: 0,
			img: '',
			type: [],
		});
	};

	const onClose = (event) => {
		const typeClose = event.target.value;
		const filterTypes = newPokemon?.type?.filter(
			(nameType) => nameType !== typeClose
		);
		setNewPokemon({
			...newPokemon,
			type: filterTypes,
		});
	};

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	}

	return (
		<>
			<div>
				<h2>Create Pokemon</h2>
				<form onSubmit={handlerSubmit}>
					<div>
						<label>Name: </label>
						<input
							type='text'
							name='name'
							onChange={handlerChange}
							value={newPokemon.name}
						/>
					</div>

					<div>
						<label>Hp: </label>
						<input
							type='number'
							name='hp'
							onChange={handlerChange}
							value={newPokemon.hp}
						/>
					</div>

					<div>
						<label>Attack: </label>
						<input
							type='number'
							name='attack'
							onChange={handlerChange}
							value={newPokemon.attack}
						/>
					</div>

					<div>
						<label>Defense: </label>
						<input
							type='number'
							name='defense'
							onChange={handlerChange}
							value={newPokemon.defense}
						/>
					</div>

					<div>
						<label>Speed: </label>
						<input
							type='number'
							name='speed'
							onChange={handlerChange}
							value={newPokemon.speed}
						/>
					</div>

					<div>
						<label>Height: </label>
						<input
							type='number'
							name='height'
							onChange={handlerChange}
							value={newPokemon.height}
						/>
					</div>

					<div>
						<label>Weight: </label>
						<input
							type='number'
							name='weight'
							onChange={handlerChange}
							value={newPokemon.weight}
						/>
					</div>

					<div>
						<label>Image: </label>
						<input
							type='text'
							name='img'
							onChange={handlerChange}
							value={newPokemon.img}
						/>
					</div>
					<div>
						<select
							defaultValue={'defaul'}
							name={'type'}
							id={'type'}
							onChange={handlerChangeSelect}
						>
							<option disabled={true} value='defaul'>
								Select the type
							</option>
							{allTypes?.map((type) => (
								<option key={type.id} value={type.name}>
									{capitalize(type.name)}
								</option>
							))}
						</select>
					</div>

					<div className={style.typeContainerMain}>
						{newPokemon?.type?.map((nameType) => (
							<div className={style.pTypeContainer} key={nameType}>
								<p className={style.pType}> {nameType} </p>
								<button
									value={nameType}
									className={style.buttonX}
									onClick={onClose}
								>
									x
								</button>
							</div>
						))}
					</div>

					<button type='submit'>Create</button>
				</form>
			</div>
		</>
	);
}
