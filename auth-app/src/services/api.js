const BASE_URL = "https://api.freeapi.app/api/v1/users";

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || `HTTP Error: ${res.status}`);
  }
  return data;
};

const getAuthHeader = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await handleResponse(res);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const result = await handleResponse(res);
    
    // Store the access token if provided
    if (result.data?.accessToken) {
      localStorage.setItem("accessToken", result.data.accessToken);
    }
    
    return result;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/current-user`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
    });
    return await handleResponse(res);
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
    });
    
    // Clear token on logout
    localStorage.removeItem("accessToken");
    
    return await handleResponse(res);
  } catch (error) {
    localStorage.removeItem("accessToken");
    return { success: false, message: error.message };
  }
};