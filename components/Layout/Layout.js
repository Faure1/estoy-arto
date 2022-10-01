import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import NavBarComponent from '../NavBarComponent'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>
                    Zondar 🇦🇷 | Argentina
                </title>
                <meta name='description' content='Pagina oficial de proyecto Zondar el cual se basa en mandar una sonda a la atmosfera la cual sea reutilizable'></meta>
                <meta charSet="utf-8" />
                <meta name="keywords" content="sonda,metereología,clima,argentina,iresm" />
                <meta name="author" content="Lautaro Faure, Julian Murno, Santiago Faginoli, Nico Pereyra" />
                <link rel="icon" href="./assets/logo.png"></link>
            </Head>
            <NavBarComponent />
            <main className="container-main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout