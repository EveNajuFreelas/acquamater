import { Box, Divider, Grid, Typography } from '@mui/material';
import { colors } from '../../theme/colors';
import { InspirarItemContainer } from './styles';

export const InspirarItem = ({ img, date, author, name, link }) => (
	<InspirarItemContainer
		container
		onClick={() => window.open(link, '_blank')}
	>
		<Grid item xs={1}>
			<img src={img} alt={name} width='75%' />
		</Grid>
		<Grid item xs={11}>
			<Box display='flex' mb='5px' gap='20px'>
				{date && (
					<Typography
						variant='body2'
						style={{ margin: '0' }}
						color={colors.gray}
					>
						{date}
					</Typography>
				)}

				<Typography
					variant='body2'
					style={{ margin: '0', textTransform: 'uppercase' }}
					color={colors.gray}
				>
					{author}
				</Typography>
			</Box>
			<hr
				style={{
					color: '#dfe4eb',
					width: '100%',
					height: '1px',
					border: 'none',
					borderWidth: 0,
					background: '#dfe4eb',
					margin: '10px 0',
				}}
			/>
			<Typography variant='body1bold' gutterBottom>
				{name}
			</Typography>
		</Grid>
	</InspirarItemContainer>
);
