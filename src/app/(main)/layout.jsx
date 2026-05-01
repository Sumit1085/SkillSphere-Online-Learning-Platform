import PopularCourses from "@/Components/PopularCourses";
import Banner from "../../Components/Banner";
import Header from "../../Components/Header";

const layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <PopularCourses/>
            <main>{children}</main>
        </div>
    );
};

export default layout;