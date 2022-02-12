/// <reference types="Cypress" />

import { loginPage } from '../../Page_object/login';
import  data  from '../fixtures/data.json'

const faker = require('faker');

describe('loginPage', () =>{
    
    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    before('visit link', () =>{
            cy.visit('/login')
            cy.url().should("contain", "/login")  
    })

    it('login with valid credentials', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login', (req) => {}).as("validLogin");

       loginPage.login(data.validEmail, data.validPassword);

       cy.wait('@validLogin').then((intercept) =>{
           expect(intercept.response.statusCode).eq(200);
       })

       loginPage.gradeBookListTitle.should('be.visible');
    });

})