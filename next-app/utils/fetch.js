const getFetch = async (url, headers = {}) => {
    const res = await fetch(`http://plaravelapi.test/api${url}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...headers
        }
    });

    if (res.ok) {
        const data = await res.json();
        return data.data;
    } else {
        throw new Error(`مشکل در دریافت اطلاعات : ${res.status}`);
    }
}
const postFetch = async (url, body, headers = {}) => {
    const res = await fetch(`http://plaravelapi.test/api${url}`, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...headers
        }
    });

    return await res.json()
}

export {getFetch, postFetch}