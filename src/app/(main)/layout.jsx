import PopularCourses from "@/Components/PopularCourses";
import Banner from "../../Components/Banner";
import Header from "../../Components/Header";
import LearningTips from "@/Components/LearningTips";
import Instructor from "@/Components/Instructor";
import Footer from "@/Components/Footer";

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;