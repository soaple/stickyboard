// src/manager/LocalStorageManager.js

const LocalStorageManager = {
    getItem: (key, defaultValue = null) => {
        return window.localStorage.getItem(key) || defaultValue;
    },
    setItem: (key, value) => {
        window.localStorage.setItem(key, value);
    },
    removeItem: (key) => {
        window.localStorage.removeItem(key);
    },
    removeAll: () => {
        Object.keys(window.localStorage).map((key) => {
            window.localStorage.removeItem(key);
        });
    }
};

export default LocalStorageManager;
