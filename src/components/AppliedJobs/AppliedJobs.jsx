import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localStorage";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobId = getStoredApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobId.includes(job.id))
            setAppliedJobs(jobsApplied);
        }
    }, [])

    return (
        <div className="lg:px-20">
            <h1 className="font-bold lg:text-4xl mt-10">Applied Jobs : {appliedJobs.length}</h1>
            <div className="mt-10">
                {
                    appliedJobs.map((appliedJob,idx) => <AppliedJobCard key={idx} appliedJob={appliedJob}></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;