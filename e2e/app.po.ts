import { browser, by, element } from 'protractor';

export class AppPage {


  getBrowser(){
    return browser;
  }
  navigateToHome() {
    return browser.get('/login');
  }
  navigateToPost() {
    return browser.get('/posts');
  }
  loginPage(){

    // Find page elements
    var userNameField = browser.driver.findElement(by.id('username'));
    var userPassField = browser.driver.findElement(by.id('password'));
    var userLoginBtn  = browser.driver.findElement(by.id('loginButton'));

    // Fill input fields
    userNameField.sendKeys('root');
    userPassField.sendKeys('root');

    // Ensure fields contain what we've entered
    expect(userNameField.getAttribute('value')).toEqual('root');
    expect(userPassField.getAttribute('value')).toEqual('root');

    // Click to sign in - waiting for Angular as it is manually bootstrapped.
    userLoginBtn.click();
    return element(by.className('userName')).getText();

  }

  userPost(){

    // Find page elements
    var title = browser.driver.findElement(by.id('title'));
    var description = browser.driver.findElement(by.id('description'));
    var text  = browser.driver.findElement(by.id('text'));
    var btn  = browser.driver.findElement(by.id('postSubmit'));


    // Fill input fields
    title.sendKeys('title');
    description.sendKeys('description');
    text.sendKeys('text');

    // Ensure fields contain what we've entered
    expect(title.getAttribute('value')).toEqual('title');
    expect(description.getAttribute('value')).toEqual('description');
    expect(text.getAttribute('value')).toEqual('text');
    // Click to sign in - waiting for Angular as it is manually bootstrapped.
    btn.click();
    return element(by.className('userName')).getText();
  }

}
