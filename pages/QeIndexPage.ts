import {Builder, Capabilities, By, Key, until} from 'selenium-webdriver';
import {BasePage} from "./BasePage";

export class QeIndexPage extends BasePage {

    //Inputs
    emailInput: Element;
    passwordInput: Element;

    //Buttons
    loginButton: Element;

    constructor() {
        super();

        //Inputs
        this.emailInput = this.driver.findElement(By.xpath(""));
        this.passwordInput = this.driver.findElement(By.xpath(""));

        //Buttons
        this.loginButton = this.driver.findElement(By.xpath(""));
    }


}
