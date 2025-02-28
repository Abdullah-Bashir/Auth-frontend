import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
};

export const verifyOTP = async (email, otp) => {
    const response = await axios.post(`${API_BASE_URL}/verify`, { email, verificationCode: otp });
    return response.data;
};

export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password }, {
        withCredentials: true // 👈 Add this
    });
    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
};

export const resetPassword = async (token, newPassword, confirmPassword) => {
    const response = await axios.put(`${API_BASE_URL}/reset-password/${token}`, { newPassword, confirmPassword });
    return response.data;
};
