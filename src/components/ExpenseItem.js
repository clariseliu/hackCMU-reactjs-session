import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useAppContext } from '../contexts/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useAppContext();
	console.log("props", props);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge bg-primary badge-pill mr-3'>${props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;