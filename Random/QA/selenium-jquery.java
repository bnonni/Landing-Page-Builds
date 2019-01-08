package com.exploreselenium;

import java.io.File;
import java.lang.Class;

import com.google.common.io.Resources;
import org.apache.commons.io.Charsets;
import org.apache.commons.io.IOUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.URL;

public class RunJquery {

    WebDriver driver;
    JavascriptExecutor js;

    @FindBy(id="menu-top") WebElement menu;

    @BeforeClass
    public void browserInstantiate() {
        //System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
        System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\geckodriver.exe");
        driver=new FirefoxDriver();
        //driver = new ChromeDriver();
        js=(JavascriptExecutor)driver;
        PageFactory.initElements(driver, this);
    }

    @Test
    public void getTextFromJquery() throws Exception{
        driver.get("https://jquery.com");
        verifyElementVisible(menu);
        isjQueryLoaded(driver);
        System.out.println("Is Jquery loaded......" + isjQueryLoaded());
        System.out.println(js.executeScript("return $(\".copyright\").text();"));

    }

    public void verifyElementVisible(WebElement element){
        new WebDriverWait(driver,30).until(ExpectedConditions.visibilityOf(element));

    }

    public void isjQueryLoaded(WebDriver driver) {
        System.out.println("Waiting for ready state complete");
        (new WebDriverWait(driver, 30)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
                JavascriptExecutor js = (JavascriptExecutor) d;
                String readyState = js.executeScript("return document.readyState").toString();
                System.out.println("Ready State: " + readyState);
                return (Boolean) js.executeScript("return !!window.jQuery && window.jQuery.active == 0");
            }
        });
    }

}