
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price, features }=option;

    return (
        <div className='bg-blue-500 rounded-xl flex flex-col p-4'>
            <h1 className='text-center'>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h1>
            <h4 className='text-3xl text-center my-6'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index) => <Feature
                key={index}
                feature={feature}
                ></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-800 w-full py-2 font-bold rounded-xl hover:bg-green-300'>Buy Now</button>
                
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;