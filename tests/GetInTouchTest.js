module.exports = {
    "GetInTouchTest"(browser){
        //Test Data
        const name = "Juan Perez";
        const email = "testmail@dlabs.com";
        const company = "Test Company";
        const message = "Test Message";

        //Locators
        const GetInTouchTitleLocator = 'h3[class="contact-form-heading center"]'; 
        const GetInTouchPopUpLocator = 'div[class="start-project-form content_form"]';
        const nameLocator = 'input[id="wpforms-872-field_0"]';
        const emailLocator = 'input[id="wpforms-872-field_1"]';
        const companyLocator = 'input[id="wpforms-872-field_6"]';
        const messageLocator = 'textarea[id="wpforms-872-field_2"]';


        browser
            .url("https://inhouse.decemberlabs.com")
            .windowMaximize()
            .waitForElementVisible('.menu-item-846')
            .click('.menu-item-846')
            .assert.textContains(GetInTouchTitleLocator, 'Get In Touch')
            .assert.elementPresent(GetInTouchPopUpLocator)
            .waitForElementVisible('.wpforms-submit')
            .click('.wpforms-submit')
            .assert.visible('.wpforms-error')
            .updateValue(nameLocator, name)
            .updateValue(emailLocator, email)
            .updateValue(companyLocator, company)
            .updateValue(messageLocator, message)
            .assert.not.visible('.wpforms-error')
    }
}