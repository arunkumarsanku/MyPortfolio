import '@testing-library/jest-dom';

global.IntersectionObserver = class {
    constructor() {
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
    }
  };
  