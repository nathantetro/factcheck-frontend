const KNACK_API_URL = "https://factcheck-scraper-api.herokuapp.com/api/knack"
const ALL_API_URL = "https://factcheck-scraper-api.herokuapp.com/api/all"


/* export const getGoogleFactChecks = async (query) => {
    try {
        const response = await fetch(GOOGLE_API_URL + "?query=" + query + "&key=" + GOOGLE_API_KEY, {
            method: 'GET',
        });

        if (!response.ok) {
            throw Error(
                'Unable to GET factchecks: ' +
                response.status +
                ' ' +
                response.statusText
            );
        }

        return response.json();

    } catch (e) {
        console.error(e);
        throw Error(e);

    }
} */

export const getKnackFactChecks = async (query) => {
    try {
        const response = await fetch(KNACK_API_URL, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        });
        if (!response.ok) {
            throw Error(
                'Unable to GET factchecks: ' +
                response.status +
                ' ' +
                response.statusText
            );
        }

        return response.json();

    } catch (e) {
        console.error(e);
        throw Error(e);

    }
}

export const getAllFactChecks = async (query) => {
    try {
        const response = await fetch(ALL_API_URL, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
        });
        if (!response.ok) {
            throw Error(
                'Unable to GET factchecks: ' +
                response.status +
                ' ' +
                response.statusText
            );
        }

        return response.json();

    } catch (e) {
        console.error(e);
        throw Error(e);

    }
}
