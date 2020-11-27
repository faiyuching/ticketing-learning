import request from 'supertest';
import { app } from '../../app';

it('reutrns a 404 if the ticket is not found', async () => {
    await request(app)
        .get('/api/tickets/agajksdfhkasj')
        .send()
        expect(404);
});

it('returns the tickets if the ticket is found', async () => {
    const title = 'concert';
    const price = 20;
    const reaponse = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title, price
        })
        .expect(201);
    const ticketResponse = await request(app)
        .get(`/api/tickets/${reaponse.body.id}`)
        .send()
        .expect(201);
    
    expect(ticketResponse.body.title).toEqual(title);
    expect(ticketResponse.body.price).toEqual(price);
})