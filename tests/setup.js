// Provide a proper localStorage/sessionStorage mock for jsdom
// jsdom's built-in localStorage can break when document.write() is used

const createStorage = () => {
  const store = {};
  return {
    getItem: (key) => (key in store ? store[key] : null),
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach((k) => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] || null,
  };
};

Object.defineProperty(window, 'localStorage', { value: createStorage(), writable: true });
Object.defineProperty(window, 'sessionStorage', { value: createStorage(), writable: true });
