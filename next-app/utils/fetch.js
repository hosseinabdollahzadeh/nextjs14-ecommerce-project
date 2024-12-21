const getFetch = async (url) => {
    const res = await fetch(`http://plaravelapi.test/api${url}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    if (res.ok) {
        const data = await res.json();
        return data.data;
    } else {
        throw new Error(`مشکل در دیافت اطلاعات : ${res.status}`);
    }
}

export {getFetch}