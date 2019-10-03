const { Given, Then, When, After } = require("cucumber");

After(async function() {
    return await this.closeHomePage()
});

Given("I visit the site", async function() { 
    return await this.openHomePage()
});

Then("I should see {string}", async function(content) {
    return await this.pageHasStringContent(content)
});

Then('I should see {string} and {string}', async function (playerScore, computerScore) {
    return await this.scoreHasScoreContent(playerScore, computerScore)
});

Then("I should see a button {string}", async function(string){
    return await this.pageHasButtonContent(string)
});

When("I click on {string}", async function(string) {
    return await this.clickOnButton(string)
});