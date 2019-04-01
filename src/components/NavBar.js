import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const linkUrl = 'https://github.com/Edugolr/kaustik-schedule';
const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit">
                        Frontend Kaustik - By
                        <Link href={linkUrl} rel="noopener" target="_blank" color={'secondary'}>
                            Edugolr
                         </Link>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;
