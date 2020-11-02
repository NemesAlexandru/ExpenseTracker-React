let AppReducer = (state, action) => {
switch(action.type){
    case 'ADD_INCOME':
        return {
            ...state,
            incomeTransactions: [action.payload, ...state.incomeTransactions]
        }
        case 'ADD_EXPENSE':
        return {
            ...state,
            expenseTransactions: [action.payload, ...state.expenseTransactions]
        }
    default:
        return state;
}
};

export default AppReducer;