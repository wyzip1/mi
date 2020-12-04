function cookie_set(key, obj) {
    if (document.cookie) {
        let cookie = JSON.parse(document.cookie);
        cookie[0][`${key}`] = obj;
        document.cookie = JSON.stringify(cookie);
    } else {
        let cookie = [];
        cookie.push({
            [`${key}`]: obj
        });
        document.cookie = JSON.stringify(cookie);
    }
}

function cookie_get(key) {
    if (document.cookie) {
        let cookie = JSON.parse(document.cookie)[0];
        return cookie[key];
    } else return "";
}