import createIcon from '../../../assets/plus-sign.png';

import { PropTypes } from "prop-types";

function CreateCard({ navigator }) {

    const handleBlogCreation = () => {
        navigator("admin/create");
    };

    return(
        <div className="createCard-Div" style={{backgroundImage: `url(${createIcon})`}} onClick={handleBlogCreation}>
            <div style={{backgroundColor: "#B8DEDCef", width: "100%", height: "5em", alignSelf: "flex-end", textAlign: "start", paddingLeft: "5%", borderRadiusBottom: "0.25vw"}}>
                <h3 style={{color: "black"}}>Crear Post</h3>
            </div>
        </div>
    );
}

CreateCard.propTypes = {
    navigator: PropTypes.func.isRequired
};

export default CreateCard;