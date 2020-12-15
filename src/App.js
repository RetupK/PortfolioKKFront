import React, { useState } from 'react';
import Home from './pages/Home/Home';
import { ThemeProvider } from "styled-components";
import theme from './utility/theme/theme';
import { GlobalStyles } from './GlobalStyles.css';
import UseScrollNavigation from './utility/HelperFunction/useScrollNavigation';
import { BrowserRouter } from "react-router-dom";
import Spinner from './components/Spinner/Spinner';

function App() {

    const [spinner, setSpinner] = useState(true);

    return (
        spinner ? <Spinner setSpinner={setSpinner}/>
        :
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