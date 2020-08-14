//#ACTION GENERATORS FOR EXPENSES
import { v1 as uuid }from 'uuid';

/*
    # NAMED EXPORT === export const addExpense
  
 */

//# ACTION GENERATORS ==================================
    // ADD_EXPENSE
     export const addExpense = (
        { 
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = {}
     ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    });
    // REMOVE_EXPENSE
    export const removeExpense = (
        { id } = {}
    ) => ({
        type: 'REMOVE_EXPENSE',
        id: id

    });

    // EDIT_EXPENSE
    export const editExpense = ( id, updates ) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });
