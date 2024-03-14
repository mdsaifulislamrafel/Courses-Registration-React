import PropTypes from 'prop-types';
import { totalCredits } from '../../App';

const Course = ({ singleCourse }) => {
    const credit = singleCourse.reduce((p, c) => p + c.credit, 0)
    return (
        <div className='w-3/12 '>
            <div className='bg-white border-2 my-5 rounded-lg p-6 space-y-4'>
                <div className='bg-cyan-600 p-2 rounded-lg text-white'>
                    <h1 className='text-2xl font-bold'>Courses :{singleCourse.length} </h1>
                    <h4 className='text-1xl font-bold'>Course Hour Remaining {totalCredits - credit} hr</h4>
                </div>
                <hr className='border-b-2 border-gray-400' />
                <h3 className='text-2xl font-bold'>Course Name </h3>
                <ul className='list-decimal'>
                    {
                        singleCourse.map((single, idex) => <li className='text-sm font-medium' key={idex}>{single.name}</li>)
                    }
                </ul>
                <hr className='border-b-2 border-gray-400' />
                <p className='text-xl font-semibold'>Total Credit Hour : {credit}</p>
                <hr className='border-b-2 border-gray-400' />
                <p className='text-xl font-extrabold'>Total Price : {singleCourse.reduce((p, c) => p + c.price, 0)} USD</p>
            </div>
        </div>
    );
};

Course.propTypes = {
    singleCourse: PropTypes.func.isRequired
};

export default Course;