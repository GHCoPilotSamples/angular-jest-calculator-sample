import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  it('add two numbers', () => {
    expect(fixture.sum(1,4)).toBe(5);
  });
  //write test for all the methods subtract, multiply, divide, fibonacci, square
  it('subtract two numbers', () => {
    expect(fixture.subtract(4,1)).toBe(3);
  });
  it('multiply two numbers', () => {
    expect(fixture.multiply(4,1)).toBe(4);
  });
  it('divide two numbers', () => {
    expect(fixture.divide(4,1)).toBe(4);
  });
  it('fibonacci of a number', () => {
    expect(fixture.fibonacci(4)).toBe(3);
  });
  it('square of a number', () => {
    expect(fixture.square(4)).toBe(16);
  });
  

});
