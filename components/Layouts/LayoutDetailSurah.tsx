import Head from "next/head";
import { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeaderDetail from "../Header/HeaderDetail";

export default function LayoutDetailSurah({children}: {children: ReactElement}) {
    return(
        <div className="bg-[#111729]">

            <Head>
                <title>Quran Digital</title>
                <meta name="google" content="notranslate"/>
            </Head>

            <HeaderDetail/>
                <main  className="px-6 sm:px-20 ">
                {children}
                </main>
            <Footer/>
        </div>
    )
}