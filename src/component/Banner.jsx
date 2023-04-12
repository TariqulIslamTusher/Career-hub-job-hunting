import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className=' bg-[#818eff25]'>
            <div className="my-container mx-auto grid md:grid-cols-2 justify-between items-center gap-8 ">
                <div className="banner-caption md:max-w-[500px] text-center md:text-left order-2 md:order-1 ">
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold '>One Step Closer To Your <br /><span className='text-blue-600'>Dream Job</span></h1>
                    <p className='text-muted mt-8 px-6 md:px-0'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className='py-4'>
                        <Link to={'/view'}><button className="LgBtn">Get Started</button></Link>
                    </div>
                </div>
                <div className="banner-img order-1 md:order-2">
                    <img src="https://i.ibb.co/Phww7bG/person.png" alt=" Image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;