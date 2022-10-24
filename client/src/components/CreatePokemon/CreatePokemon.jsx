import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllImgTypes, getAllTypes } from '../../redux/actions';
import { createPokemon } from '../../redux/actions';
import style from './CreatePokemon.module.css';
import { capitalize, findInImgTypes } from '../../redux/reducer/helpers';
import iconQuestionRed from '../../img/icon_question_red.svg';
import iconQuestionBlue from '../../img/icon_question_blue1.svg';

function validate(input) {
	let errors = {};
	if (!input.name) {
		errors.name = true;
	} else if (input.name.length < 3) {
		errors.name = true;
	} else if (!/^[a-zA-Z0-9\s]*$/.test(input.name)) {
		errors.name = true;
	}

	if (!input.hp) errors.hp = true;
	if (!input.attack) errors.attack = true;
	if (!input.defense) errors.defense = true;
	if (!input.speed) errors.speed = true;
	if (!input.height) errors.height = true;
	if (!input.weight) errors.weight = true;
	if (input.type.length === 0) errors.type = true;

	return errors;
}

export default function CreatePokemon({ history }) {
	const imgTypes = useSelector((state) => state.imgTypes);

	const [errors, setErrors] = useState({
		inicial: true,
	});
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
		setErrors(validate({ ...newPokemon, [nameProp]: valueProp }));
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

			setErrors(
				validate({
					...newPokemon,
					type: [...newPokemon.type, valueProp],
				})
			);
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
		setErrors(
			validate({
				...newPokemon,
				type: filterTypes,
			})
		);
	};

	return (
		<>
			<div className={style.mainContainer}>
				<form onSubmit={handlerSubmit}>
					<div className={style.inputsContainer}>
						<h2>Create Pokemon</h2>
						{/* Name */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='text'
									className={
										errors.name ? style.formFieldErrors : style.formField
									}
									placeholder='name'
									onChange={handlerChange}
									value={newPokemon.name}
									name='name'
									id='name'
									autoComplete='off'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.name
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Name
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.name
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.name
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.name
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Name is required. <br /> Can have letters and numbers.
											<br /> Must have at least three characters.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Hp */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									// onKeyDown={(event) => console.log(event.which !== 69)}
									className={
										errors.hp ? style.formFieldErrors : style.formField
									}
									placeholder='Hp'
									onChange={handlerChange}
									value={newPokemon.hp}
									name='hp'
									id='hp'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.hp
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Hp
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.hp
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.hp
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.hp
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Hp is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Attack */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									className={
										errors.attack ? style.formFieldErrors : style.formField
									}
									placeholder='Attack'
									onChange={handlerChange}
									value={newPokemon.attack}
									name='attack'
									id='attack'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.attack
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Attack
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.attack
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.attack
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.attack
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Attack is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Defense */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									className={
										errors.defense ? style.formFieldErrors : style.formField
									}
									placeholder='Defense'
									onChange={handlerChange}
									value={newPokemon.defense}
									name='defense'
									id='defense'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.defense
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Defense
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.defense
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.defense
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.defense
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Defense is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Speed */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									className={
										errors.speed ? style.formFieldErrors : style.formField
									}
									placeholder='Speed'
									onChange={handlerChange}
									value={newPokemon.speed}
									name='speed'
									id='speed'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.speed
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Speed
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.speed
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.speed
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.speed
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Speed is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Height */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									className={
										errors.height ? style.formFieldErrors : style.formField
									}
									placeholder='Height'
									onChange={handlerChange}
									value={newPokemon.height}
									name='height'
									id='height'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.height
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Height
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.height
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.height
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.height
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Height is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Weight */}
						<div className={style.inputContainer}>
							<div className={`${style.formGroup} ${style.field}`}>
								<input
									type='number'
									className={
										errors.weight ? style.formFieldErrors : style.formField
									}
									placeholder='Weight'
									onChange={handlerChange}
									value={newPokemon.weight}
									name='weight'
									id='weight'
									required
								/>
								<label
									className={style.formLabel}
									style={
										errors.weight
											? { color: 'var(--redPokeball)' }
											: { color: 'var(--blue1)' }
									}
								>
									Weight
								</label>
								{/* Burbujas */}
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										style={
											errors.weight
												? { visibility: 'hidden' }
												: { visibility: 'visible' }
										}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>
									<img
										className={style.imgBurbujaRed}
										style={
											errors.weight
												? { visibility: 'visible' }
												: { visibility: 'hidden' }
										}
										src={iconQuestionRed}
										alt={'iconQuestionRed'}
									/>

									<div
										className={style.infoBurbuja}
										style={
											errors.weight
												? { border: '2px solid var(--redPokeball)' }
												: { border: 'none' }
										}
									>
										<p>
											Weight is required. <br /> Can only contain numbers.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* Image */}
						<div className={style.inputContainer}>
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
								<div className={style.burbujaContainer}>
									<img
										className={style.imgBurbujaBlue}
										src={iconQuestionBlue}
										alt={'iconQuestionBlue'}
									/>

									<div className={style.infoBurbuja}>
										<p>Url of the image you want for your pokemon.</p>
									</div>
								</div>
							</div>
						</div>

						<select
							className={
								errors.type ? style.customSelectError : style.customSelect
							}
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
						<button
							disabled={Object.values(errors).length === 0 ? false : true}
							className={
								Object.values(errors).length === 0
									? style.buttonCreate
									: style.buttonCreateDisabled
							}
							type='submit'
						>
							Create
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
