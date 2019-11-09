// src/manager/LocalStorageManager.js

const LocalStorageManager = {
    getItem: (key, defaultValue = null) => {
        return window.localStorage.getItem(key) || defaultValue;
    },
    setItem: (key, value) => {
        window.localStorage.setItem(key, value);
    },
};

export default LocalStorageManager;
