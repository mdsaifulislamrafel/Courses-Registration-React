import PropTypes from 'prop-types';
import { totalCredits } from '../../App';

const Course = ({ singleCourse }) => {
    const credit = singleCourse.reduce((p, c) => p + c.credit, 0)
    return (
        <div className='w-3/12 '>
            <div className='bg-white border-2 my-5 rounded-lg p-8 space-y-4'>
                <h1>Courses :{singleCourse.length} </h1>
                <h4>Course Hour Remaining {totalCredits - credit} hr</h4>
                <hr />
                <h3>Course Name </h3>
                <ul className='list-decimal'>
                    {
                        singleCourse.map((single, idex) => <li key={idex}>{single.name}</li>)
                    }
                </ul>
                <hr />
                <p>Total Credit Hour : {credit}</p>
                <hr />
                <p>Total Price : {singleCourse.reduce((p, c) => p + c.price, 0)} USD</p>
            </div>
        </div>
    );
};

Course.propTypes = {
    singleCourse: PropTypes.func.isRequired
};

export default Course;