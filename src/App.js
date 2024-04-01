import './App.css';
import HeaderBar from './components/headerBar/headerBar';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import LoginPage from './routes/loginPage/loginPage';


const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HeaderBar/>}>
				<Route index element={<Home/>}/>
				<Route path='login-in' element={<LoginPage/>}/>
			</Route>
		</Routes>
	);
};

export default App;