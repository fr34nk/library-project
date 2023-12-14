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
import { ContatosPage } from './pages/contatos-e-equipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <GuiasPage />,
  },
  {
    path: "/fontes-de-pesquisa",
    element: <HomePage/>,
  },
  {
    path: "/servicos",
    element: <ServicosPage/>,
  },
  {
    path: "/contatos",
    element: <ContatosPage/>,
  },
  {
    path: "/guias",
    element: <GuiasPage/>,
  },
    // - post (guia): guia do usuário
    // - post (guia): fontes de pesquisa
    // - post (guia): lingua portuguesa
    // - post (guia): Trabalho de conclusão de curso

  {
    path: "/cursos",
    element: <HomePage/>,
  },
    // - post (cursos): cursos online gratuitos
    // - post (cursos): cursos online gratuitos
  {
    path: "/ebooks",
    element: <HomePage/>,
  },
    // - post (ebooks): coleção histório geral da africa
    // - post (ebooks): eu e outras poesias
    // - post (ebooks): libertinagem
    // - post (ebooks): Macunaima
    // - post (ebooks): Memórias postumas de brás cubas
    // - post (ebooks): Pauliceia desvairada
  {
    path: "/bibliotecas-do-ifc",
    element: <HomePage/>,
  }
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
