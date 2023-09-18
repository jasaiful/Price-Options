import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 px-6 mb-2.5 hover:bg-green-300">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
route: PropTypes.object,
};

export default Link;