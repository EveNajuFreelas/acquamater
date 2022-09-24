
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
    usePopupState,
    bindMenu,
    bindHover
  } from 'material-ui-popup-state/hooks';
import { MenuItem, Link } from '@mui/material';

export const CustomMenuItem = ({ nav, handleRedirect }) => {
    const popupState = usePopupState({
		variant: 'popover',
		popupId: 'demoMenu',
	});

    return (
        <>
            <Link
                variant='body1'
                underline='none'
                key={nav.id}
                sx={{
                    px: 1,
                    textTransform: 'none',
                    cursor: 'pointer',
                }}
                onClick={() => handleRedirect(nav.url)}
                {...bindHover(popupState)}
            >
                <p>{nav.name}</p>
            </Link>
            {nav.subelements.length > 0 ? (
                <HoverMenu 
                    {...bindMenu(popupState)} 
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    {nav.subelements.map(el => (
                        <MenuItem
                            key={el.id}
                            onClick={() => {
                                handleRedirect(el.url);
                                popupState.close();
                            }}
                        >
                            {el.name}
                        </MenuItem>
                    ))}
                </HoverMenu>) 
            : null}
        </>
    );
}