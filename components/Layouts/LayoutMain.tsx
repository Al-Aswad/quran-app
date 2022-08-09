import Head from "next/head";
import { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayoutMain({children}: {children: ReactElement}) {
    return(
        <div className="bg-[#111729]">

            <Head>
                <title>Quran Digital</title>
            </Head>

            <Header/>
                <main  className="px-6 sm:px-20 ">
                {children}
                </main>
            <Footer/>
        </div>
    )
}