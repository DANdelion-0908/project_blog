import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import { Suspense } from "react";
import CreateCard from "../components/CreateCard";
import { PropTypes } from "prop-types";

function AdminDashboard({ navigator }) {
  const apiURL = 'http://localhost:2048/user/posts';

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
  
      if (!response.ok) {
        alert("Ocurrió un error cargado los blogs.");
        return;
      }
  
      const data = await response.json();
      setPosts(data);

    } catch (error) {
      console.error(error)

    }
  }

  useEffect(() => {
    getPosts();
  });

  return (
    <div className="background">
      <h1>Blogs publicados</h1>
      <hr />
      <Suspense fallback={<div className="loader"></div>}>
        {posts.map((post, index) => {
          return(
            <DashCard key={index} id={post.id} name={post.title} image={post.picture} navigator={navigator}/>
          );
        })}
        <CreateCard navigator={navigator}/>
      </Suspense>
    </div>
  )
}

AdminDashboard.propTypes = {
  navigator: PropTypes.func.isRequired
};

export default AdminDashboard;