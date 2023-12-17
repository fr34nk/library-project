import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer'
import  { BlockButtons } from '../components/buttons/block-buttons/index'
import { SectionCall }  from '../components/page-section/page-section-1/page-section.c';
import { CardListComponent, Card } from '../components/card/card-1/card.c';

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
                        src="/biblioteca_ifc_v1.jpg"
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

                    h-6 z-20 p-3
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
                                { icon: 'A', title: 'Livros', desc: 'Livros em destaque', link: '' },
                                { icon: 'B', title: 'Emprestimo', desc: 'Emprestimo de livros', link: '' },
                                { icon: 'C', title: 'Cursos', desc: 'Link de Cursos', link: '/cursos' },
                                { icon: 'D', title: 'Fontes ', desc: 'Fontes para Pesquisa', link: '/guias' },
                                { icon: 'E', title: 'Noticias', desc: 'Noticias da biblioteca', link: '' }
                            ]}
                        />
                    </div>

                </div>


                {/* <div className="w-full h-6 bg-slate-200"> </div> */}


                <div className="w-full static">
                    <SectionCall
                        direction="right"
                        section={{
                            img: '/biblioteca_ifc_v1.jpg',
                            title: 'Eventos',
                            subtitle: 'Palestras e participações ',
                            text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }}
                    />
                </div>


                <div className="w-full h-6 bg-slate-200"> </div>


                <div className="w-full relative max-sm:static">
                    <SectionCall
                        direction="left"
                        section={{
                            img: '/biblioteca_ifc_v1.jpg',
                            title: 'Noticias',
                            subtitle: 'Palestras e participações ',
                            text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }}
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
                        section={{
                            img: '/biblioteca_ifc_v1.jpg',
                            title: 'Opniões',
                            subtitle: 'Palestras e participações ',
                            text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }}
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
