import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import { Suspense } from "react";
import CreateCard from "../components/CreateCard";
import { PropTypes } from "prop-types";

function AdminDashboard({ navigator }) {
  const apiURL = 'http://localhost:22217/user/posts';

  const [content, setContent] = useState(null);

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

      setContent(
        <>
          <div className="background">
            <h1>Blogs publicados</h1>
            <hr />
            <Suspense fallback={<div className="loader"></div>}>
              {data.map((post, index) => {
                return(
                  <DashCard key={index} id={post.id} name={post.title} image={post.picture} navigator={navigator}/>
                );
              })}
              <CreateCard navigator={navigator}/>
            </Suspense>
          </div>
        </>
      )
      
    } catch (error) {
      console.error(error)

    }
  }

  useEffect(() => {
    getPosts();
  });

  return (
    <>
      {content}
    </>
  )
}

AdminDashboard.propTypes = {
  navigator: PropTypes.func.isRequired
};

export default AdminDashboard;