import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Head } from '../../components/head';
import { colors } from '../../theme/colors';
import { contatoColaborar, contatoSubjects } from '../../utils/contato';
import { VamosColaborarContainer } from './styles';

export const Contato = () => {
	const [contactFormInfo, setContactFormInfo] = useState({ subjects: [] });

	const [collabOption, setCollabOption] = useState('Acesso à água potável');
	const [collabInfo, setCollabInfo] = useState({});

	const [keepContactInfo, setKeepContactInfo] = useState({});

	//Vamos Conversar? Form Functions
	const handleInput = (info, inputName) => {
		setContactFormInfo(curr => ({ ...curr, [inputName]: info }));
	};

	const handleCheckedSubjects = subject => {
		let newSubjects;
		if (!contactFormInfo.subjects.includes(subject)) {
			newSubjects = [...contactFormInfo.subjects, subject];
		} else {
			newSubjects = contactFormInfo.subjects.filter(
				info => info !== subject
			);
		}
		setContactFormInfo(curr => ({ ...curr, subjects: newSubjects }));
	};

	const sendContactEmail = () => {
		console.log('send info: ', contactFormInfo);
	};

	//Vamos colaborar? Form Functions
	const handleCollabOption = collab => {
		setCollabOption(collab);
	};

	const handleCollabInput = (info, inputName) => {
		setCollabInfo(curr => ({ ...curr, [inputName]: info }));
	};

	const sendCollabEmail = () => {
		console.log('send collab info: ', { ...collabInfo, collabOption });
	};

	//Vamos manter contato? Form Functions
	const handleKeepContactInput = (info, inputName) => {
		setKeepContactInfo(curr => ({ ...curr, [inputName]: info }));
	};

	const sendKeepContactEmail = () => {
		if (keepContactInfo.termosDeUso) {
			console.log('send keep contact email:', keepContactInfo);
		} else {
			alert(
				'Você precisa aceitar os termos de uso antes de submeter seus dados.'
			);
		}
	};

	return (
		<Box>
			<Head
				breadcrumbs={[]}
				title='Contato'
				backgroundImage='/acquamater/default-head-bg.png'
			/>
			<Box mt='100px' textAlign='center' mb='50px'>
				<Typography variant='h1' color={colors.blueLighter}>
					VAMOS CONVERSAR?
				</Typography>
				<Typography variant='body1' my='20px' px='10%'>
					Estamos sempre prontos a gerar ideias e encontrar soluções
					para suas necessidades ligadas ao Mundo ÁGUA-OCEANO, no
					Brasil e fora dele. <br /> <br />
					Por meio de nossa ampla rede de Parceiros, desenvolvemos
					projetos personalizados de acordo com as demandas de cada
					cliente. <br /> <br />
					Envie-nos uma mensagem e conte-nos um pouco de suas
					necessidades. Depois, podemos marcar uma conversa por
					telefone ou videoconferência.
				</Typography>

				<Grid
					container
					spacing={2}
					textAlign='start'
					paddingX='10%'
					mt='3%'
				>
					<Grid item md={6}>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Nome*
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='nome'
								onChange={({ target }) =>
									handleInput(target.value, 'nome')
								}
							/>
						</Box>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								E-mail*
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='email'
								onChange={({ target }) =>
									handleInput(target.value, 'email')
								}
							/>
						</Box>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Empresa
							</Typography>
							<TextField
								fullWidth
								variant='filled'
								id='empresa'
								onChange={({ target }) =>
									handleInput(target.value, 'empresa')
								}
							/>
						</Box>
					</Grid>
					<Grid item md={6}>
						<Typography variant='body1' color={colors.blueLighter}>
							Selecione um ou mais assuntos*
						</Typography>
						<FormControl>
							<Grid container>
								{contatoSubjects.map(cs => (
									<Grid item md={5}>
										<FormControlLabel
											control={
												<Checkbox
													onChange={() =>
														handleCheckedSubjects(
															cs
														)
													}
												/>
											}
											label={cs}
										/>
									</Grid>
								))}
							</Grid>
						</FormControl>

						<Box my='20px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Mensagem*
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='email'
								onChange={({ target }) =>
									handleInput(target.value, 'mensagem')
								}
								multiline
								minRows={4}
							/>
						</Box>
					</Grid>
				</Grid>
				<Button onClick={sendContactEmail}>Enviar</Button>
			</Box>

			<VamosColaborarContainer>
				<Typography variant='h1' color={colors.blueLighter}>
					VAMOS COLABORAR?
				</Typography>
				<Typography variant='body1' my='20px' px='10%'>
					Você quer integrar a rede de Parceiros da Acqua Mater? Seu
					projeto está ligado a qual dos tópicos abaixo?
				</Typography>

				<FormControl>
					<RadioGroup
						value={collabOption}
						onChange={({ target }) =>
							handleCollabOption(target.value)
						}
					>
						<Grid container textAlign='start' px='10%' my='30px'>
							{contatoColaborar.map(cs => (
								<Grid item md={6}>
									<FormControlLabel
										value={cs}
										control={<Radio />}
										label={cs}
									/>
								</Grid>
							))}
						</Grid>
					</RadioGroup>
				</FormControl>

				<Box my='25px' mx='10%' textAlign='start'>
					<Typography variant='body1' color={colors.blueLighter}>
						Conte-nos um pouco mais sobre seu projeto (nome e
						solução que ele oferece).
					</Typography>
					<TextField
						fullWidth
						variant='filled'
						id='empresa'
						onChange={({ target }) =>
							handleCollabInput(target.value, 'maisSobre')
						}
						multiline
						minRows={4}
					/>

					<Grid container spacing={4}>
						<Grid item md={6}>
							<Box my='25px'>
								<Typography
									variant='body1'
									color={colors.blueLighter}
								>
									Seu site (se tiver)
								</Typography>
								<TextField
									required
									fullWidth
									variant='filled'
									id='site'
									onChange={({ target }) =>
										handleCollabInput(target.value, 'site')
									}
								/>
							</Box>
							<Box my='25px'>
								<Typography
									variant='body1'
									color={colors.blueLighter}
								>
									Linkedin
								</Typography>
								<TextField
									required
									fullWidth
									variant='filled'
									id='linkedin'
									onChange={({ target }) =>
										handleCollabInput(
											target.value,
											'linkedin'
										)
									}
								/>
							</Box>
						</Grid>
						<Grid item md={6}>
							<Box my='25px'>
								<Typography
									variant='body1'
									color={colors.blueLighter}
								>
									YouTube
								</Typography>
								<TextField
									required
									fullWidth
									variant='filled'
									id='youtube'
									onChange={({ target }) =>
										handleCollabInput(
											target.value,
											'youtube'
										)
									}
								/>
							</Box>
							<Box my='25px'>
								<Typography
									variant='body1'
									color={colors.blueLighter}
								>
									Instagram
								</Typography>
								<TextField
									required
									fullWidth
									variant='filled'
									id='instagram'
									onChange={({ target }) =>
										handleCollabInput(
											target.value,
											'instagrams'
										)
									}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Button onClick={sendCollabEmail}>Enviar</Button>
			</VamosColaborarContainer>

			<Box my='50px' px='10%' textAlign='center'>
				<Typography variant='h1' color={colors.blueLighter}>
					VAMOS MANTER CONTATO?
				</Typography>
				<Typography variant='body1' my='20px' px='10%'>
					Não enviaremos Newsletters. Se quiser receber comunicados
					eventuais sobre oportunidades de pesquisa, negócios e
					atuação nas áreas de ÁGUA-OCEANO, inscreva-se aqui:
				</Typography>

				<Grid
					container
					spacing={2}
					textAlign='start'
					paddingX='10%'
					mt='3%'
				>
					<Grid item md={6}>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Nome*
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='nome'
								onChange={({ target }) =>
									handleKeepContactInput(target.value, 'nome')
								}
							/>
						</Box>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								E-mail*
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='email'
								onChange={({ target }) =>
									handleKeepContactInput(
										target.value,
										'email'
									)
								}
							/>
						</Box>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Linkedin
							</Typography>
							<TextField
								fullWidth
								variant='filled'
								id='linkedin'
								onChange={({ target }) =>
									handleKeepContactInput(
										target.value,
										'linkedin'
									)
								}
							/>
						</Box>
					</Grid>
					<Grid item md={6}>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Instagram
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='instagram'
								onChange={({ target }) =>
									handleKeepContactInput(
										target.value,
										'instagram'
									)
								}
							/>
						</Box>
						<Box my='25px'>
							<Typography
								variant='body1'
								color={colors.blueLighter}
							>
								Twitter
							</Typography>
							<TextField
								required
								fullWidth
								variant='filled'
								id='twitter'
								onChange={({ target }) =>
									handleKeepContactInput(
										target.value,
										'twitter'
									)
								}
							/>
						</Box>
					</Grid>
				</Grid>

				<FormControlLabel
					sx={{ marginY: '20px', paddingX: '10%' }}
					control={
						<Checkbox
							onChange={({ target }) =>
								handleKeepContactInput(
									target.checked,
									'termosDeUso'
								)
							}
						/>
					}
					label='Eu concordo em receber comunicações. Ao informar meus dados, eu concordo com a Política de Privacidade.'
				/>

				<Button onClick={sendKeepContactEmail}>Enviar</Button>
			</Box>
		</Box>
	);
};
