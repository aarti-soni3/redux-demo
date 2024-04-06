export const depositeMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount,
        })
    }
} 

export const WithdrawMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount,
        })
    }
}