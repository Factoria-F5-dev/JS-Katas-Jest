//const { describe } = require('node:test');
const request = require('supertest');

const baseUrl = 'https://cristinamaser.com/';

describe('GET api/invitations', () => {
    // it() es una función de alias que se utiliza comúnmente en el estilo de prueba BDD (Behavior-Driven Development) para describir el comportamiento esperado de una función o componente.
    it('responds with json', async () => {
        const responde = await request(baseUrl).get('api/invitations');
        expect(responde.statusCode).toBe(200);
    });
});
