import {QeIndexPage} from "../pages/BasePage/QeIndexPage";
let qeIndexPage = new QeIndexPage();

beforeEach(async ({ }) => {
    await qeIndexPage.goTo();
});

test('Test 1', async ({ }) => {

    /* Navigate to the home page
    Assert that both the email address and password inputs are present as well as the login button
    Enter in an email address and password combination into the respective fields */

});

test('Test 2', async ({ }) => {

    /* Navigate to the home page
    In the test 2 div, assert that there are three values in the listgroup
    Assert that the second list item's value is set to "List Item 2"
    Assert that the second list item's badge value is 6 */

});

test('Test 3', async ({ }) => {

    /* Navigate to the home page
    In the test 3 div, assert that "Option 1" is the default selected value
    Select "Option 3" from the select list */

});

test('Test 4', async ({ }) => {

    /* Navigate to the home page
    In the test 4 div, assert that the first button is enabled and that the second button is disabled */

});
test('Test 5', async ({ }) => {


    /* Navigate to the home page
    In the test 5 div, wait for a button to be displayed (note: the delay is random) and then click it
    Once you've clicked the button, assert that a success message is displayed
    Assert that the button is now disabled */

});

test('Test 6', async ({ }) => {

    /* Navigate to the home page
    Write a method that allows you to find the value of any cell on the grid
    Use the method to find the value of the cell at coordinates 2, 2 (staring at 0 in the top left corner)
    Assert that the value of the cell is "Ventosanzap" */

});

afterEach(async ({ }) => {
    await qeIndexPage.driver.quit();
});


