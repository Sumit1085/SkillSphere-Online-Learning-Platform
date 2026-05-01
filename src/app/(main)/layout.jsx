import PopularCourses from "@/Components/PopularCourses";
import Banner from "../../Components/Banner";
import Header from "../../Components/Header";
import LearningTips from "@/Components/LearningTips";
import Instructor from "@/Components/Instructor";

const layout = ({children}) => {
    return (
        <div className="">
            <Header></Header>
            <Banner></Banner>
            <PopularCourses/>
            <LearningTips/>
            <Instructor/>
            <main>{children}</main>
        </div>
    );
};

export default layout;