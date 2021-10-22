/// <reference types="Cypress" />

import { loginPage } from '../../Page_object/login';
import { addProfesor } from '../../Page_object/addProfesor';
import  data  from '../fixtures/data.json'

const faker = require('faker');

describe('addProfesor', () =>{

    let correctGradeBook= 'Attempt1';
    let imageUrl= 'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg';

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
    }

    before('visit link', () =>{
            cy.visit('https://gradebook.vivifyideas.com/login');
            loginPage.login(data.validEmail, data.validPassword);
            cy.wait(3000);
            cy.url().should("contain", "/gradebooks");  
    })

    it('addprofesor', () => {
         addProfesor.addUser(userData.randomFirstName, userData.randomLastName, correctGradeBook);
         addProfesor.addImageButton.click();
         addProfesor.imageInputField.type(imageUrl);
         addProfesor.submitButton.click();
    })
 
})