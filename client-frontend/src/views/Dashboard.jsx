import { useEffect, useState } from "react";
import DashCard from "../components/DashCard";
import { Suspense } from "react";

function Dashboard(navigator) {
  const apiURL = 'http://localhost:22217/user/posts';

  const [selectedOption, setSelectedOption] = useState("");
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
      };
  
      const data = await response.json();
      setPosts(data);
      console.log(data);
      
    } catch (error) {
      console.error(error)

    };
  };

  useEffect(() => {
    getPosts()
  }, []);
  
  const handleOptionChange = (event) => {
    selectedOption(event.target.value);
  };

  return (
    <div className="background">
      <h1>Blogs publicados</h1>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        {posts.map((post, index) => {
          return(
            <DashCard key={index} id={post.id} name={post.title} image={post.picture} navigator={navigator}/>
          )
        })}
      </Suspense>
    </div>
  );
};

export default Dashboard;