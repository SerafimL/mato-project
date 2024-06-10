import { Box, List, ListItem, Typography } from "@mui/material";

const Card = ({image, style, onClick}) => (
    <Box onClick={onClick} sx={{ border: 3, borderColor:'primary.main', borderRadius:'5px', m:'5%', ...style }}>
        <img
            style={{height:'100%', width:'100%', display: 'block'}}
            src={image.src}
            alt={image.alt}
            loading="lazy"
        />
        <Box sx={{backgroundColor:'secondary.main',}}>
            <Typography align="center" variant="h6" color="inherit" component="div">
                {image.title}
            </Typography>
            <List sx={{ listStyleType: 'disc' }}
                height={300}
                width='100%'
            >
                {image.topics?.map((line, i) => (
                    <ListItem sx={{ display: 'list-item', ml:'25px' }} key={i} component="div" disablePadding>
                        {line}
                    </ListItem>
                ))}
            </List>
        </Box>
    </Box>
);

export default Card;