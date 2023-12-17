import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { PageSection2 } from '../components/page-section/page-secion-2/page-section-2'

const ServicosPage = () => {
    return (
        <div className="
            bg-gradient-to-t from-zinc-100 via-zinc-100 to-zinc-50

        ">

            <Header/>

            <div className="h-[20px]"></div>

                
                <PageSection2 
                    direction='right' 
                    leftContent={
                        <div
                            className="
                              w-[300px]
                              h-[200px]
                              inline-block
                            " 
                        >
                            <h2 className="
                            pl-8 pt-2
                            inline-block
                            text-green-600 font-black 
                            border-l-zinc-100

                            text-end

                            text-6xl/10
                            text-opacity-80
                            
                            ">
                                Serviços Empré
                                <span className="bg-green-700 bg-opacity-80 text-zinc-100">
                                stimo Renov
                                </span>
                                ação Reser

                                <span className="bg-green-700 bg-opacity-80 text-zinc-100">
                                va Acess
                                </span>
                                o à internet
                            </h2> 
                            
                        </div>
                    }
                    rightContent={
                        <div className="
                            p-8
                        ">

                            <h1 className="transform -skew-x-12 text-3xl font-extrabold text-zinc-100">
                                Serviços
                            </h1>
                            <p className="pt-2 text-zinc-100 font-semibold">
                                A consulta local e on line ao acervo da Biblioteca é livre e gratuita, permitida a toda comunidade acadêmica e comunidade externa.
                            </p>

                        </div>
                }>
                </PageSection2>

                <div className="
                    p-4
                    mx-4
                    mt-8 mb-8
                    flex
                    shadow-md
                    bg-zinc-200
                ">
                    <div>

                        <div className="p-4 bg-zinc-100 shadow-md">
                            <h2 className="font-extrabold text-3xl text-green-700">
                               Empréstimo domiciliar 
                            </h2>
                            <p className="text-green-700 p-4 pl-0">

                                O empréstimo domiciliar é permitido aos alunos e servidores do IFC, devidamente cadastrados na Biblioteca. Para a comunidade externa, é permitida somente a consulta local, não havendo empréstimo domiciliar. Procure a biblioteca para obter maiores informações sobre prazo de devolução das obras e limite de material para empréstimo.

                            </p>
                        </div>


                    </div>

                </div>


                <div className="p-4 mx-4 mt-8 mb-8 flex shadow-md bg-zinc-200 ">
                    <div>

                        <div className="text-end p-4 bg-zinc-100 shadow-md">
                            <h2 className="font-extrabold text-3xl text-zinc-400">
                               Renovação de empréstimo 
                            </h2>
                            <p className="text-zinc-500 p-4 pl-0">

                                A data de devolução do empréstimo das obras poderá ser renovada, caso não haja solicitação de reserva. A renovação deverá ser feita no balcão de atendimento naquelas bibliotecas que ainda não utilizam o sistema automatizado e neste caso é indispensável a apresentação do material emprestado. Já nas Bibliotecas que utilizam o sistema automatizado, o usuário poderá realizar a renovação on line.

                            </p>
                        </div>

                    </div>

                </div>


                <div className="
                    p-4
                    mx-4
                    mt-8 mb-8
                    flex
                    shadow-md
                    bg-zinc-200
                ">
                    <div>

                        <div className="p-4 bg-zinc-100 shadow-md">
                            <h2 className="font-extrabold text-3xl text-green-700">
                               Reserva de materiais 
                            </h2>
                            <p className="text-green-700 p-4 pl-0">

                                Obras não encontradas no acervo poderão ser reservadas e os usuários serão atendidos por ordem cronológica das solicitações. Para reservas das obras é necessário preencher uma ficha de solicitação de reserva nos Campi que ainda não utilizam o sistema automatizado. Nos Campi que contam com esse recurso a reserva é feita on line pelo próprio usuário. Os usuários serão avisados por e-mail sobre a disponibilidade da obra reservada. As obras ficarão à disposição do usuário por 24 horas a partir da chegada à Biblioteca; esgotado o prazo, a reserva será cancelada automaticamente. Ao usuário não será permitida a reserva de materiais que já se encontrem em seu poder.

                            </p>
                        </div>


                    </div>

                </div>


                <div className="
                    grid sm:grid-cols-[1fr]  md:grid-cols-[1fr_1fr] gap-2
                ">

                    <div className=" p-4 mx-4 mt-8 mb-8 flex shadow-md bg-zinc-200 ">
                        <div>

                            <div className="p-4 bg-zinc-100 shadow-md">
                                <h2 className="font-extrabold text-3xl text-zinc-400">
                                Acesso à internet para pesquisa acadêmica

                                </h2>
                                <p className="text-zinc-500 p-4 pl-0">
                                    As Bibliotecas do SBI/IFC disponibilizam computadores para pesquisas acadêmicas. Verificar em seu Campus as normas de utilização deste recurso.

                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className=" p-4 mx-4 mt-8 mb-8 flex shadow-md bg-zinc-200">
                        <div>

                            <div className="p-4 bg-zinc-100 shadow-md h-full">
                                <h2 className="font-extrabold text-3xl text-green-700">
                                Serviço de referência 
                                </h2>
                                <p className="text-green-700 p-4 pl-0">
                                    É o apoio aos usuários para o uso e exploração na utilização dos recursos informacionais disponíveis na Biblioteca, e às fontes de pesquisa existentes, tais como, catálogos, bases de dados, Internet, entre outros.
                                </p>
                            </div>

                        </div>

                    </div>




                </div>


                <div className="h-[20px]"></div>

            {/* </PageSection2Container>  */}

            <Footer/>
        </div>
    )
}


export { ServicosPage }

