import {Builder, Capabilities, By, Key, until} from 'selenium-webdriver';
import {BasePage} from '../BasePage';

export class QeIndexPage extends BasePage {

    //Inputs
    emailInput: Element;
    passwordInput: Element;

    //Buttons
    loginButton: Element;

    constructor() {
        super();

        //Urls
        this.url = 'QE-index.html';

        //Inputs
        this.emailInput = this.driver.findElement(By.id('inputEmail'));
        this.passwordInput = this.driver.findElement(By.id('inputPassword'));

        //Buttons
        this.loginButton = this.driver.findElement(By.xpath('//button[text()="Sign in"]'));
    }

}
