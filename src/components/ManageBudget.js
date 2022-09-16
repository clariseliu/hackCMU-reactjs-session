import { useAppContext } from "../contexts/AppContext";

export default function ManageBudget(){
    const { budget, dispatch } = useAppContext();
    return(
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            <>
                <span>Budget: ${budget}</span>
                <button type='button' className='btn btn-primary' onClick={() => {}}>
                    Edit
                </button>
            </>
        </div>    
    );
}