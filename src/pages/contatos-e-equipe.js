import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import { PageSection2 } from '../components/page-section/page-secion-2/page-section-2'

const ContatosPage = () => {
    return (
        <div className="
            bg-gradient-to-t from-zinc-100 via-zinc-100 to-zinc-50

        ">

            <Header/>

            <div className="h-[20px]"></div>

            {/* <PageSection2Container> */}
                
                          <br></br>

                <PageSection2 
                    direction='left' 

                    leftContent={
                        <div className="
                            p-8
                            text-end
                            text-green-600

                        ">
                            <h1 className="text text-3xl font-extrabold">
                                Contato
                            </h1>


                            <p className="pt-2 font-semibold">
                                Telefone: 49 3256 3222
                            </p>

                            <p className="pt-2 font-semibold">
                                Whatsapp: 49 3256 3222
                            </p>


                            <p className="pt-2 font-semibold">
                                Instagram: @biblioteca-videira
                            </p>

                            <p className="pt-2 font-semibold">
                                Facebook: biblioteca-videira@ifc.edu.br
                            </p>

                        </div>
                    }
                    rightContent={
                        <div className="
                            p-8
                            text-start
                            text-zinc-200
                        ">
                            <h1 className="text text-3xl font-extrabold">
                                Equipe
                            </h1>

                            <p className="pt-2 font-semibold">
                                Bibliotecários: Graziele Reisdorf
                            </p>

                            <p className="pt-2 font-semibold">
                                Área de Renovação: Maria Ana Beatriz
                            </p>

                            <p className="pt-2 font-semibold">
                                Área de reservas: Maria Ana Beatriz
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


export { ContatosPage }

