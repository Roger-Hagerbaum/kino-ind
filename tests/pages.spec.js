import request from 'supertest';
import app from '../script/app.js';


test('home page shows list of movies', async () => {
    const response = await request(app)
    .get('/')
    .expect(200);
});

test('moviepages shows movie details', async () =>{
    const response = await request(app)
        .get('/movies/6')
        .expect(200);
    expect(response.text.includes('Forrest Gump')).toBeTruthy();
});
test('moviepages shows movie details', async () =>{
    const response = await request(app)
        .get('/movies/2')
        .expect(200);
    expect(response.text.includes('Encanto')).toBeTruthy();
});