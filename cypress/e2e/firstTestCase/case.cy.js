describe('Case Test', () => {
  it('Should navigate to the login page', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    cy.get("#menu-toggle").click()
    cy.contains('Login').click()
    cy.url().should('include', '/profile.php#login') 
    cy.get("#demo_username_label")
    cy.get("#demo_password_label")
    cy.get('input[aria-describedby="demo_username_label"]').invoke('val').then(sometext => {const username = sometext;
      cy.get("#txt-username").type(username);
  });
    cy.get('input[aria-describedby="demo_password_label"]').invoke('val').then(sometext => {const password = sometext;
      cy.get("#txt-password").type(password);
  });
  cy.get('#btn-login').click()
  cy.get("#combo_facility").select("Hongkong CURA Healthcare Center")
  cy.get('[type="checkbox"]').check()
  cy.get('[type="radio"]').check('None')
  cy.get('#txt_visit_date').click()
  cy.get('div.datepicker-days > table > thead > tr > th.next').click()
  //let new_date = 17
  cy.get('body > div > div.datepicker-days > table > tbody > tr:nth-child(4) > td:nth-child(1)').click()
  //cy.get('div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(6)').contains(new_date).click()  
  // press tab for closing datepicker
  cy.get('#txt_visit_date').type('{esc}')
  // send request to http://metaphorpsum.com/paragraphs/2/4, get paragraps and save all of these into a variable
  cy.request('http://metaphorpsum.com/paragraphs/2/4').then((response) => {
      const paragraphs = response.body
      cy.log(paragraphs)
      cy.get('#txt_comment').type(paragraphs)
  })    
  
  cy.get('#btn-book-appointment').click()
  cy.get('#menu-toggle').click()
  cy.contains('Logout').click()

  cy.url().should('include','/')
  })
})