import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobCard = ({ appliedJob }) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = appliedJob;
    return (
        <div className="border border-gray-200 shadow-xl p-5 space-y-4 rounded-lg flex flex-col flex-grow">
            <img className="w-1/5" src={logo} alt="" />
            <h2 className="text-xl font-semibold">{job_title}</h2>
            <p className="text-gray-500 text-sm font-medium">{company_name}</p>
            <div className="flex gap-3">
                <p className="border border-sky-500 rounded-sm text-sky-500 font-medium px-3 py-1">{remote_or_onsite}</p>
                <p className="border border-sky-500 rounded-sm text-sky-500 font-medium px-3 py-1">{job_type}</p>
            </div>
            <div className="flex gap-4 text-gray-500 text-sm">
                <p>{location}</p>
                <p>Salary : {salary}</p>
            </div>
            <Link>
                <button className="btn btn-primary">View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJobCard;