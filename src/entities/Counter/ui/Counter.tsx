import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from 
    "../model/selectors/getCounterValue/getCounterValue";
import { AppButton } from "shared";


export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.incremented())
    }
    const decrement = () => {
        dispatch(counterActions.decremented())
    }
    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <AppButton
                // eslint-disable-next-line i18next/no-literal-string
               
                onClick={increment}
                data-testid="increment-btn"
            >increment</AppButton>
            <AppButton
          
                onClick={decrement}
                data-testid='decrement-btn'
            >decrement</AppButton>
        </div>
    )
}