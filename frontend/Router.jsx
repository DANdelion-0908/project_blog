import { useState } from "react";
import Dashboard from "./client-frontend/src/views/Dashboard";
import Header from "./client-frontend/src/components/Header";
import Footer from "./client-frontend/src/components/Footer";
import Post from "./client-frontend/src/views/Post";
import Login from "./client-frontend/src/views/Login";
import Register from "./client-frontend/src/views/Register";
import EmptyState from "./client-frontend/src/views/EmptyState";

import AdminDashboard from "./admin-frontend/src/views/Dashboard";
import AdminPost from "./admin-frontend/src/views/Post";
import AdminEditPost from "./admin-frontend/src/views/EditPost";
import AdminCreatePost from "./admin-frontend/src/views/CreatePost";
import AdminHeader from "./admin-frontend/src/components/Header";

function Router() {
    const [page, setPage] = useState("dashboard");

    const navigator = (component) => {
        setPage(component);
    };

    let content;

    switch (page) {
        case "dashboard":
            if (localStorage.getItem("isVerified") === "true") {
                content = <AdminDashboard navigator={navigator}/>
                break;
            }
            
            content = <Dashboard navigator={navigator}/>
            break;

        case "post":
            content = <Post selectedPost={parseInt(localStorage.getItem("postId"))}/>
            break;

        case "login":
            content = <Login navigator={navigator}/>
            break;

        case "register":
            content = <Register navigator={navigator}/>
            break;

        case "admin/dashboard":
            content = <AdminDashboard navigator={navigator}/>
            break;

        case "admin/post":
            content = <AdminPost selectedPost={parseInt(localStorage.getItem("postId"))} navigator={navigator}/>
            break;

        case "admin/edit":
            content = <AdminEditPost selectedPost={parseInt(localStorage.getItem("postId"))} navigator={navigator}/>
            break;
            
        case "admin/create":
            content = <AdminCreatePost navigator={navigator}/>
            break;
    
        default:
            content = <EmptyState />
            break;
    }

    return (
        <>
            {localStorage.getItem("isVerified") === "true" ? (
                <AdminHeader navigator={navigator} />
            ) : (
                <Header navigator={navigator}/>
            )}
            {content}
            {page != 'dashboard' && page != 'admin/dashboard' && <Footer />}
        </>
    )
}

export default Router;