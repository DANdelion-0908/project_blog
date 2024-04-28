function Post({ name, image, description, points }) {
    return(
        <div className="background">
            <h2>{name}</h2>
            <hr/>
            <img src={image}/>
            <p>{description}</p>
            <h3>Puntos a destacar</h3>
            <p>{points}</p>
        </div>
    ); 
};

export default Post;