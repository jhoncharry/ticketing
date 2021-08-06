import request from 'supertest';
import { app } from '../../app'

it("returns a 201 on successful signup", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test17@gmail.com",
            password: "123456"
        })
        .expect(201);
});

it("returns a 400 with an invalid email", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test17@g",
            password: "123456"
        })
        .expect(400);
});

it("returns a 400 with an invalid password", async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test17@gm",
            password: "17"
        })
        .expect(400);
});

it("returns a 400 with missing email and password", async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test12@gmail.com"
        })
        .expect(400);

    await request(app)
        .post('/api/users/signup')
        .send({
            password: "asdadas"
        })
        .expect(400);
});

it("disallow duplicate emails", async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test12@gmail.com",
            password: "123456"
        })
        .expect(201);

    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test12@gmail.com",
            password: "123456"
        })
        .expect(400);
});

it("sets a cookie after successful signup", async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: "test12@gmail.com",
            password: "123456"
        })
        .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});