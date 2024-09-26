import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000";

axios.defaults.withCredentials = true;

export const useAuth = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('user'),
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    // Signup function
    signup: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/signup`, { email, password, name });
            localStorage.setItem('user', JSON.stringify(response.data.user));
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error signing up", isLoading: false });
            throw error;
        }
    },

    // Login function
    login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            localStorage.setItem('user', JSON.stringify(response.data.user));
            set({ user: response.data.user, isAuthenticated: true, error: null, isLoading: false });
        } catch (error) {
            set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
            throw error;
        }
    },

    // Logout function
    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await axios.post(`${API_URL}/logout`);
            localStorage.removeItem('user');
            set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
            set({ error: "Error logging out", isLoading: false });
            throw error;
        }
    },

    // Check authentication status
    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/check-auth`);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ isAuthenticated: false, isCheckingAuth: false });
            localStorage.removeItem('user');
        }
    },

    forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/forgot-password`, { email });
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response.data.message || "Error sending reset password email",
            });
            throw error;
        }
    },

    resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
            set({ message: response.data.message, isLoading: false });
        } catch (error) {
            set({
                isLoading: false,
                error: error.response.data.message || "Error resetting password",
            });
            throw error;
        }
    },
}));

// Sync across tabs
window.addEventListener('storage', (event) => {
    if (event.key === 'user') {
        const user = JSON.parse(event.newValue);
        const isAuthenticated = !!user;
        useAuth.getState().set({ user, isAuthenticated });
    }
});
