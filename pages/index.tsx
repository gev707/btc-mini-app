import { useRouter } from "next/router"
import MainLayout from "../src/layouts/MainLayout"

const Home = () => {
  const router = useRouter()
  const goCoinDesktopPage = () => {
    router.push('/coindesk')
  }
  return (
    <>
      <div className="container">
        <div>
          <h1 className="title">About Bitcoin Cripto</h1>
          <h2>
            Bitcoin is a cryptocurrency, a virtual currency 
            designed to act as money and a form of payment 
            outside the control of any one person, group, 
            or entity, and thus removing the need for 
            third-party involvement in financial transactions.
          </h2>
        </div>
      </div>
      <div className="center">
        <button
          className="btn mt-2"
          onClick={goCoinDesktopPage}>Coin Desktop
        </button>
      </div>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout title="Home Page">{page}</MainLayout>
}