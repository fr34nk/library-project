import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import { PageSection2 } from '../components/page-section/page-secion-2/page-section-2'
import { B } from '../components/tipografia/emphasis';

const EquipePage = () => {
    return (
        <div className="bg-gradient-to-t from-zinc-100 via-zinc-100 to-zinc-50">

            <Header/>

            <div className="h-[20px]"></div>

            {/* <PageSection2Container> */}
                
                <br></br>

                <PageSection2 
                    direction='left' 
                    height='300px'
                    leftContent={
                        <div className="
                            p-8
                            text-end
                            text-green-600

                        ">
                        </div>
                    }
                    rightContent={
                        <div className="p-8 text-start text-zinc-200">
                            <h1 className="text text-3xl font-extrabold">
                                Equipe
                            </h1>

                            <p className="pt-2 ">
                                <B>Bibliotecário:</B> 
                                <br/>
                                Nelson Magalhães de Oliveira
                            </p>

                            <p className="pt-2 font-semibold">
                                <B>Auxiliares de Biblioteca:</B>
                            </p>
                            <p className="pt-2">
                                Grasiele Reisdöfer
                                <br/>
                                Samantha Vanin Felchilcher
                                <br/>
                                Vanessa Bettoni
                            </p>

                        </div>
                }>

                </PageSection2>

                <br></br>

            {/* </PageSection2Container>  */}

            <Footer/>
        </div>
    )
}

export { EquipePage }

