/// <reference types="Cypress" />

import { loginPage } from '../../Page_object/login';
import { addGradebook } from '../../Page_object/addGradebook';
import  data  from '../fixtures/data.json'

const faker = require('faker');

describe('addGradebook', () =>{

    let userData = {
        randomName: faker.name.firstName(),
    }

    before('visit link', () =>{
            cy.visit('/login');
            loginPage.login(data.validEmail, data.validPassword);

            cy.url().should("contain", "/gradebooks");  
    })

    it('add gradebook', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/gradebooks/store', (req) => {}).as("addGradebookValid");

        addGradebook.createGradebook(userData.randomName);

       cy.wait('@addGradebookValid').then((intercept) =>{
           expect(intercept.response.statusCode).eq(201);
       })
    })
})