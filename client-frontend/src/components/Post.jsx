import { useState, useEffect, Suspense } from "react";

function Post() {
    const [post, setPost] = useState([]);

    async function viewPost() {
        const apiURL = `http://localhost:22217/user/posts/1`;

        try {
          const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json'
            }
          });
      
          if (!response.ok) {
            alert("Ocurrió un error al cargar el blog seleccionado.");
            return;
          };
      
          const data = await response.json();
          console.log(data);
          setPost(data);
      
        } catch (error) {
          console.error(error);
    
        };
      };  
    
    useEffect(() => {
            viewPost();
      }, []);  

    
    return(
        <div className="background">
            {post.length > 0 ? (
                <>
                    <h2>{post[0].title}</h2>
                    <hr/>
                    <img src={post[0].picture} alt="GameImage" width={"60%"}/>
                    <p>{post[0].post_description}</p>
                    <h3>Puntos a destacar</h3>
                    <p>{post[0].points}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Post;