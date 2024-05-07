import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

function AdminPost({ selectedPost, navigator }) {
  const [post, setPost] = useState([]);

  async function viewPost() {
    const apiURL = `http://localhost:2048/user/posts/${selectedPost}`;

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
      }
  
      const data = await response.json();
      setPost(data);
  
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePost() {

    if (!confirm("¿Estás seguro de que quieres eliminar este post?")) {
        return;
    }

    const apiURL = `http://localhost:2048/admin/posts/${selectedPost}`;

    try {
      const response = await fetch(apiURL, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })

      if (!response.ok) {
        alert("Ocurrió un error al eliminar el post.")
        return;
      }

      alert("Post eliminado correctamente.")
      navigator("admin/dashboard");
        
    } catch (error) {
        console.error(error);
    }
  }

  const handleEdit = () => {
    navigator("admin/edit");
  };
  
  useEffect(() => {
    viewPost();
  });  

  return (
    <div id="postCard">
      {post.length > 0 ? (
        <>
          <h2 style={{gridRow: "1", gridColumn: "1 / span 2"}}>{post[0].title}</h2>
          <div style={{gridRow: "1", gridColumn: "2", width: "auto", justifySelf: "flex-end"}}>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={deletePost}>Eliminar</button>
          </div>
          <hr style={{gridColumn: "1 / span 2", gridRow: "1"}}/>
          <img style={{gridColumn: "2", gridRow: "2", justifySelf: "center", alignSelf: "center", boxShadow: "0.2vw 0.2vw 0.5vw 0.2vw #0000002f", borderRadius: "0.25vw"}} src={post[0].picture} alt="GameImage" width={"100%"}/>
          <p style={{gridColumn: "1", gridRow: "2"}}>{post[0].post_description}</p>
          <h3 style={{gridRow: "3", gridColumn: "1 / span 2"}}>Puntos a destacar</h3>
          <p style={{gridRow: "4", gridColumn: "1 / span 2"}}>{post[0].points}</p>
          <div style={{textAlign: "left", justifySelf: "flex-end", gridColumn: "2"}}>
            <p>Fecha de Publicación: {post[0].created_at}</p>
          </div>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}

AdminPost.propTypes = {
  selectedPost: PropTypes.number.isRequired,
  navigator: PropTypes.func.isRequired
};

export default AdminPost;
