import { useState } from "react";
import Dashboard from "./views/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./views/Post";

function Router() {
    const [page, setPage] = useState("dashboard");

    const navigator = (component) => {
        setPage(component);
    };

    let content;

    switch (page) {
        case "dashboard":
            content = <Dashboard navigator={navigator}/>
            break;

        case "post":
            content = <Post selectedPost={parseInt(localStorage.getItem("postId"))}/>
    
        default:
            break;
    };

    return (
        <>
            <Header navigator={navigator}/>
            {content}
            {page!='dashboard' && <Footer />}
        </>
    )
};

export default Router;