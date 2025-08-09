import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import HowItWork from "./HowItWork/HowItWork";
import Restaurant from "./Restaurant/Restaurant";


const Home = () => {
    return (
        <div className="overflow-hidden ">
            <Hero/>
            <Restaurant/>
            <Category/>
            <HowItWork/>
        </div>
    );
};

export default Home;