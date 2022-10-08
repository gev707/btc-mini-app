import Head from "next/head";
import React, { FC } from "react"
import Logo from "../assets/icons/logo";
import Header from "../components/Header";

interface IMainLayout {
    children: JSX.Element,
    title?: string,

}
const MainLayout = ({ children, title }: IMainLayout) => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg" href='/logo.svg' />
                <title>{title}</title>
            </Head>
            <div className='main'>
                <Header />
                {children}
            </div>
        </>
    )
}
export default MainLayout;