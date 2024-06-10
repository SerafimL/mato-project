import { Grid } from "@mui/material";
import { hiker, farmer, trator } from "../../images/cardImages";
import Card from "../../components/card/card";
const Home = () => {
    const images = [hiker, farmer, trator];

	return (
		<Grid position="relative" container spacing={2}>
            {images.map(image => 
                (<Grid item xs={12} md={4}>
                    <Card image={image} style={{cursor:'pointer'}} onClick={() => {console.log('DEU')}} />
                </Grid>))
            }
        </Grid>
	);
}

export default Home;