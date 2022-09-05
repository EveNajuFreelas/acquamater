import AdvisoryBoard from '../pages/advisory-board';
import AcquaMater from '../pages/acqua-mater';
import NossaHistoria from '../pages/acqua-mater/nossa-historia';
import Home from '../pages/home';
import Partners from '../pages/partners';
import ProductsServices from '../pages/products-services';
import Talk from '../pages/products-services/Talk';
import Traning from '../pages/products-services/Traning';

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
		element: <AcquaMater />,
		subelements: [
			{
				id: 1 - 0,
				name: 'Quem somos',
				url: '/quem-somos',
				element: '',
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
				element: '',
			},
			{
				id: 1 - 3,
				name: 'Como atuamos',
				url: '/como-atuamos',
				element: '',
			},
			{
				id: 1 - 4,
				name: 'Acqua Mater e o pacto global da ONU',
				url: '/acqua-mater-pacto-global-onu',
				element: '',
			},
			{
				id: 1 - 5,
				name: 'Acqua Mater e UNESCO',
				url: '/acqua-mater-unesco',
				element: '',
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
				element: <Traning />,
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
		element: <Partners />,
		subelements: [
			{
				id: 3 - 0,
				name: 'No Brasil',
				url: '/cases/no-brasil',
				element: '',
			},
			{
				id: 3 - 1,
				name: 'No Mundo',
				url: '/cases/no-mundo',
				element: '',
			},
		],
	},
	{
		id: 4,
		name: 'Clientes',
		url: '/clientes',
		element: <AdvisoryBoard />,
		subelements: [
			{
				id: 4 - 0,
				name: 'No Brasil',
				url: '/clientes/no-brasil',
				element: '',
			},
			{
				id: 4 - 1,
				name: 'No Mundo',
				url: '/clientes/no-mundo',
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
				url: '/para-inspirar/para-ver',
				element: '',
			},
			{
				id: 5 - 1,
				name: 'Para ler',
				url: '/para-inspirar/para-ler',
				element: '',
			},
			{
				id: 5 - 2,
				name: 'Para ouvir',
				url: '/para-inspirar/para-ouvir',
				element: '',
			},
		],
	},
	{
		id: 6,
		name: 'Contato',
		url: '/contato',
		element: '',
		subelements: [
			{
				id: 6 - 0,
				name: 'Vamos conversar',
				url: '/contato/conversar',
				element: '',
			},
			{
				id: 6 - 1,
				name: 'Vamos colaborar',
				url: '/contato/colaborar',
				element: '',
			},
			{
				id: 6 - 2,
				name: 'Vamos manter contato',
				url: '/contato/manter-contato',
				element: '',
			},
		],
	},
];
