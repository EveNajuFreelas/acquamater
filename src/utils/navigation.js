import { NossaHistoria } from '../pages/nossa-historia';
import Home from '../pages/home';
import ProductsServices from '../pages/products-services';
import Talk from '../pages/products-services/Talk';
import { QuemPensaFaz } from "../pages/quem-pensa-e-faz";
import { PatriciaFurtado } from "../pages/patricia-furtado";
import { Clientes } from '../pages/clientes';
import { QuemSomos } from '../pages/quem-somos';
import { ComoAtuamos } from '../pages/como-atuamos';
import { PactoGlobalONU } from '../pages/pacto-global-onu';
import { UNESCO } from '../pages/unesco';
import { Contato } from '../pages/contato';

export const navigation = [
	{
		id: 0,
		name: 'Home',
		url: '/',
		element: <Home />,
		subelements: [],
	},
	{
		id: 1,
		name: 'Acqua Mater',
		url: '/acqua-mater',
		element: <Home />,
		subelements: [
			{
				id: 1 - 0,
				name: 'Quem somos',
				url: '/quem-somos',
				element: <QuemSomos />,
			},
			{
				id: 1 - 1,
				name: 'Nossa história',
				url: '/nossa-historia',
				element: <NossaHistoria />,
			},
			{
				id: 1 - 2,
				name: 'Quem pensa e faz',
				url: '/quem-pensa-e-faz',
				element: <QuemPensaFaz />,
			},
			{
				id: 1 - 3,
				name: 'Como atuamos',
				url: '/como-atuamos',
				element: <ComoAtuamos />,
			},
			{
				id: 1 - 4,
				name: 'Acqua Mater e o pacto global da ONU',
				url: '/acqua-mater-pacto-global-onu',
				element: <PactoGlobalONU />,
			},
			{
				id: 1 - 5,
				name: 'Acqua Mater e UNESCO',
				url: '/acqua-mater-unesco',
				element: <UNESCO />,
			},
		],
	},
	{
		id: 2,
		name: 'O que oferecemos',
		url: '/o-que-oferecemos',
		element: <ProductsServices />,
		subelements: [
			{
				id: 2 - 0,
				name: 'Palestras',
				url: '/talk',
				element: <Talk />,
			},
			{
				id: 2 - 1,
				name: 'Capacitação',
				url: '/capacitacao',
				element: '',
			},
			{
				id: 2 - 2,
				name: 'Consultoria',
				url: '/consultoria',
				element: '',
			},
			{
				id: 2 - 3,
				name: 'Experiência',
				url: '/experiencia',
				element: '',
			},
		],
	},
	{
		id: 3,
		name: 'Cases',
		url: '/cases',
		element: '',
		subelements: [{
			id: 3 - 0,
			name: 'No Brasil',
			url: '/cases#brasil',
			element: '',
		},{
			id: 3 - 1,
			name: 'No Mundo',
			url: '/cases#mundo',
			element: '',
		},],
	},
	{
		id: 4,
		name: 'Clientes',
		url: '/clientes',
		element: <Clientes />,
		subelements: [{
			id: 4 - 0,
			name: 'No Brasil',
			url: '/clientes#brasil',
			element: '',
		},{
			id: 4 - 1,
			name: 'No Mundo',
			url: '/clientes#mundo',
			element: '',
		},
	],
	},
	{
		id: 5,
		name: 'Para inspirar',
		url: '/para-inspirar',
		element: '',
		subelements: [
			{
				id: 5 - 0,
				name: 'Para ver',
				url: '/para-inspirar#para-ver',
				element: '',
			},
			{
				id: 5 - 1,
				name: 'Para ler',
				url: '/para-inspirar#para-ler',
				element: '',
			},
			{
				id: 5 - 2,
				name: 'Para ouvir',
				url: '/para-inspirar#para-ouvir',
				element: '',
			},
		],
	},
	{
		id: 6,
		name: 'Contato',
		url: '/contato',
		element: <Contato />,
		subelements: [
			{
				id: 6 - 0,
				name: 'Vamos conversar',
				url: '/contato#conversar',
				element: '',
			},
			{
				id: 6 - 1,
				name: 'Vamos colaborar',
				url: '/contato#colaborar',
				element: '',
			},
			{
				id: 6 - 2,
				name: 'Vamos manter contato',
				url: '/contato#manter-contato',
				element: '',
			},
		],
	},
];

export const extraRoutes = [
	{
		id: 7,
		name: 'Patrícia Furtado',
		url: '/patricia-furtado',
		element: <PatriciaFurtado />,
		subelements: [],
	}
];
