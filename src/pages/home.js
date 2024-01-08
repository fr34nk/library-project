import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer'
import  { BlockButtons } from '../components/buttons/block-buttons/index'
import { SectionCall }  from '../components/page-section/page-section-1/page-section.c';
import { CardListComponent, Card } from '../components/card/card-1/card.c';
import { B, I, U } from '../components/tipografia/emphasis';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="relative grow w-full ">

            {/* Emphasis Section */}
            <div className="heading">

                <Header/>
                <div className="
                    relative 
                    max-h-[400px]
                    overflow-hidden
                    object-cover
                    text-end
                ">
                    <img 
                        alt=""
                        className="" 
                        src="./biblioteca_ifc_v1.jpg"
                    />
                    <h1 className="
                        w-1/2
                        
                        absolute right-4 top-1/4
                        
                        max-[1024]:text-8xl  text-6xl 
                        font-black
                        ">
                            <span className="bg-slate-50">
                                <span className="text-lime-600 inline-block">Biblioteca</span>
                                <span> </span>
                                <span> </span>
                                <span className="text-green-800 inline-block">IFC</span>
                                <span> </span>
                                <span className="text-lime-600 inline-block">Videira</span>

                            </span>
                    </h1>
                </div>
            </div>


            {/* Body Section */}
            <div className="relative w-full">
                <div className="
                    relative

                    h-6 z-10 p-3
                    flex-row flex-wrap
                    bg-gradient-to-b from-slate-100 to-slate-200

                    max-sm:static
                    max-sm:h-full
                ">

                    <div className="
                        relative
                        px-2 gap-2
                        z-10 
                        flex flex-row flex-wrap justify-start
                        -translate-y-1/2

                        max-sm:transform-none
                        max-sm:flex-row
                        max-sm:static
                        max-sm:justify-items-stretch

                        ">
                        <BlockButtons
                            buttons={[
                                { icon: 'L', title: 'Livros', desc: 'Livros em destaque', link: '' },
                                { icon: 'E', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
                                { icon: 'C', title: 'Cursos', desc: 'Link de Cursos', link: '/cursos' },
                                { icon: 'F', title: 'Fontes ', desc: 'Fontes para Pesquisa', link: '/guias' },
                                { icon: 'N', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }
                            ]}
                        />
                    </div>

                </div>


                {/* <div className="w-full h-6 bg-slate-200"> </div> */}


                <div className="w-full static">
                    <SectionCall
                        direction="right"
                        img='./biblioteca_ifc_v1.jpg'
                        title={
                            <>
                                <h2 className=' text-zinc-200 text-3xl font-extrabold text-end'>
                                    Apresentação
                                </h2>
                            </>
                        }
                        content={
                            <div className="text-end">
                                <div>
                                    <p className="pb-4 text-slate-200">
                                        A Biblioteca do Instituto Federal Catarinense (IFC) – Câmpus Videira – dispõe de infraestrutura e acervo para atendimento aos estudantes dos cursos
                                        técnicos, superiores e de pós-graduação. Todas as orientações, normas e procedimentos com relação ao uso do espaço e acervo estão contidas no regimento da unidade.
                                    </p>
                                </div>

                            </div>
                        }
                    />
                </div>

                <div className="w-full h-6 bg-slate-200"> </div>


                <div className="w-full relative max-sm:static">
                    <SectionCall
                        direction="left"
                        title={
                            <>
                                <h2 className=' text-zinc-200 text-3xl font-extrabold'>
                                    Guias
                                </h2>
                                <h3 className="text-green-800 font-semibold">
                                    Acesso ao acervo e guias digitais
                                </h3>
                            </>
                        }
                        content={
                            <div className="">
                                <div>
                                    <p className="pb-4 text-slate-200">
                                        <B link="https://pergamum.ifc.edu.br/login?redirect=/">
                                            Pergamum:
                                         </B> Pesquisa do acervo físico e digital!
                                        <br/>

                                        <B>Meu Pergamum:</B>Onde você faz seu cadastro para reservar e renovar livros!
                                        <br/>
                                        <br/>

                                        Para mais explicações, acesse <U link="/guias"><I>“Guia do Usuário”</I></U>.

                                        Caso ainda tenha duvidas, mande uma mensagem em nosso WhatsApp ou venha á nossa biblioteca, ficaremos felizes em ajudar você!
                                    </p>
                                </div>

                                <div className="flex justify-items-end gap-2">
                                    <a href="https://pergamum.ifc.edu.br/login?redirect=/" target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="p-2 align-middle justify-center rounded flex w-32 bg-slate-100 font-semibold text-zinc-700">
                                                Pergamum
                                        </button>
                                    </a>
                                    <Link to="/guias">
                                        <button
                                            className="p-2 align-middle justify-center rounded flex w-32 bg-slate-100 font-semibold text-zinc-700">
                                                Guias
                                        </button>
                                    </Link>

                                </div>
                            </div>

                        }
                    />
                </div>

                <div className="max-sm:static">
                    <CardListComponent/>
                </div>

                <CardListComponent
                    className="
                        relative 
                        p-10
                        flex flex-row justify-center
                        gap-2
                        bg-slate-200
                        max-sm:static
                    " 
                >
                    <Card
                        img='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                        title="Renovação das senhas"
                        link='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                        text="Shrunk to the specified length. The background image is scaled to cover the entire container. The background image is scaled to fit inside the container"
                    />

                    <Card
                        img='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                        title="Livros disponível em Ebook"
                        link='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                        text="Specified length. The background image is scaled to cover the entire container. The background image is scaled to fit inside the container"
                    />

                    <Card
                        img='https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/us-promos/cyber-lock.jpg'
                        title="Livros disponível em Ebook"
                        text="The background image is displayed at its original size. This is the default value. The background image is stretched ..."
                        link='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image.jpg'
                    />

                </CardListComponent>



                <div className="
                    relative 
                    max-sm:static
                ">
                    <SectionCall
                        direction="right"
                        title={

                            <div className="text-end">
                                <h2 className=' text-zinc-200 text-3xl font-extrabold'>
                                    Problemas na Renovação de Livros!
                                </h2>
                                <h3 className="text-green-800 font-semibold">
                                    Aviso
                                </h3>
                            </div>
                        }
                        content={
                            <div className="flex flex-col text-end justify-items-end">
                                <div>
                                    <p className="pb-4 text-slate-200">
                                        <B>Prezados usuários!</B>
                                        <br/>
                                        <br/>

                                        Devido aos problemas do Sistema para realizar a renovação online, informamos que a renovação deve
                                        ser feita, pelo menos, um dia antes da data de vencimento do empréstimo. Assim, em caso de falha de conexão,
                                        sistema não disponível ou outro problema que não possibilite a utilização deste recurso, o usuário deverá
                                        comparecer à ...
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <button className="p-2 align-middle justify-center rounded  bg-slate-100 font-semibold text-zinc-700">
                                        Ver mais
                                    </button>
                                </div>
                            </div>

                        }
                    />
                </div>

            </div>

            <div className="w-full h-6 bg-slate-200"> </div>

            <div className="max-sm:static relative ">
                <Footer/>
            </div>

        </div>
    )
}

export { HomePage };
