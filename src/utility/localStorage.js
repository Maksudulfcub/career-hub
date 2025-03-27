const getStoredApplication = () => {
    const storedApplication = localStorage.getItem('Job-applications')
    if (storedApplication) {
        return JSON.parse(storedApplication);
    }
    return [];
}
const saveApplication = (id) => {
    const storedApplication = getStoredApplication();
    const exists = storedApplication.find(jobId => jobId === id);
    if (!exists) {
        storedApplication.push(id);
        localStorage.setItem('Job-applications', JSON.stringify(storedApplication))
    }
}

export { getStoredApplication, saveApplication };