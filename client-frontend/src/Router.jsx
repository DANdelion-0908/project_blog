import { useState } from "react";
import Dashboard from "./views/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./views/Post";
import Login from "./views/Login";
import Register from "./views/Register";

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

        case "login":
            content = <Login navigator={navigator}/>
            break;

        case "register":
            content = <Register navigator={navigator}/>
            break;
    
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