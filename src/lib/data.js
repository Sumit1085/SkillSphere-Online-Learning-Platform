export const getCourseData = async() => {
    const res = await fetch('http://localhost:3000/data.json');
    const datas = await res.json();
    return datas
}