/// <reference types="cypress" />

describe('Headers and Footer elements', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
  })

  it('Displays all headers buttons', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
   // cy.get('header button').should('have.length.at.least', 1)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('button.hero-descriptor_btn.btn.btn-primary', {timeout: 15000}) /// works
    .each(($btn) => {
      cy.wrap($btn).should('be.visible')
    })
  })
  

  it('Find all footer links and buttons', () => {
    // We'll store our item text in a variable so we can reuse it
   

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
     
    cy.get('footer').scrollIntoView()
    cy.wait(500) // пауза щоб все завантажилось

    //cy.get('footer a', {timeout: 1500}).each(($link) => {
    //  cy.wrap($link).should('be.visible')
   // })

    cy.get('.socials_icon.icon.icon-facebook', {timeout: 15000}) // works
    .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')
    })

    cy.get('a[href*="https://www.facebook.com/Hillel.IT.School"]', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })

    cy.get('.socials_icon.icon.icon-telegram', {timeout: 15000}) // works
    .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')
    })

    cy.get('a[href*="https://t.me/ithillel_kyiv"]', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })
    

    cy.get('.socials_icon.icon.icon-youtube', {timeout: 15000}) // works
    .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')
    })

    cy.get('a[href*="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })

    cy.get('.socials_icon.icon.icon-instagram', {timeout: 15000}) // works
    .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')
    })

    cy.get('a[href*="https://www.instagram.com/hillel_itschool/"]', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })

     cy.get('a[href*="https://www.linkedin.com/school/ithillel/"]', { timeout: 15000 })
      .find('.socials_icon.icon.icon-linkedin')
      .should('be.visible');

     cy.get('a[href*="ithillel.ua"]', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })


     cy.contains('support@ithillel.ua', {timeout: 15000}) // works
     .should('be.visible')
     .each(($el) => {
      cy.wrap($el).should('be.visible')  
     })
     
     
     


      // cy.get('footer .footer d-flex align-items-center', {timeout: 15000}).each(($btn) => {
      //cy.wrap($btn).should('be.visible')
      //}) --- not working
     })
})
 
    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.