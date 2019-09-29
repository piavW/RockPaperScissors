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
Then("I should see a button {string}", async function(string){
    return await this.pageHasButtonContent(string)
});
When("I click on {string}", async function(string) {
    return await this.clickOnButton(string)
});
Then("I should see player choice is {string}", async function (string) {
    return await this.pageHasStringContent(string)
});//[WIP]
Then("I should see the computer chooses {string}", async function (string){
    return await this.pageHasStringContent(string)
}); //[/WIP]
Then("I should have the result {string}", async function(string) {
    pending 
})