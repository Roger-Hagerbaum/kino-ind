import request from 'supertest';

import app from '../script/app.js';

function test(homePageShowsHeaderBodyAndFooter, param2) {

}
test('home page shows list of movies', async () => {
    const response = await request(app)
    .get('/')
    .expect(200);
});

test('movie page shows movie details', async () => {
    const response = await request(app)
    .get('/movies')
    .expect(200);
});

test('moviepages shows movie details', async () =>{
    const response = await request(app)
        .get('/movies/8')
        .expect(200);
    expect(response.text.includes('Idiocracy')).toBeTruthy();
});