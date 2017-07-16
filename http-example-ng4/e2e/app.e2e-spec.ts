import { HttpExampleNg4Page } from './app.po';

describe('http-example-ng4 App', () => {
  let page: HttpExampleNg4Page;

  beforeEach(() => {
    page = new HttpExampleNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
