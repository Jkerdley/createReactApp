import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		if (promptValue === null || promptValue === undefined) return;

		if (promptValue.length < 3) {
			setError('Введите минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const date = new Date();
			const valueDate = `(${date.toLocaleDateString()} ${date.toLocaleTimeString()})`;
			const updatedList = [...list, { id: Date.now(), value, valueDate }];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: <output className={styles.currentValue}>{value}</output>
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles.listItem}>
								{item.value} {item.valueDate}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
