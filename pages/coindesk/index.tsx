import { useCallback } from "react"
import CoinDask from "../../src/components/CoinDesk"
import MainLayout from "../../src/layouts/MainLayout"
import { getCurrency } from "../../src/store/CurrencyConfigDataStore/thunk"
import { useAppDispatch } from "../../src/store/hooks"

const CoinDaskPage = () => {
  const dispatch = useAppDispatch();

  const handleUpdateManually = useCallback(() => {
    dispatch(getCurrency())
  }, [dispatch])

  return (
    <div>
      <h1 className="title">Coin Desktop</h1>
      <div className='container'>
        <h4>Currency will update every 30 second</h4>
        <button
          className="btn"
          onClick={handleUpdateManually}
        >Update Manually
        </button>
      </div>
      <CoinDask />
    </div>
  )
}
export default CoinDaskPage

CoinDaskPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout title="Coin Desktop Page">{page}</MainLayout>
}