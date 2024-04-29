function DashCard({ id, image, name, navigator }) {

    const handleBlogSelection = () => {
        console.log(`ID: ${id} Nombre: ${name}`);
        localStorage.setItem("postId", id);
        navigator("post");
    };

    return(
        <div className="dashCard-Div" style={{backgroundImage: `url(${image})`}} onClick={handleBlogSelection}>
            <div style={{backgroundColor: "#B8DEDCef", width: "100%", height: "5em", alignSelf: "flex-end", textAlign: "start", paddingLeft: "5%", borderRadiusBottom: "0.25vw"}}>
                <h3 style={{color: "black"}}>{name}</h3>
            </div>
        </div>
    );
};

export default DashCard;