import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const handleShowAll = () => {
        setDataLength(jobs.length);
    }

    return (
        <div className="lg:px-20 lg:mt-10">
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Featured jobs</h1>
                <p className='text-gray-500 text-sm mt-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='text-center mt-10'>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={handleShowAll} className='btn btn-primary'>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;