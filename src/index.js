import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import LawOffice from "./Portfolio/LawOffice";
import PortfolioSite from "./Portfolio/PortfolioSite";
import Todo from "./Portfolio/TodoList";
import WeatherApp from "./Portfolio/WeatherApp";
import LolForm from "./Portfolio/LolForm";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/portfolio/law-office" element={<LawOffice />} />
                <Route
                    path="/portfolio/portfolio-site"
                    element={<PortfolioSite />}
                />
                <Route path="/portfolio/todo-list" element={<Todo />} />
                <Route path="/portfolio/weather-app" element={<WeatherApp />} />
                <Route path="/portfolio/lol-form" element={<LolForm />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
