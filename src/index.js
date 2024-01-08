import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HomePage } from './pages/home';

import './index.css';
import { GuiasPage } from './pages/guias';
import { ServicosPage } from './pages/servicos';
import { ContatoPage } from './pages/contato';
import { CursosPage } from './pages/cursos';
import { ReservasPage } from './pages/reserva';
import { EbooksPage } from './pages/ebooks';
import { ErrorPage } from './pages/error';
import { ReservaPergamumPage } from './pages/reservaPergamum';
import { EquipePage } from './pages/Equipe';

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <HomePage/>,
    errorElement: <HomePage />,
  },
  {
    path: "/biblioteca-ifc-videira",
    element: <HomePage/>,
    errorElement: <HomePage />,
  },
  {
    path: "/fontes-de-pesquisa",
    element: <HomePage/>,
    errorElement: <HomePage />,
  },
  {
    path: "/servicos",
    element: <ServicosPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/livros/ebooks",
    element: <EbooksPage/>,
    errorElement: <ErrorPage  />,
  },
  {
    path: "/livros/reserva-pergamum",
    element: <ReservaPergamumPage/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/contato",
    element: <ContatoPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/equipe",
    element: <EquipePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guias",
    element: <GuiasPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guias/reserva",
    element: <ReservasPage/>,
    errorElement: <ErrorPage />,
  },
    // - post (guia): guia do usuário
    // - post (guia): fontes de pesquisa
    // - post (guia): lingua portuguesa
    // - post (guia): Trabalho de conclusão de curso

  {
    path: "/cursos",
    element: <CursosPage/>,
    errorElement: <ErrorPage />,
  },
    // - post (cursos): cursos online gratuitos
    // - post (cursos): cursos online gratuitos
  {
    path: "/ebooks",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/noticias",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
    // - post (ebooks): coleção histório geral da africa
    // - post (ebooks): eu e outras poesias
    // - post (ebooks): libertinagem
    // - post (ebooks): Macunaima
    // - post (ebooks): Memórias postumas de brás cubas
    // - post (ebooks): Pauliceia desvairada
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
