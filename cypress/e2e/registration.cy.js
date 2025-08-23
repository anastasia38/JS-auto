import registrationPage from '../support/POM/registrationPage';

describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should register successfully with valid data', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
           // registrationPage.getEmailField().type('naste38+6@gmail.com');
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.submitRegistration()
            cy.contains('Add car').should('be.visible')
            cy.url().should('include', '/panel/garage')
        });
    });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Name field', () => {
     registrationPage.getNameField().focus().blur();
            registrationPage.getLastNameField().type('Test');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
         cy.contains('Name required').should('be.visible');
        });
     });

describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for invalid data in Name field', () => {
     registrationPage.getNameField().type('Настя');
            registrationPage.getLastNameField().type('Test');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Name is invalid').should('be.visible');
       });
     });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for characters limit in Name field', () => {
     registrationPage.getNameField().type('qwertyuioplkjhgfdsazx');
            registrationPage.getLastNameField().type('Test');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233');
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible', { sensitive: true });
       });
     });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show have boarder color red in Name field', () => {
     registrationPage.getNameField().type('qwertyuioplkjhgfdsazx');
            registrationPage.getLastNameField().type('Test');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233');
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible', { sensitive: true });
      registrationPage.getNameField()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
       });
     });

describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Last Name field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().focus().blur();
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
         cy.contains('Last name required').should('be.visible');
        });
     });

describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for invalid data in Last Name field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Березова');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
         cy.contains('Last name is invalid').should('be.visible');
        });
     });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show have boarder color red in Last Name field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('qwsdcvbtfgercasdrtgbn');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
       });
     });

      describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show have boarder color red in Last Name field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('qwsdcvbtfgercasdrtgbn');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass112233');
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible', { sensitive: true });
      registrationPage.getLastNameField()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
       });
     });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error with invalid data in Email field', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            registrationPage.getEmailField().type('naste38+6gmail.com');
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
            cy.contains('Email is incorrect').should('be.visible')
        });
    });

    describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Email field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            registrationPage.getEmailField().focus().blur();
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
         cy.contains('Email required').should('be.visible');
        });
     });

      describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show have boarder color red in Email field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            registrationPage.getEmailField().type('nastgmail.comm');
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
      cy.contains('Email is incorrect').should('be.visible');
      registrationPage.getEmailField()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
       });
     });


describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error with invalid data in Password field and error for empty ReEnter password field', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('qwe'), { sensitive: true };
            registrationPage.getReEnterPasswordField().focus().blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.contains('Re-enter password required');
        });
    });

    describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Password field', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().focus().blur();
            registrationPage.getReEnterPasswordField().type('Pass123123', { sensitive: true });
            cy.contains('Password required')
            .should('be.visible');
        });
    });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show have boarder color red in Password field', () => {
     registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('qinhtgdnrhyo9anthsS2', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass123049', { sensitive: true });
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
      registrationPage.getPasswordField()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
       });
     });

      describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for Passwords do not match', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass123094', { sensitive: true })
            registrationPage.getReEnterPasswordField().type('Pasws123123', { sensitive: true }).blur();
            cy.contains('Passwords do not match').should('be.visible');
        });
    });

     describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Re-Enter Password field', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass123123', { sensitive: true });
            registrationPage.getReEnterPasswordField().focus().blur();
            cy.contains('Re-enter password required')
            .should('be.visible');
        });
    });

    describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });

    it('should show error for empty Re-Enter Password field', () => {
            registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            const randomEmail = `test${Date.now()}@mail.com`
            registrationPage.getEmailField().type(randomEmail)
            registrationPage.getPasswordField().type('Pass123123', { sensitive: true });
            registrationPage.getReEnterPasswordField().focus().blur();
            cy.contains('Re-enter password required')
            .should('be.visible');
            registrationPage.getReEnterPasswordField()
            .should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });

    describe('Registration Form', () => {

    beforeEach(() => {
        registrationPage.visit();
        registrationPage.openRegistrationForm();
    });


    it('Should error User already exists', () => {
        registrationPage.getNameField().type('Anastasiia');
            registrationPage.getLastNameField().type('Berezova');
            registrationPage.getEmailField().type('naste38+1@gmail.com');
            registrationPage.getPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.getReEnterPasswordField().type('Pass112233', { sensitive: true });
            registrationPage.submitRegistration();
            cy.contains('User already exists')
            .should('be.visible');
        });
    });











     