// src/network/RestClient.js

import axios from 'axios';
import qs from 'qs';
import StatusCode from './StatusCode';
import CookieManager from './CookieManager';

// prettier-ignore
// axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000;
axios.defaults.validateStatus = function (statusCode) {
    switch (statusCode) {
        // Successful 2xx
        case StatusCode.OK:
        case StatusCode.CREATED:
        case StatusCode.ACCEPTED:
        case StatusCode.NON_AUTHORITATIVE_INFORMATION:
        case StatusCode.NO_CONTENT:
        case StatusCode.RESET_CONTENT:
        case StatusCode.PARTIAL_CONTENT:
        // Client Error 4xx
        // case StatusCode.BAD_REQUEST:
        // case StatusCode.UNAUTHORIZED:
        case StatusCode.NOT_FOUND:
            // case StatusCode.CONFLICT:
            return true;
    }

    // if (
    //     (StatusCode.EXPECTATION_FAILED < statusCode &&
    //         statusCode < StatusCode.INTERNAL_SERVER_ERROR) ||
    //     (StatusCode.HTTP_VERSION_NOT_SUPPORTED < statusCode && statusCode < 600)
    // ) {
    //     return true;
    // }

    return false;
};

// Request interceptor
axios.interceptors.request.use(
    async function (config) {
        if (config.headers['Disable-Custom-Auth']) {
            return config;
        }

        const token = CookieManager.getCookie('token')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Response interceptor
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);

const sendRequest = async (requestMethod, url, params, config, callback) => {
    try {
        const response = await requestMethod(url, params, config);

        if (callback && typeof callback === 'function') {
            callback(response.status, response.data);
        }

        return response;
    } catch (error) {
        const errorMessage = error.data.error?.detail;
        if (error.status === StatusCode.UNAUTHORIZED) {
            CookieManager.deleteAllCookie();
            window.location = '/signin';
        }

        throw new Error(
            JSON.stringify({ status: error.status, message: errorMessage })
        );
    }
};

const RestClient = {
    get: async (url, params = {}, callback) => {
        const payload = {
            params: params,
            paramsSerializer: (params) => {
                return Object.entries(params)
                    .map(([key, value]) => `${key}=${value}`)
                    .join('&');
            },
        };

        return sendRequest(axios.get, url, payload, {}, callback);
    },

    post: async (url, params = {}, callback) => {
        return sendRequest(axios.post, url, params, {}, callback);
    },

    put: async (url, params = {}, callback) => {
        return sendRequest(axios.put, url, qs.stringify(params), {}, callback);
    },

    patch: async (url, params = {}, callback) => {
        return sendRequest(
            axios.patch,
            url,
            qs.stringify(params),
            {},
            callback
        );
    },

    delete: async (url, params = {}, callback) => {
        return sendRequest(
            axios.delete,
            url,
            qs.stringify(params),
            {},
            callback
        );
    },
}

export default RestClient;
