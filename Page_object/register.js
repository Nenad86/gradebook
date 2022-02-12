export default class RegisterPage{

    get firstNameInput () {
        return cy.get('#first_name'); 
    }

    get lastNameInput () {
        return cy.get('#last_name'); 
    }

    get emailInput () {
        return cy.get('#email'); 
    }

    get passwordInput () {
        return cy.get('#password'); 
    }

    get paswwordConfirmInput(){
        return cy.get('#password_confirmation')
    }

    get checkbox(){
        return cy.get('#terms_conditions')
    }

    get registerButton(){
        return cy.get('button[class="btn btn-outline-primary"]')
    }

    register (firstName, lastName, email, password){
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.paswwordConfirmInput.type(password);
        this.checkbox.check({force: true});
        this.registerButton.click();
    }
}

export const registerPage = new RegisterPage();