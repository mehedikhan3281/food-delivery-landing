import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import Restaurant from "./Restaurant/Restaurant";


const Home = () => {
    return (
        <div className="overflow-hidden ">
            <Hero/>
            <Restaurant/>
            <Category/>
        </div>
    );
};

export default Home;