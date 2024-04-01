import { Box, Button, SwipeableDrawer } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";

function SideBar({ open, callback }) {

    return ( // estabelecer qual seria o HTML aqui, em JSX.
        <div className="SideBar">
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => callback(false)}
                onOpen={() => callback(true)}
            >
                <Box sx={{
                    position: "relative",
                    display: "block",
                    width: "200px",
                    margin: "auto",
                    marginTop: "30px",
                    zIndex: 2, //deveria funcionar fazendo o overlap
                 }}>
                    <p> test </p>
                </Box>
        </SwipeableDrawer>
        </div > //Para puxar as variaveis estabelecidas se utiliza {variavel}
    )
}

export default SideBar;