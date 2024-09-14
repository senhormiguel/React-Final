import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import ProductGrid from "./components/ProductGrid";

export default function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/About" element={<AboutUs />}>
				<Route path="/Products" element={<ProductGrid />}>
			</Route>
			//
	const root = ReactDOM.createRoot(document.getElementById('root'));
	rooter.render(<App />);
}
