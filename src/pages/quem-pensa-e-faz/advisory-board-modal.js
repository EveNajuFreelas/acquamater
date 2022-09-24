import { Box, Grid, Modal, Typography, Divider, Button } from "@mui/material";
import { ModalContainer, CloseButton } from "./styles";

export const AdvisoryBoardModal = ({modalContent, isOpen, onCloseFunction}) => {

    console.log(modalContent);
    const { image, name, country, description, longDescription } = modalContent;
    return (
        <Modal open={isOpen} onClose={onCloseFunction}>
            <ModalContainer>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item md={5} >
                        <img src={`/acquamater${image}`} alt={name} width="100%" />
                    </Grid>
                    <Grid item md={6}>  
                        <Box display="flex" justifyContent="flex-end" width="100%" height="60px">
                            <CloseButton onClick={onCloseFunction}>x</CloseButton>
                        </Box>  
                        <Typography variant="body1bold">{name}</Typography>
                        <Typography variant="body1">{country}</Typography>
                        <Typography variant="body1">{description}</Typography>
                        <br />
                        <Typography variant="body2">{longDescription}</Typography>
                        
                        <Divider width="80%" sx={{ marginY: '20px' }} />
                        <Button>LinkedIn</Button>
                    </Grid>
                </Grid>
            </ModalContainer>
        </Modal>
    );
}