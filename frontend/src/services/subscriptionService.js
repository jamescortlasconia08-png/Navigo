// src/services/subscriptionService.js
import axios from "axios";
import api from "../config/api";

const API_URL = `${api}/user`;

export const updateSubscription = async (userId, planName) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    console.log("Updating subscription:", { userId, planName });

    const response = await axios.put(`${API_URL}/profile/${userId}`, {
      subscription_plan: planName,
      subscription_status: "Active",
      auto_renew: true,
    });

    console.log("Subscription update response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating subscription:", error);
    console.error("Error details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const cancelSubscription = async (userId) => {
  try {
    const response = await axios.put(`${API_URL}/profile/${userId}`, {
      subscription_status: "Cancelled",
      auto_renew: false,
    });
    return response.data;
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    throw error;
  }
};

export const getUserSubscription = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/profile/${userId}`);
    return {
      plan: response.data.subscription_plan || "Basic",
      status: response.data.subscription_status || "Active",
      autoRenew: response.data.auto_renew || false,
    };
  } catch (error) {
    console.error("Error getting subscription:", error);
    throw error;
  }
};

