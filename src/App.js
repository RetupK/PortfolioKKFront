import React from 'react';
import Home from './pages/Home/Home';
import { ThemeProvider } from "styled-components";
import theme from './utility/theme/theme';
import { GlobalStyles } from './GlobalStyles.css';
import UseScrollNavigation from './utility/HelperFunction/useScrollNavigation';
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <UseScrollNavigation/>
                <Home />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;