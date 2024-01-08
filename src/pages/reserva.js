import React from 'react';
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"

const ReservasPage = () => {
    return (
        // page wrapper
        <div className="

        ">

            <Header/>

            <div className="flex h-screen bg-slate-200">
                <div className="flex flex-row justify-center text-center h-20 my-auto mx-auto">

                    <h1 className="flex text-4xl font-black text-slate-300 text-center ">
                        Reservas Page
                    </h1>

                </div>
            </div>

            <Footer/>

        </div>
    )
}

export { ReservasPage  };