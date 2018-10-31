const { Given, Then, When, After } = require('cucumber')

Given('I visit the site', async function() {
  return await this.openHomePage();
});

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content);
})

When('I click {string}', async function(button) {
  return await this.clickOnButton(button);
})

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content);
})

Then('I should have {int} contact in my address book', async function (contactCount) {
  return await this.checkContactStorageCount(contactCount)
})

Then('I should not see {string}', async function (content) {
  return await this.pageDoesNotHaveTextContent(content)
})

After(async function() {
  return await this.closeHomePage();
})