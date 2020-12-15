import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const UseScrollNavigation = ({ location }) => {
    useEffect(() => {
        const element = document.getElementById(location.hash);
        const timeout = setTimeout(() => {
            window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
            });
        }, 100);
        return () => clearTimeout(timeout);
    }, [location]);
    return null;
};

export default withRouter(UseScrollNavigation);