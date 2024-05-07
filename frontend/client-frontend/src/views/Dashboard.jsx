import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import { Suspense } from "react";
import { PropTypes } from "prop-types";

function Dashboard({ navigator }) {
  const apiURL = 'http://localhost:2048/user/posts';
  
  const [post, setPost] = useState([]);

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

      setPost(data);

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
      {post.length > 0 ? (
        <Suspense fallback={<div className="loader"></div>}>
          {data.map((post, index) => {
            return(
              <DashCard key={index} id={post.id} name={post.title} image={post.picture} navigator={navigator}/>
            );
          })}
        </Suspense>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  navigator: PropTypes.func.isRequired
};

export default Dashboard;