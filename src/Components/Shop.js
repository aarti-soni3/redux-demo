import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from 'src/State/index.js';

const Shop = () => {

    const dispatch = useDispatch();
    const {WithdrawMoney,depositeMoney} = bindActionCreators(actionCreators,dispatch);
    const balance = useSelector(state => state.amount);


    return (
        <div>
            <>
            <div className='container'><br/>
                <h2>Deposite / Withdraw Money</h2>

                <button className='btn btn-primary mx-2' onClick={()=>{WithdrawMoney(100)}}>-</button> 
                Update Balance : {balance}
                <button className='btn btn-primary mx-2' onClick={()=>{depositeMoney(100)}}>+</button>

                {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button> 
                Update Balance
                <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
            </div>
            </>
        </div>
    )
}

export default Shop;