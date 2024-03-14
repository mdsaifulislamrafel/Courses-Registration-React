import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = ({handleCourse}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
          .then((res) => res.json())
          .then((data) => setCourses(data));
    }, [])
    return (
        <div className='w-9/12'>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    courses.map((single, idex) => <SingleCourse handleCourse={handleCourse} key={idex} single={single}></SingleCourse>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    Courses: PropTypes.array.isRequired,
    handleCourse: PropTypes.func.isRequired,
};

export default Courses;