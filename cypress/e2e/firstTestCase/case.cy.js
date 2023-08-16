

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
    cy
          .get('#txt_visit_date')
          .click()
          .then(input => {
            const current = new Date();
            const prior = new Date().setDate(current.getDate() +30);
            console.log(new Date(prior).toDateString());
            let day = new Date(prior).getDate();
            let month = new Date(prior).getMonth();
            let year = new Date(prior).getFullYear();
            let format3 = year+ "-" + month + "-" + day;
            input[0].dispatchEvent(new Event('input', { bubbles: true }))
            input.val(format3)

          })
          .click()
          cy.request(
            "http://metaphorpsum.com/paragraphs/2/4"
            ).its('body').then((body) => {
            const whatever =String(body);

            cy.get("#txt_comment").type(whatever);
          
        })
          cy.get("#btn-book-appointment").click()
    })
  })