import Raect, { useMemo } from 'react'
import moment from 'moment'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/types/types'
import useFetchedCurrency from './hooks/useFetchedCurrency'
import Loading from '../Loading'
import BtcLogo from '../../assets/icons/btcLogo'


const CoinDask = () => {
    const { currency,isLoading } = useAppSelector((state: RootState) => state.CurrencyConfigDataStore)
    const { bpi: { EUR, USD, GBP }, time: { updated }, chartName } = currency;

    useFetchedCurrency();

    const renderCoinDesk = useMemo(() => {
        if (!currency) return;
        return (
            <div className='coin'>
                <div className='coin__title'>
                    <h2>{chartName}</h2>
                    {updated && <div>Update is {moment(updated).format('lll')}</div>}
                </div>
                <div className='coin__desk' title={USD?.description}>
                    <BtcLogo />
                    <div className='d-flex'>
                        <h3>{USD?.rate_float}</h3>
                        <span>-</span>
                        <h3>{USD?.code} <span>&#36;</span></h3>
                    </div>
                </div>
                <div className='coin__desk' title={EUR?.description}>
                    <BtcLogo />
                    <div className='d-flex'>
                        <h3>{EUR?.rate_float}</h3>
                        <span>- </span>
                        <h3>{EUR?.code} <span>&euro;</span></h3>
                    </div>
                </div>
                <div className='coin__desk' title={GBP?.description}>
                    <BtcLogo />
                    <div className='d-flex'>
                        <h3>{GBP?.rate_float}</h3>
                        <span>- </span>
                        <h3>{GBP?.code} <span>&pound;</span></h3>
                    </div>
                </div>
            </div>
        )
    }, [currency])

    return (
        <div className='container'>
            {renderCoinDesk}
            {isLoading && <Loading />}
        </div>
    )
}

export default CoinDask;