// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

// src/setupTests.ts
import '@testing-library/jest-dom';

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
(global as any).IntersectionObserver = MockIntersectionObserver;

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

