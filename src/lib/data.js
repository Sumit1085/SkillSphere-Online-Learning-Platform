export const getCourseData = async() => {
    const res = await fetch('https://skillsphere-server-gsus.onrender.com/courses');
    const datas = await res.json();
    return datas
}