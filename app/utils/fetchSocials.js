export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
    const data = await res.json();
    const socials = data.socials;
    return socials
}