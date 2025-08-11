import About from "./About/About";
import Category from "./Category/Category";
import ClientReview from "./ClientReview/ClientReview";
// import ClientReview from "./ClientReview/ClientReview";
import Feature from "./Feature/Feature";
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
            <About/>
            <Feature/>
            <ClientReview/>
        </div>
    );
};

export default Home;