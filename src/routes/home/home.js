import { Box, Grid } from "@mui/material";
import images from '../../images/';
const Home = () => {
    const [farmer2,, hiker, trator] = images;
	return (
		<Grid position="relative" container spacing={2}>
            <Grid item xs={12} md={4}>
                <Box sx={{ border: '2px solid', borderColor:'primary', borderRadius:'5px', m:'5%' }}>
                    <img
                        style={{height:'100%', width:'100%'}}
                        srcSet={hiker}
                        src={hiker}
                        alt='SEM IMAGEM'
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{ border: '2px solid', borderColor:'primary', borderRadius:'5px', m:'5%' }}>
                    <img
                        style={{height:'100%', width:'100%'}}
                        srcSet={farmer2}
                        src={farmer2}
                        alt='SEM IMAGEM'
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{ border: '2px solid', borderColor:'primary', borderRadius:'5px', m:'5%' }}>
                    <img
                        style={{height:'100%', width:'100%'}}
                        srcSet={trator}
                        src={trator}
                        alt='SEM IMAGEM'
                        loading="lazy"
                    />
                </Box>
            </Grid>
        </Grid>
	);
}

export default Home;