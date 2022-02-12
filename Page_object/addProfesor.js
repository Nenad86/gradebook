export default class AddProfesor{

    get addProfesorButton(){
        return cy.get('a[href="/professors/create"]');
    }

    get nameInputField() {
        return cy.get('input[id="input-default"]');
    }

    get lastNameInputField(){
        return cy.get('input[id="input-default1"]');
    }

    get gradeBookList(){
        return cy.get('select[class="mb-4 custom-select"]');
    }

    get addImageButton(){
        return cy.get('button[class="btn btn-image btn-primary"]');
    }

    get submitButton(){
        return cy.get('button[class="btn btn-secondary"]');
    }

    get cancelButton(){
        return cy.get('a[class="btn btn-cancel router-link-active btn-danger"]');
    }

    get imageInputField(){
        return cy.get('input[class="form-control"]').eq(2);
    }

addUser (name, lastName, image, gradeBook){
    this.addProfesorButton.click();
    this.nameInputField.type(name);
    this.lastNameInputField.type(lastName);
    this.addImageButton.click();
    this.imageInputField.type(image);
    this.gradeBookList.select(gradeBook);
    this.submitButton.click();
    }
}

export const addProfesor = new AddProfesor();
