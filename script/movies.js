import fetch from "node-fetch";

const api = 'https://plankton-app-xhkom.ondigitalocean.app/api/movies';

export async function loadMovies() {
    const res = await fetch(api);
    const load = await res.json();
    return load.data;
}

export async function loadMovie(id) {
    const res = await fetch(api  +"/"+ id);
    const load = await res.json();
    console.log(load);
    return load.data;
}
