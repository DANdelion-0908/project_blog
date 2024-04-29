import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import { Suspense } from "react";
import CreateCard from "../components/CreateCard";

function Dashboard({ navigator }) {
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
      };
  
      const data = await response.json();

      setContent(
        <>
          <div className="background">
            <h1>Blogs publicados</h1>
            <hr />
            <Suspense fallback={<h1>Loading...</h1>}>
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
      console.log(data);
      
    } catch (error) {
      console.error(error)

    };
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {content}
    </>
  )
};

export default Dashboard;