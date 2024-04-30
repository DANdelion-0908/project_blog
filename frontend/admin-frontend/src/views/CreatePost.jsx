import { useState } from "react";

function AdminCreatePost({ navigator }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState("");
    const [picture, setPicture] = useState("");

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

    const handlePictureChange = (e) => {
        e.preventDefault();
        setPicture(e.target.value);
    };

    async function createPost() {
        const apiURL = `http://localhost:22217/admin/posts`;

        try {
          const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                picture: picture,
                post_description: description,
                points: points
            })
          })  

          if (!response.ok) {
            alert("Ocurrió un error al crear el post.");
            return;
          };

          alert("Post creado exitosamente.");
          navigator("admin/dashboard");

        } catch (error) {
            console.error(error);
        };
    }

    return(
        <div id="editPostCard">
            <>
                <input type="text" style={{gridRow: "1", gridColumn: "1 / span 2"}} placeholder="Título" value={title} onChange={handleTitleChange}/>
                <input type="text" style={{gridColumn: "2", gridRow: "2", justifySelf: "center", alignSelf: "center", borderRadius: "0.25vw"}} placeholder="URL de imagen" value={picture} onChange={handlePictureChange}/>
                <textarea name="description" id="decriptionText" cols="30"  rows="10" style={{gridColumn: "1", gridRow: "2"}} placeholder="Descripción" value={description} onChange={handleDescriptionChange}></textarea>
                <h3 style={{gridRow: "3", gridColumn: "1 / span 2"}}>Puntos a destacar</h3>
                <textarea name="points" id="pointsText" cols="30" rows="10" style={{gridRow: "4", gridColumn: "1 / span 2"}} placeholder="Puntos" value={points} onChange={handlePointsChange}></textarea>
                <button onClick={createPost}>Guardar</button> 
                <button onClick={() => navigator("admin/dashboard")}>Cancelar</button>             
            </>
        </div>
    );
};

export default AdminCreatePost;