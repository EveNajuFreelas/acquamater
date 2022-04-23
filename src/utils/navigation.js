import AdvisoryBoard from "../pages/advisory-board";
import Home from "../pages/home";
import Partners from "../pages/partners";
import WhatWeOffer from "../pages/what-we-offer";

export const navigation = [
    {
        id: 0,
        name: 'Home',
        url: '/',
        element: <Home />,
    },
    {
        id: 1,
        name: 'Acqua Mater',
        url: '/',
        element: '',
    },
    {
        id: 2,
        name: 'O que oferecemos',
        url: '/o-que-oferecemos',
        element: <WhatWeOffer />,
    },
    {
        id: 3,
        name: 'Parceiros',
        url: '/parceiros',
        element: <Partners />,
    },
    {
        id: 4,
        name: 'Advisory Board',
        url: '/advisory-board',
        element: <AdvisoryBoard />,
    },
    {
        id: 5,
        name: 'Contato',
        url: '/',
        element: '',
    },
];