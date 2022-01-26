import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TokenPage from "./pages/TokenPage";
import Home from './pages/Home'
import TokenGenerator from "./TokenGenerator";

const App = () => {
    return (
        <TokenGenerator />
        );
};

export default App;
