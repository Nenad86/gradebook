export default class AddGradebook {
    
    get addGradebookbutton() {
        return cy.get('a[href="/gradebook/create"]');
    } 

    get gradebookNameInput(){
        return cy.get('#name');
    }

    get professorInput(){
        return cy.get('select[class="mb-4 custom-select"]')
    }

    get submitButton(){
        return cy.get('button[class="btn btn-submit btn-primary"]');
    }

    createGradebook (name, professor){
        this.addGradebookbutton.click();
        this.gradebookNameInput.type(name);
        this.submitButton.click();
        }
}

export const addGradebook = new AddGradebook();