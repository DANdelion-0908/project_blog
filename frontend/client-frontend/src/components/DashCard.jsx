import { PropTypes } from "prop-types";

function DashCard({ id, image, name, navigator }) {

    const handleBlogSelection = () => {
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
}

DashCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigator: PropTypes.func.isRequired
};

export default DashCard;