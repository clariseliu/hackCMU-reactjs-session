import { useAppContext } from "../contexts/AppContext";

export default function SpentAmount(){
    const { expenses } = useAppContext();
    const spentAmount = expenses.reduce((total, expense) => {
        console.log("expenses", expense, total);
        return (total += expense.cost);
    }, 0);

    return(
        <div className='alert alert-warning p-4 d-flex align-items-center justify-content-between'>
            <>
                <span>Spent Amount: ${spentAmount}</span>
            </>
        </div>
    );
}