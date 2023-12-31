export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
    const data = await res.json();
    const pageInfo = data.pageInfo;
    return pageInfo
}