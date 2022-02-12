/// <reference types="Cypress"/>

import Faker from 'faker/lib';
import {registerPage} from '../../Page_object/register';

const faker = require('faker');

describe ('registerPage', () =>{

    let userData = {
        randomFirstName : faker.name.firstName(),
        radnomLastName : faker.name.lastName(),
        radnomEmail : faker.internet.email(),
        randomPassword : faker.internet.password()
    }

    before('visit link', () =>{
        cy.visit('/register')
        cy.url().should("contain", "/register") 
    })

    it('Register with valid credentials', () => {
        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/register', (req) => {}).as("validRegistration");

       registerPage.register(userData.randomFirstName, userData.radnomLastName, userData.radnomEmail, userData.randomPassword, userData.randomPassword);

       cy.wait('@validRegistration').then((intercept) =>{
           expect(intercept.response.statusCode).eq(201);
       })
    });
})