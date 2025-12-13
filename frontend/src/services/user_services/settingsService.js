// src/services/settingsService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getSettings = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/settings/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting settings:", error);
    throw error;
  }
};

export const updateSettings = async (userId, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/user/settings/${userId}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating settings:", error);
    throw error;
  }
};
