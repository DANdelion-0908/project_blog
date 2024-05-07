import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

function AdminEditPost({ selectedPost, navigator }) {
    const [post, setPost] = useState([]);

    const [originalTitle, setOriginalTitle] = useState("");
    const [title, setTitle] = useState("");

    const [originalDescription, setOriginalDescription] = useState("");
    const [description, setDescription] = useState("");

    const [originalPoints, setOriginalPoints] = useState("");
    const [points, setPoints] = useState("");

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

            setOriginalDescription(data[0].post_description);
            setDescription(data[0].post_description);

            setOriginalTitle(data[0].title);
            setTitle(data[0].title);

            setOriginalPoints(data[0].points);
            setPoints(data[0].points);
        
        } catch (error) {
            console.error(error);
        }
    }

    async function updatePost() {
        const apiURL = `http://localhost:2048/admin/posts/${selectedPost}`;

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
    }, []);
    
    return(
        <div id="editPostCard">
            {post.length > 0 ? (
                <>
                  <textarea name="title" id="titleText" cols="10" rows="2" style={{gridRow: "1", gridColumn: "1 / span 2"}} value={title} onChange={handleTitleChange}>{originalTitle}</textarea>
                  <img style={{gridColumn: "2", gridRow: "2", justifySelf: "center", alignSelf: "center", boxShadow: "0.2vw 0.2vw 0.5vw 0.2vw #0000002f", borderRadius: "0.25vw"}} src={post[0].picture} alt="GameImage" width={"100%"}/>
                  <textarea name="description" id="decriptionText" cols="30"  rows="10" style={{gridColumn: "1", gridRow: "2"}} value={description} onChange={handleDescriptionChange}>{originalDescription}</textarea>
                  <h3 style={{gridRow: "3", gridColumn: "1 / span 2"}}>Puntos a destacar</h3>
                  <textarea name="points" id="pointsText" cols="30" rows="10" style={{gridRow: "4", gridColumn: "1 / span 2"}} value={points} onChange={handlePointsChange}>{originalPoints}</textarea>
                  <button onClick={updatePost}>Guardar</button>   
                  <button onClick={() => navigator("admin/post")}>Cancelar</button>             
                </>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}

AdminEditPost.propTypes = {
    selectedPost: PropTypes.number.isRequired,
    navigator: PropTypes.func.isRequired
};

export default AdminEditPost;
