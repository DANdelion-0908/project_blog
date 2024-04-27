import { useState } from "react";
import Dashboard from "./views/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
    const [page, setPage] = useState("dashboard");

    const navigator = (component) => {
        setPage(component);
    };

    let content;

    switch (page) {
        case "dashboard":
            content = <Dashboard />
            break;
    
        default:
            break;
    };

    return (
        <>
            <Header />
            {content}
            {page!='dashboard' && <Footer />}
        </>
    )
};

export default Router;