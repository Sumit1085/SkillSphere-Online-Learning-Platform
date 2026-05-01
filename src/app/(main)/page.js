import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Instructor from "@/Components/Instructor";
import LearningTips from "@/Components/LearningTips";
import PopularCourses from "@/Components/PopularCourses";

export const metadata = {
  title: 'SkillSphere - Online Learning Platform',
  description: '...',
}
export default function Home({children}) {
  return (
   <>
   
            <Banner></Banner>
            <PopularCourses/>
            <LearningTips/>
            <Instructor/>
            <main>{children}</main>
           
   </>
  );
}
