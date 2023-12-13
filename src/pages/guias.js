import React from 'react';
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"
import { Card2, Card2Container  } from '../components/card/card-2/card-2';
import { Button1 } from '../components/buttons/button-1/button-1';

const GuiasPage = () => {
    return (
        <div className="
            bg-white
            bg-gradient-to-t from-zinc-100 via-zinc-100 to-zinc-50
        ">

            <Header/>

            <div className="flex flex-col flex-nowrap">
                <div className="
                    p-2 bg-lime-500
                    shadow-lime-700 shadow-inner
                ">

                    <h1 className="
                        p-8 font-plus font-semibold text-6xl
                        text-green-800
                        ">
                            <span className="
                                text-8xl pt-2 p-1 pl-1 
                                bg-green-800 text-white

                                ">
                                P
                            </span>
                            ágina: Guias
                    </h1>
                </div>

                <h3 className="pl-10 pr-10 p-4 font-misans text-zinc-500  text-3xl">
                    Página contendo guias de procedimentos e trabalhos para dicentes do instituto
                </h3>

                <Card2Container>
                    <Card2
                        className='flex-[1_0_21%]'
                        title="Inscrição na Biblioteca"
                        contentEl={
                            <>
                                <p>
                                    Para a inscrição na Biblioteca do IFC Videira é necessário a apresentação de alguns documentos. Confira a seguir:
                                </p> 

                                <br/>

                                <p>
                                    <span className="font-semibold">Alunos: </span>documento com foto e comprovante de matrícula no caso de aluno ou carterinha de estudante do IFC Videira;
                                </p>

                                <br/>

                                <p>
                                    <span className="font-semibold">Servidores: </span> documento com foto e número do SIAPE.
                                </p>

                                <br/>

                                <p className="font-semibold">
                                    No ato do cadastramento o usuário escolherá uma senha pessoal, de 4 ou 6 dígitos, cujo sigilo é de sua responsabilidade.
                                </p>
                            </>
                        }
                    />

                    <Card2
                        titleEmphasis={true}
                        className='flex-[1_0_100%]'
                        title="Empréstimo"
                        contentEl={
                            <>
                                <p>
                                 O quadro abaixo apresenta os tipos de materiais a serem emprestados, conforme a categoria, os prazos e as quantidades:
                                </p>
                                <br/>
                                <table className="
                                
                               ">
                                    <tbody >
                                        <tr className="
                                            m-8 rounded 
                                            border-[1px] border-green-900 border-opacity-30 
                                        ">
                                            <td className="p-4 hover:p-8 transition-all ease-in-out">
                                                Enquanto houver débito maior que R$ 10,00 (dez reais), ou quando houver material em atraso, até liquidação do débito e a devolução da obra o usuário não poderá realizar novos empréstimos;
                                            </td>

                                        </tr>

                                        <tr className="
                                            m-8 rounded 
                                            border-[1px] border-green-900 border-opacity-30 
                                        ">
                                            <td className="p-4 hover:p-8 transition-all ease-in-out">
                                                São considerados materiais de consulta local as obras de referência (enciclopédias, dicionários, guias, etc.) e a Coleção Especial (monografias, dissertações, teses, mapas, relatórios de estágio, obras raras, etc). Estes materiais não estão disponíveis para empréstimo;
                                            </td>
                                        </tr>

                                        <tr className="
                                            m-8 rounded 
                                            border-[1px] border-green-900 border-opacity-30 

                                        ">
                                            <td className="p-4 hover:p-8 transition-all ease-in-out">
                                                Os exemplares com tarja amarela, que são títulos para permanecer na Biblioteca para consulta local, não poderão ser emprestados, exceto na sexta-feira a partir das 15h, devendo ser devolvidos pelos alunos da manhã até as 10h e pelos alunos da noite até as 20h;
                                            </td>
                                        </tr>


                                        <tr className="
                                            m-8 rounded 
                                            border-[1px] border-green-900 border-opacity-30 
                                            ">
                                            <td className="p-4 hover:p-8 transition-all ease-in-out">

                                                Os empréstimos serão encerrados 15 minutos antes do fechamento da Biblioteca, para que possam ser realizadas as atividades necessárias para o seu fechamento.

                                            </td>
                                        </tr>

                                    </tbody>


                                </table>
                            </>
                        }
                        actionEl={
                            <>
                                <Button1 
                                    text="Acessar Inscrição"
                                    alt="Botão para Acessar inscrição"
                                    link="/"
                                />
                            </>
                        }
                    />

                    <Card2
                        // className='flex-[1_0_21%]'
                        title="Renovação"
                        text="Web fonts live on a web server, so you can host your own web fonts on your hosting provider and use them. Alternatively, you can use web fonts from an external provider like Google web fonts."
                        contentEl={
                            <>
                                <p>
                                    O empréstimo poderá ser renovado, desde que o material não esteja em atraso, não haja pedido de reserva e o usuário não esteja com mais de R$ 10,00 em débito com a Biblioteca;
                                </p>
                                <br/>
                                <p>
                                    A renovação do empréstimo deve ser feita pela Internet ou nos computadores da Biblioteca;
                                </p>
                                <br/>
                                <p>
                                    A Biblioteca não se responsabiliza pelas renovações não realizadas durante as falhas no sistema, ou seja, as renovações são de inteira responsabilidade do usuário;
                                </p>
                                <br/>
                                <p>
                                    Sugere-se que a renovação seja feita com, pelo menos, <span className="bg-green-800">um dia de antecedência</span> da data de vencimento do empréstimo. Deste modo, em caso de falha de conexão, sistema não disponível, ou outro problema que impossibilite a renovação, o usuário tenha tempo hábil para comparecer à Biblioteca com o material para renová-lo.
                                </p>
                            </>
                        } 
                        actionEl={
                            <>
                                <Button1 
                                    text="Tutorial de Renovação"
                                    alt="Botão para Acessar inscrição"
                                    link="https://drive.google.com/file/d/1lA0bi3eSTe8DsNkdbtM5y6jPiDTprj4Y/view?usp=sharing"
                                />
                            </>
                        }

                    />

                    <Card2
                        title="Reserva"
                        contentEl={
                            <>
                                <p>
                                    O usuário poderá solicitar reserva de material para empréstimo, desde que não esteja disponível na Biblioteca para empréstimo, não esteja emprestado ao solicitante e o usuário solicitante não esteja com mais de R$ 10,00 em débito com a Biblioteca;
                                </p>
                                <br/>

                                <p>
                                    Os materiais reservados ficarão à disposição do usuário por até 24 horas, caso não seja retirado nesse prazo, passará ao usuário seguinte ou retornará à estante. A reserva é nominal e obedecerá a ordem cronológica de pedidos. O usuário é responsável pelo controle do prazo disponível de suas reservas;
                                </p>
                                <br/>

                                <p>
                                    A reserva de material deve ser feita pela Internet ou nos computadores da Biblioteca.
                                </p>
                                <br/>
                            </>
                        }
                        actionEl={
                            <>
                                <Button1 
                                    text="Tutorial de Reserva"
                                    alt="Botão para Acessar inscrição"
                                    link="https://drive.google.com/file/d/1lA0bi3eSTe8DsNkdbtM5y6jPiDTprj4Y/view?usp=sharing"
                                />
                            </>
                        }
                    />

                    <Card2
                        title="Penalidades"
                        contentEl={
                            <>
                                <p>
                                    Para empréstimos domiciliares, a multa por atraso na devolução é cobrada por dias úteis e por obras literárias, não literárias, periódicos e/ou chaves;
                                </p>
                                <br/>

                                <p>
                                    O valor da multa a ser aplicada é de R$1,00 (um real) por dia para cada obra e/ou chave em atraso;
                                </p>
                                <br/>

                                <p>
                                    As taxas de multas serão pagas pelo usuário através de GRU gerada preferencialmente na biblioteca ou por meio do site, com valor a ser consultado na biblioteca. Para a devida quitação do valor do débito, é imprescindível a apresentação do comprovante de pagamento na biblioteca.
                                </p>
                                <br/>
                            </>
                        }
                    />

                    <Card2
                        className='flex-[1_0_40%]'
                        title="Guarda-Volume"
                        contentEl={
                            <>
                                <p>
                                    É obrigatório o uso do guarda – volume, no qual o usuário deverá depositar pastas, bolsas, mochilas ou similares, enquanto estiver na Biblioteca;
                                </p>
                                <br/>

                                <p>
                                    O uso do guarda-volume é permitido somente durante a permanência do usuário na Biblioteca;
                                </p>
                                <br/>

                                <p>
                                    A biblioteca não se responsabiliza pelo material deixado no guarda-volume.
                                </p>
                                <br/>
                            </>
                        }
                    />
                </Card2Container>
            </div>
            <Footer/>
        </div>
    )
}

export { GuiasPage };