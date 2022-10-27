import { Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { Wrapper } from '../styles';

export const InspirarHeader = ({
	sectionName,
	subtitle,
	img,
	hasTopDivider,
}) => (
	<Wrapper>
		{hasTopDivider && (
			<Box my='40px'>
				<hr
					style={{
						color: colors.blueLighter,
						width: '100%',
						height: '1px',
						border: 'none',
						borderWidth: 0,
						background: colors.blueLighter,
					}}
				/>
			</Box>
		)}
		<div
			style={{
				display: 'flex',
				width: '100%',
				alignItems: 'flex-end',
				marginBottom: '20px',
			}}
		>
			<Grid item xs={1}>
				<img src={img} alt={sectionName} width='100px' />
			</Grid>

			<Grid item xs={10} ml='20px' width='100%'>
				<Box display='flex' alignItems='flex-end' gap='20px' mb='15px'>
					<Typography
						variant='h3'
						color={colors.blueLighter}
						style={{ margin: '0 0 0 20px' }}
					>
						{sectionName}
					</Typography>
					<Typography
						variant='body1'
						style={{ margin: 0 }}
						color='GrayText'
					>
						{subtitle}
					</Typography>
				</Box>
				<Divider
					variant='middle'
					w='100%'
					color='#7FC31B'
					style={{ marginRight: 0 }}
				/>
				<Stack direction='row' spacing={2} mx='15px' my='10px' wrap>
					<Chip
						label={
							<Typography
								color='primary'
								variant='body1'
								sx={{ fontWeight: 'bold', fontSize: '11px' }}
							>
								Ciência, Pesquisa e Tecnologia
							</Typography>
						}
						avatar={
							<img
								src='/acquamater/para-inspirar/science-icon.png'
								alt='Science'
							/>
						}
					/>
					<Chip
						label={
							<Typography
								color='primary'
								variant='body1'
								sx={{ fontWeight: 'bold', fontSize: '11px' }}
							>
								Relação, Conexão e Emoção
							</Typography>
						}
						avatar={
							<img
								src='/acquamater/para-inspirar/heart-icon.png'
								alt='Heart'
							/>
						}
					/>
				</Stack>
			</Grid>
		</div>
		<hr
			style={{
				color: colors.blueLighter,
				width: '100%',
				height: '1px',
				border: 'none',
				borderWidth: 0,
				background: colors.blueLighter,
			}}
		/>
	</Wrapper>
);
