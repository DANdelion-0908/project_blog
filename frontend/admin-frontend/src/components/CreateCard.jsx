import createIcon from '../assets/plus-sign.png';

function CreateCard({ navigator }) {

    const handleBlogCreation = () => {
        navigator("create");
    };

    return(
        <div className="createCard-Div" style={{backgroundImage: `url(${createIcon})`}} onClick={handleBlogCreation}>
            <div style={{backgroundColor: "#B8DEDCef", width: "100%", height: "5em", alignSelf: "flex-end", textAlign: "start", paddingLeft: "5%", borderRadiusBottom: "0.25vw"}}>
                <h3 style={{color: "black"}}>Crear Post</h3>
            </div>
        </div>
    );
};

export default CreateCard;