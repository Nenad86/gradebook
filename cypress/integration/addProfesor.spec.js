/// <reference types="Cypress" />

import { loginPage } from '../../Page_object/login';
import { addProfesor } from '../../Page_object/addProfesor';
import  data  from '../fixtures/data.json'

const faker = require('faker');

describe('addProfesor', () =>{

    let correctGradeBook= 'Pik';
    

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
    }

    before('visit link', () =>{
            cy.visit('/login');
            loginPage.login(data.validEmail, data.validPassword);

            cy.url().should("contain", "/gradebooks");  
    })

    it('addprofesor', () => {
         addProfesor.addUser(userData.randomFirstName, userData.randomLastName, data.imageUrl, correctGradeBook);
    })

})