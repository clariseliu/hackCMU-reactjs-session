import React from "react";
import { AppProvider } from "../contexts/AppContext";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import ManageBudget from "./ManageBudget";
import RemainingBudget from "./RemainingBudget";
import SpentAmount from "./SpentAmount";

export default function Budgeting(){
    return(
        <AppProvider>
            <div className="container">
                <div className="mt-3">
                    <h1>Budget Tracker</h1>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                        <ManageBudget />
                    </div>
                    <div className="col-sm">
                        <RemainingBudget />
                    </div>
                    <div className="col-sm">
                        <SpentAmount />
                    </div>
                </div>
                
                {/* Expenses */}
                <div className="row mt-3">
                    <h3>Expenses</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                        <ExpenseList />
                    </div>
                </div>

                <div className="row mt-3">
                    <h3>Add Expense</h3>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </AppProvider>        
    );
}