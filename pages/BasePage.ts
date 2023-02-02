import {Browser, Builder, By} from 'selenium-webdriver';
import { Chance } from 'chance';

export class BasePage {

    url: string;

    //Tools
    driver: Builder;
    chance: Chance;

    constructor() {

        //Tools
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
        this.chance = new Chance();
    }

    async goTo() {
        await this.driver.manage().window().maximize();
        await this.driver.get(this.url);
        await this.driver.manage().setTimeouts({implicit: 8 });
    }

    async elementHasText(element, text) {
        await expect(element).toHaveTextContent(text);
    }

    async elementHasValue(element, value) {
        await expect(element).toHaveValue(value)
    }

    async selectOptionFromDropdown(dropdown, optionIndex) {
        let dropdownOption = this.driver.findElement(By.text(`Option ${optionIndex}`))
        await dropdown.click();
        await dropdownOption.click()
    }

    async checkButtonStatus(button, expectedStatus){
        if (expectedStatus = 'enabled') {
            await expect(button).toBeEnabled();
        }
        else if (expectedStatus = 'disabled') {
            await expect(button).toBeDisabled();
        }
    }

    async getCellValueInTable(row, column) {
        let cell = await this.driver.findElement(By.xpath(`//table[contains(@class, "table")]//tr[${row + 1}]//td[${column + 1}]`));
        //row and column index start at 0, but Xpath element indexes start at 1
        return cell.getText();
    }

}
