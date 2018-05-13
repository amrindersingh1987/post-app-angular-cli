import { AppPage } from './app.po';

describe('post-app-angular-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should render login page', function() {
    // Checking the current url
    page.navigateToHome();
    var currentUrl =  page.getBrowser().driver.getCurrentUrl();
    expect(currentUrl).toMatch('/login');
  });

  it('should sign in', function() {
     expect(page.loginPage()).toMatch('visual');

  });

  it('should user post', function() {
     //page.navigateToPost();
     page.userPost();
  });
});


