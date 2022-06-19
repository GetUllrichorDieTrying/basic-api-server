'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API', () => {
  describe('USER ROUTE', () => {
    // CREATE / POST
    test('CREATE USER', async () => {
      let response = await mockRequest.post('/user').send({
        userName: 'Georgie',
        age: 34,
        email: 'george@fake.com',
      });
      expect(response.status).toEqual(200);
      expect(response.body.userName).toEqual('Georgie');
      expect(response.body.age).toEqual(34);
      expect(response.body.email).toEqual('george@fake.com');
    });
    // READ / GET ALL
    test('FIND ALL USERS', async () => {
      let response = await mockRequest.get('/user');
      expect(response.status).toEqual(200);
    });
    // READ / GET ONE
    test('FIND ONE USER', async () => {
      let response = await mockRequest.get('/user/1');
      expect(response.status).toEqual(200);
    });
    // UPDATE / PUT
    test('UPDATE ONE USER', async () => {
      let response = await mockRequest.put('/user/1');
      expect(response.status).toEqual(200);
    });
    // DELETE / DELETE
    test('DELETE ONE USER', async () => {
      let response = await mockRequest.delete('/user/1');
      expect(response.status).toEqual(200);
    });
  });
  // CREATE / POST
  describe('USER MESSAGE ROUTE', () => {
    test('Create a USER MESSAGE', async () => {
      let response = await mockRequest.post('/userMsg').send({
        recipient: 'Georgie',
        sender: 'Cinder',
        messageBody: 'Hey, it was so great to see you!',
      });
      expect(response.status).toEqual(200);
      expect(response.body.recipient).toEqual('Georgie');
      expect(response.body.sender).toEqual('Cinder');
      expect(response.body.messageBody).toEqual(
        'Hey, it was so great to see you!',
      );
    });
    // READ / GET ALL
    test('FIND ALL USER MESSAGES', async () => {
      let response = await mockRequest.get('/userMsg');
      expect(response.status).toEqual(200);
    });
    // READ / GET ONE
    test('FIND ONE USER MESSAGES', async () => {
      let response = await mockRequest.get('/userMsg/1');
      expect(response.status).toEqual(200);
    });
    // UPDATE / PUT
    test('UPDATE USER MESSAGES', async () => {
      let response = await mockRequest.put('/userMsg/1');
      expect(response.status).toEqual(200);
    });
    // DELETE / DELETE
    test('DELETE USER MESSAGES', async () => {
      let response = await mockRequest.delete('/userMsg/1');
      expect(response.status).toEqual(200);
    });
  });
});

describe('Server Tests', () => {
  describe('Error Handler Tests', () => {
    test('404 on a bad route', async () => {
      let response = await mockRequest.get('/foo');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });
    test('404 on a bad method', async () => {
      let response = await mockRequest.put('/foo');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });
    test('500, no name in query string', async () => {
      let response = await mockRequest.get('/user');
      expect(response.status).toEqual;
    });
  });
});

module.exports = {};
