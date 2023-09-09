
import { PropTypes } from "@mui/material"


const TitleCard = ({title}: any) => {
    return<h1>
        {title}
    </h1>
}

TitleCard.propTypes = {
    title: PropTypes.string
};

export default TitleCard;