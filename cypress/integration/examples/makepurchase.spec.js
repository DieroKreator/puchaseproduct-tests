/// <reference types="cypress" />

it('should should add product to the car', () => {
    cy.visit('http://www.automationpractice.com')
    cy.get('#homefeatured > :nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    cy.get('.exclusive > span').click()
    cy.get('.button-medium > span').click()
    cy.get('.cart_description > .product-name > a').should('be.visible')

    cy.get('.cart_navigation > .button > span').click()

})