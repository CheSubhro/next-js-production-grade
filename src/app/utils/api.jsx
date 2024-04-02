
import axios from 'axios';

// Function to make a GET request to the API

export const get = async (url, params) => {

    try {
        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('GET request failed:', error);
        throw error;
    }
};

// Function to make a POST request to the API

export const post = async (url, data) => {

    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('POST request failed:', error);
        throw error;
    }
};

// Function to make a PUT request to the API

export const put = async (url, data) => {

    try {
        const response = await axios.put(url, data);
        return response.data;
    } catch (error) {
        console.error('PUT request failed:', error);
        throw error;
    }
};error

// Function to make a DELETE request to the API

export const del = async (url) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
    }
};

