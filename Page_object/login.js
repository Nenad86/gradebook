
export default class LoginPage{

    get loginButton(){
        return cy.get('button[type="submit"]');
    }

    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput(){
        return cy.get('#userPassword');
    }

    get gradeBookListTitle(){
        return cy.contains('The Gradebooks List');
    }

login (email, password){
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.loginButton.click();
    }
}

export const loginPage = new LoginPage();
