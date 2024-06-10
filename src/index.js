import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/user";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(40, 40, 40)'
		},
		secondary: {
			main: 'rgb(188, 188, 188)'
		},
		third: {
			main: 'rgb(102, 221, 185)'
		}
	}
});
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider >
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
