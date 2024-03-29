import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path="*" element={<Profile />} />
						<Route exact path="/dialogs" element={<Dialogs />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};
export default App;
