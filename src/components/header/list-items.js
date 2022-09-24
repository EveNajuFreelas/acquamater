import { Divider, ListItem } from "@mui/material"

export const CustomListItem = ({ nav, handleNav }) => {
    return (
        <>
            <ListItem onClick={() => handleNav(nav.url)}>
                {nav.name}
            </ListItem>
            <Divider />
        </>
    )
}