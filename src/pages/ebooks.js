import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { HeadingEmphasis } from '../components/heading/emphasis/headingEmphasis'


const EbooksPage = () => {

    return (
        <div>

            <Header></Header>

            <div className="h-screen w-full bg-slate-100 bg-opacity-30">

                <HeadingEmphasis
                  text="From all those things that we remember for all life, love is one of them, until we die, we remember beloved ones and hate, is nothing but a insignificant word"
                />

            </div>


            <Footer></Footer>
        </div>
    )


}

export { EbooksPage }