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
  test('Create a person', async () => {
    let response = await mockRequest.post('/people').send({
      name: 'test',
      age: 34,
      pronouns: 'he/him',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.age).toEqual(34);
    expect(response.body.pronouns).toEqual('he/him');
  });
});

// describe('Server Tests', () => {
//   describe('Error Handler Tests', () => {
//     test('404 on a bad route', async () => {
//       let response = await mockRequest.get('/foo');
//       expect(response.status).toEqual(404);
//       expect(response.text).toEqual('Not Found');
//     });
//     test('404 on a bad method', async () => {
//       let response = await mockRequest.put('/person');
//       expect(response.status).toEqual(404);
//       expect(response.text).toEqual('Not Found');
//     });
//     test('500, no name in query string', async () => {
//       let response = await mockRequest.get('/person');
//       expect(response.status).toEqual;
//     });
//   });
//   describe('Looking Good', () => {
//     test('Working with name, and proper output', async () => {
//       let response = await mockRequest.get('/person?name=Dylan');
//       ``;
//       let nameObj = {
//         name: 'Dylan',
//       };
//       expect(response.status).toEqual(200);
//       expect(response.body).toEqual(nameObj);
//     });
//   });
// });

// module.exports = {};
