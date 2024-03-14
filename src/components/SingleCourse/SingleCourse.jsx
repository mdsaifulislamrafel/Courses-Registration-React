import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
// eslint-disable-next-line react/prop-types
const SingleCourse = ({ single, handleCourse }) => {
  const { name, description, photo, price, credit } = single;
  return (
    <div>
      <div className="card py-2 bg-base-100  border border-slate-950">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
              <FiDollarSign />
              <span>Price : {price}</span>
            </div>
            <div className='flex items-center gap-4'>
              <FiDollarSign />
              <span>Credit : {credit}</span>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn w-full btn-primary" onClick={() => handleCourse(single)}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCourse.propTypes = {
  single: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
    handleCourse: PropTypes.func.isRequired
  }),
};



export default SingleCourse;