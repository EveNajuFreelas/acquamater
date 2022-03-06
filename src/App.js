import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import { navigation } from "./utils/navigation";
import { theme } from "./theme";
import Footer from "./components/footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header /> 
          <Routes>
            {navigation.map(nav => (
              <Route path={nav.url} element={nav.element} key={nav.id} />
            ))}
          </Routes >
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
