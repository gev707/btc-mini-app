import { useEffect } from "react";
import { getCurrency } from "../../../store/CurrencyConfigDataStore/thunk";
import { useAppDispatch } from "../../../store/hooks";

const useFetchedCurrency = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getCurrency())
    },[dispatch])
   
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCurrency())
        }, 30000)
        return ()=> clearInterval(interval)
    }, [dispatch])

}

export default useFetchedCurrency