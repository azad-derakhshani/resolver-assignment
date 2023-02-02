import {By, WebElement} from 'selenium-webdriver';
import {BasePage} from '../BasePage';

export class QeIndexPage extends BasePage {

    //Alerts
    buttonClickSuccessMessage: WebElement;

    //Buttons
    loginButton: WebElement;
    testFourFirstButton: WebElement;
    testFourSecondButton: WebElement;
    testFiveButton: WebElement;

    //Dropdowns
    testThreeDropdown: WebElement;

    //Inputs
    emailAddressInput: WebElement;
    passwordInput: WebElement;

    //Lists
    listgroup: WebElement;
    listGroupItems: WebElement;
    listGroupItemsSecondBadge: WebElement;

    //Test Data
    randomEmailAddress: string;
    randomPassword: string;

    constructor() {
        super();

        //Urls
        this.url = 'QE-index.html';

        //Alerts
        this.buttonClickSuccessMessage = this.driver.findElement(By.id('test5-alert'))

        //Buttons
        this.loginButton = this.driver.findElement(By.xpath('//button[text()="Sign in"]'));
        this.testFiveButton = this.driver.findElement(By.id('test5-button'));

        //Dropdowns
        this.testThreeDropdown = this.driver(By.xpath('//div[@id="test-3-div"]//button[id="dropdownMenuButton"]'));

        //Inputs
        this.emailAddressInput = this.driver.findElement(By.id('inputEmail'));
        this.passwordInput = this.driver.findElement(By.id('inputPassword'));

        //Lists
        this.listgroup = this.driver.findElement(By.className('list-group'));
        this.listGroupItems = this.driver.findElement(By.className('list-group-item'));
        this.listGroupItemsSecondBadge = this.driver.findElement(By.xpath('//li[contains(@class, "list-group-item")][2]//span[contains(@class, "badge")]'));

        //Test Data
        this.randomEmailAddress = this.chance.email();
        this.randomPassword = this.chance.password();
    }

}
