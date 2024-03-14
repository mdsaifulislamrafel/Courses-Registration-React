import { useState } from 'react'
import './App.css'
import Course from './components/Course/Course'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15;
function App() {
  const [singleCourse, setSingleCourse] = useState([]);

  const handleCourse = course => {
    const isExists = singleCourse.find(c => c.id === course.id);
    const credit = singleCourse.reduce((p, c) => p + c.credit, 0);

    if (credit + course.credit > totalCredits) {
      return toast.error('You have reached your credit limit');
    }

    if (!isExists) {
      const newSingleCourse = [...singleCourse, course];
      setSingleCourse(newSingleCourse);
      toast.success("Successfully added")
    } else {
      toast.warning('Already added')
    }


    
  };


  return (
    <div className='w-[90%] mx-auto p-5'>
      <h1 className='text-4xl font-bold text-center'>Course Registration</h1>
      <div className='flex justify-between gap-5 my-5'>
        <Courses handleCourse={handleCourse}></Courses>
        <Course singleCourse={singleCourse}></Course>
        <ToastContainer />
      </div>
    </div>
  )
}



export default App
