import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from "./store";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import AnimatedRoutes from "hocs/routes/Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HerbaCare | Dashboard</title>
        <meta name="description" content="Plantas Medicinales, Recetas Medicinales todo aqui en nuestra pagina HerbaCare"/>
        <meta name="keywords" content="plantas medicinales, hierbas medicinales, remedios caseros" />
        <meta name="author" content="HerbaCare" />
      </Helmet>
      <Provider store={store}>
      <Router>
        <AnimatedRoutes/>
      </Router>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
