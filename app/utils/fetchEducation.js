export const fetchEducation = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/education`);
    const data = await res.json();
    const education = data.education;
    return education
}