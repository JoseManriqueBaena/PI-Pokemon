import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImgTypes, getAllTypes } from '../../redux/actions';
import { createPokemon } from '../../redux/actions';
import style from './CreatePokemon.module.css';
import { capitalize, findInImgTypes } from '../../redux/reducer/helpers';

export default function CreatePokemon({ history }) {
	const imgTypes = useSelector((state) => state.imgTypes);
	// console.log(imgTypes);
	const [newPokemon, setNewPokemon] = useState({
		name: '',
		hp: '',
		attack: '',
		defense: '',
		speed: '',
		height: '',
		weight: '',
		img: '',
		type: [],
	});

	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getAllImgTypes());
		dispatch(getAllTypes());
	}, []);

	const handlerChange = (event) => {
		const nameProp = event.target.name;
		let valueProp = event.target.value;
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
		alert('Created pokemon');
		setNewPokemon({
			name: '',
			hp: '',
			attack: '',
			defense: '',
			speed: '',
			height: '',
			weight: '',
			img: '',
			type: [],
		});
		history.push('/home');
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

	return (
		<>
			<div className={style.mainContainer}>
				<form onSubmit={handlerSubmit}>
					<div className={style.imputsContainer}>
						<h2>Create Pokemon</h2>
						{/* Name */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='text'
								className={style.formField}
								placeholder='name'
								onChange={handlerChange}
								value={newPokemon.name}
								name='name'
								id='name'
								autoComplete='off'
								required
							/>
							<label className={style.formLabel}>Name</label>
						</div>
						{/* Hp */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Hp'
								onChange={handlerChange}
								value={newPokemon.hp}
								name='hp'
								id='hp'
								required
							/>
							<label className={style.formLabel}>Hp</label>
						</div>
						{/* Attack */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Attack'
								onChange={handlerChange}
								value={newPokemon.attack}
								name='attack'
								id='attack'
								required
							/>
							<label className={style.formLabel}>Attack</label>
						</div>
						{/* Defense */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Defense'
								onChange={handlerChange}
								value={newPokemon.defense}
								name='defense'
								id='defense'
								required
							/>
							<label className={style.formLabel}>Defense</label>
						</div>
						{/* Speed */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Speed'
								onChange={handlerChange}
								value={newPokemon.speed}
								name='speed'
								id='speed'
								required
							/>
							<label className={style.formLabel}>Speed</label>
						</div>
						{/* Height */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Height'
								onChange={handlerChange}
								value={newPokemon.height}
								name='height'
								id='height'
								required
							/>
							<label className={style.formLabel}>Height</label>
						</div>
						{/* Weight */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='number'
								className={style.formField}
								placeholder='Weight'
								onChange={handlerChange}
								value={newPokemon.weight}
								name='weight'
								id='weight'
								required
							/>
							<label className={style.formLabel}>Weight</label>
						</div>
						{/* Image */}
						<div className={`${style.formGroup} ${style.field}`}>
							<input
								type='text'
								className={style.formField}
								placeholder='Image'
								onChange={handlerChange}
								value={newPokemon.img}
								name='img'
								id='img'
							/>
							<label className={style.formLabel}>Image</label>
						</div>

						<select
							className={style.customSelect}
							defaultValue={'default'}
							name={'type'}
							id={'type'}
							onChange={handlerChangeSelect}
						>
							<option
								className={style.selectOptions}
								hidden={true}
								value='default'
							>
								Select the type
							</option>
							{allTypes?.map((type) => (
								<option key={type.id} value={type.name}>
									{capitalize(type.name)}
								</option>
							))}
						</select>

						<div className={style.typeContainerMain}>
							{newPokemon?.type?.map((nameType) => (
								<div
									className={style.pTypeContainer}
									key={nameType}
									style={{
										backgroundColor: findInImgTypes(nameType, imgTypes).color,
									}}
								>
									{nameType === 'unknown' || nameType === 'shadow' ? null : (
										<div className={style.imageContainer}>
											<img
												src={findInImgTypes(nameType, imgTypes).url}
												alt={`image ${nameType}`}
											/>
										</div>
									)}
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
					</div>
				</form>
			</div>
		</>
	);
}
