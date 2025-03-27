
const Banner = () => {
    return (
        <div className="mb-20">
            <div className="hero bg-sky-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
                    <img
                        src="../../assets/images/user.png"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;