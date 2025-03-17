import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { configure } from '@testing-library/react';

// Enable React 17+ JSX Transform support in tests
configure({ defaultHidden: true });

window.IntersectionObserver = class {
    constructor() {
      this.observe = jest.fn();
      this.unobserve = jest.fn();
      this.disconnect = jest.fn();
    }
};