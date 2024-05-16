import PropTypes from 'prop-types';

function CheckButtonIcon({completed}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${completed ? "block fill-green-500" : "hidden"}`} viewBox="0 0 20 20">
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
        </svg>
    )
}

CheckButtonIcon.propTypes = {
    completed: PropTypes.bool.isRequired,
};

export {CheckButtonIcon};