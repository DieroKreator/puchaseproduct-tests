/// <reference types="cypress" />

const { indexOf } = require("cypress/types/lodash")

describe('Realizar compra com successo', function () {
    it('should purchase a product successfully', () => {
        //Acessar o site: www.automationpractice.com. 
        cy.visit('http://www.automationpractice.com')
        //Escolha um produto qualquer na loja.
        cy.get('#homefeatured > :nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
        //Adicione o produto escolhido ao carrinho. 
        cy.get('.exclusive > span').click()
        //Prossiga para o checkout.
        cy.get('.button-medium > span').click()
        //Valide se o produto foi corretamente adicionado ao  carrinho e prossiga caso esteja tudo certo. 
        cy.get('.cart_description > .product-name > a').should('be.visible')
        
        //Realize o cadastro do cliente preenchendo todos os campos obrigatórios dos formulários. 
        cy.get('.cart_navigation > .button > span').click()
        
        cy.get('#email_create').type('romo1224@gmail.com')
        cy.get('#SubmitCreate > span').click()

        cy.get('#customer_firstname').type("Diego")
        cy.get('#customer_lastname').type("Rodriguez") 
        cy.get('#passd').type("!DVQB!dSnu6L258")

        cy.get('#address1').type("1001 Front St")
        cy.get('#city').type("San Francisco")
        cy.get('#id_state').select(indexOf[1])
        cy.get('#postcode').type("S94111")
        cy.get('#id_country').select(indexOf[5])
        cy.get('#phone_mobile').select("7878")

        //Valide se o endereço está correto e prossiga.
        cy.get('#address_address1 address_address2').should('have.text', '1001 Front St')
        
        //Aceite os termos de serviço e prossiga.
        cy.get('.center_column > form > p > button > span').click()
        cy.get('#cgv').check()
        cy.get('.form > p > button > span').click()

        //Valide o valor total da compra
        cy.get('#total_price').should('contain.value', '$83.00')

        //Seleccione pagamento e prossiga
        cy.get('.HOOK_PAYMENT > div:nth-child(2) > div > p > a > span').click()
        
        //Confirme a compra e valide se foi finalizada com sucesso.
        cy.get('.cart_navigation > button > span').click()
        cy.get('#center_column > p.alert.alert-success').should('be.visible')
    })
})
