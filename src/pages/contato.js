import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

import { PageSection2 } from '../components/page-section/page-secion-2/page-section-2'
import { B, I, U } from '../components/tipografia/emphasis';

const ContatoPage = () => {
    return (
        <div className="bg-gradient-to-t from-zinc-100 via-zinc-100 to-zinc-50">

            <Header/>

            <div className="h-[20px]"></div>

            {/* <PageSection2Container> */}
                
            <div className="w-full h-full">

                <br></br>

                <PageSection2 
                    direction='right' 
                    height='300px'
                    leftContent={
                        <div className="
                            p-8
                            text-end
                            text-green-600
                        ">

                            {/* <img 
                                className="object-cover"
                                alt=""
                                src="./biblioteca_ifc_v1.jpg"
                            /> */}

                        </div>
                    }
                    rightContent={
                        <div className="p-8 text-end text-zinc-200">
                            <h1 className="text text-3xl font-extrabold">
                                Contato
                            </h1>

                            <p className="pt-2">
                                <B>Entre em contato com a nossa equipe:</B>
                            </p>

                            <p className="pt-2">
                                <B>E-mail:</B> biblioteca.videira@ifc.edu.br
                            </p>


                            <p className="pt-2">
                                <B>Fone:</B> (49) 3533-4917
                            </p>

                            <p className="pt-2">
                                <B>WhatsApp:</B> (49) 3533-4917 - <U link="https://contate.me/bibliotecaifcvideira ">(Clique Aqui)</U>
                            </p>


                            <p className="pt-2">
                                <B>Instagram:</B> #bibliotecaifcvideira
                            </p>

                            <p className="pt-2">
                                <U><B link="https://m.facebook.com/profile.php/?id=61550841013497&name=xhp_nt__fb__action__open_user">Linkedin </B></U>
                            </p>



                        </div>
                }>

                </PageSection2>

                <br></br>




            </div>

            {/* </PageSection2Container>  */}

            <Footer/>
        </div>
    )
}

export { ContatoPage }

