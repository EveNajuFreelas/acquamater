import { Container, Tooltip, Typography } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../theme/colors";

export const InteractiveContainer = styled(Container)`
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InteractiveGraph = styled.img`
    margin-top: 20px;
    width: 300px;
`;

export const GraphTooltip = styled((props) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {!props.bottomText && (<Typography variant="body1bold" color={colors.blueLighter} sx={{ marginTop: props.mt }} >
            {props.divTitle}
        </Typography>)}
        <Tooltip {...props} title={<TooltipTitleBox>{props.title}</TooltipTitleBox>}>
            <div />
        </Tooltip>
        {props.bottomText && (<Typography variant="body1bold" color={colors.blueLighter} sx={{ marginTop: props.mt }} >
            {props.divTitle}
        </Typography>)}
    </div>))`
    background-color: ${colors.blueLighter};
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const GraphTooltipContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
`;

export const TooltipTitleBox = styled.div`
    background-color: white;
    border-radius: 0;
    width: 200px;
    box-shadow: 5px 5px ${colors.darkBlueLowOpacity};
    border: 1px gray solid;
    color: gray;
    padding: 10px;
    font-size: 14px;
`;