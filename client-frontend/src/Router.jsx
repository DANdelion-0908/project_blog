import { useState } from "react";
import Dashboard from "./views/Dashboard";

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
            {content}
        </>
    )
};

export default Router;