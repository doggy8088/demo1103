import { Demo1103Page } from './app.po';

describe('demo1103 App', function() {
  let page: Demo1103Page;

  beforeEach(() => {
    page = new Demo1103Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
