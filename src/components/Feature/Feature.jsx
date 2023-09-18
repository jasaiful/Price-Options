
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> 
            <AiFillCheckCircle className='text-yellow-400'/> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;