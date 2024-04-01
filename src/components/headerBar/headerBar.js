import { AppBar, Toolbar, IconButton, Typography, Link, Box } from "@mui/material";
import { Cabin } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from "react";
import SideBar from "../sideBar/sideBar";

const HeaderBar = ({children}) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return <div>
		<div>
		<AppBar position="relative" sx={{zIndex: 1400}} >
			<Toolbar variant="dense">
				<IconButton onClick={() => setSidebarOpen(!sidebarOpen)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
					<Cabin color="secundary"/>
				</IconButton>
				<Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" component="div">
					MATO PILL
				</Typography>
				<Box>
					<Link color="inherit" href="#" underline="hover">
						<Typography variant="h7" color="inherit" component="div">
							Log-in
						</Typography>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
		</div>
		<SideBar open={sidebarOpen} callback={setSidebarOpen}></SideBar>
	</div>
};

export default HeaderBar;