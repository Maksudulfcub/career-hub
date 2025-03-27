import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        toast("Successfully applied !")
    }

    return (
        <div className="mt-10">
            <h1 className="text-4xl font-semibold text-center">Job Details</h1>
            <div className="mt-10 lg:max-w-2/3 mx-auto space-y-6">
                <h4 className="text-xl font-semibold">
                    <span>Job Title : {job.job_title}</span>
                </h4>
                <p>
                    <span className="font-semibold">Salary Range : </span>
                    <span className="text-gray-500">{job.salary} (Per Month)</span>
                </p>
                <p>
                    <span className="font-semibold">Job Description : </span>
                    <span className="text-gray-500">{job.job_description}</span>
                </p>
                <p>
                    <span className="font-semibold">Job Responsibility : </span>
                    <span className="text-gray-500">{job.job_responsibility}</span>
                </p>
                <p>
                    <span className="font-semibold">Educational Requirements : </span>
                    <span className="text-gray-500">{job.educational_requirements}</span>
                </p>
                <p>
                    <span className="font-semibold">Experience : </span>
                    <span className="text-gray-500">{job.experiences}</span>
                </p>
                <div>
                    <p className="font-semibold">Contact Information : </p>
                    <div className="text-sm">
                        <p>Phone : {job.contact_information.phone}</p>
                        <p>Email : {job.contact_information.email}</p>
                        <p>Address : {job.contact_information.address}</p>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <button onClick={handleApplyJob} className="btn btn-primary w-1/2 text-white">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;