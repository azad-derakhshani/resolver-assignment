import {Builder, Capabilities, By, Key, until} from 'selenium-webdriver';
import { Chance } from 'chance';

export class BasePage {

    url: string;

    //Tools
    driver: Builder;
    capabilities: Capabilities;
    chance: Chance;

    constructor() {

        //Tools
        this.driver = new Builder().forBrowser('chrome').build();
        this.capabilities = new Capabilities();
        this.chance = new Chance();

    }

    async goTo() {
        await this.driver.manage().window().maximize();
        await this.driver.get(this.url);
        await this.driver.manage().setTimeouts({implicit: 8 });
    }

}
