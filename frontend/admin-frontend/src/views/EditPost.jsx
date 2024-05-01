import { useState, useEffect } from "react";

function AdminEditPost({ selectedPost, navigator }) {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState("");

    async function viewPost() {
        const apiURL = `http://localhost:22217/user/posts/${selectedPost}`;

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

    async function updatePost() {
        const apiURL = `http://localhost:22217/admin/posts/${selectedPost}`;

        try {
            const response = await fetch(apiURL, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    post_description: description,
                    points: points
                })
            })

            if (!response.ok) {
                alert("Ocurrió un error al actualizar el post.");
                return;
            }

            alert("Post actualizado correctamente.");
            navigator("admin/post")

        } catch (error) {
            console.error(error);
        }
    }

    async function deletePost() {

        if (!confirm("¿Estás seguro de que quieres eliminar este post?")) {
            return;
        }

        const apiURL = `http://localhost:22217/admin/posts/${selectedPost}`;

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

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePointsChange = (e) => {
        e.preventDefault();
        setPoints(e.target.value);
    };
    
    useEffect(() => {
        viewPost();
    })
    
    return(
        <div id="editPostCard">
            {post.length > 0 ? (
                <>
                  <input type="text" style={{gridRow: "1", gridColumn: "1 / span 2"}} value={title} onChange={handleTitleChange}/>
                  <button onClick={deletePost} style={{gridRow: "1", gridColumn: "2", width: "auto", justifySelf: "flex-end"}}>Eliminar</button>
                  <img style={{gridColumn: "2", gridRow: "2", justifySelf: "center", alignSelf: "center", boxShadow: "0.2vw 0.2vw 0.5vw 0.2vw #0000002f", borderRadius: "0.25vw"}} src={post[0].picture} alt="GameImage" width={"100%"}/>
                  <textarea name="description" id="decriptionText" cols="30"  rows="10" style={{gridColumn: "1", gridRow: "2"}} value={description} onChange={handleDescriptionChange}></textarea>
                  <h3 style={{gridRow: "3", gridColumn: "1 / span 2"}}>Puntos a destacar</h3>
                  <textarea name="points" id="pointsText" cols="30" rows="10" style={{gridRow: "4", gridColumn: "1 / span 2"}} value={points} onChange={handlePointsChange}></textarea>
                  <button onClick={updatePost}>Guardar</button>   
                  <button onClick={() => navigator("admin/dashboard")}>Cancelar</button>             
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default AdminEditPost;
