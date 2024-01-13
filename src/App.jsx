import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import "./styles/styles.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AppLayout />
			</BrowserRouter>
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3 * 1000,
					},
					error: {
						duration: 5 * 1000,
					},
					style: {
						background: "white",
						color: "var(--color-grey-700)",
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						letterSpacing: "1px",
					},
				}}
			/>
		</>
	);
}

export default App;
