import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-6xl font-bold text-center mt-20 text-rose-500 space-y-4">
            <h1>OOPS !</h1>
            <h1>404 Page Not Found</h1>
            <NavLink to="/">
                <button className="btn btn-primary">Back to Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;