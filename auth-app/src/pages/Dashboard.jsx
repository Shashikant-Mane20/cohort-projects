import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showRaw, setShowRaw] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res.success) {
          setUser(res.data);
          setError("");
        } else {
          setError(res.message || "Failed to load user");
          navigate("/login");
        }
      })
      .catch((err) => {
        setError("Authentication failed. Please login again.");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900">Dashboard</h2>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Logout
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mb-6">
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          )}

          {user && (
            <div className="mb-4 flex justify-end">
              <button
                onClick={() => setShowRaw(!showRaw)}
                className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm"
              >
                {showRaw ? "View Formatted" : "View JSON"}
              </button>
            </div>
          )}

          {user ? (
            <div>
              {showRaw ? (
                <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-700 overflow-auto">
                  <pre className="text-green-400 font-mono text-sm">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex justify-center">
                    <img
                      src={user.avatar?.url || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                      alt={user.username}
                      className="w-24 h-24 rounded-full border-4 border-blue-800 shadow-lg"
                      onError={(e) => {
                        e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
                      }}
                    />
                  </div>

                  {/* User Info Grid */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 text-sm font-semibold">Username</p>
                      <p className="text-gray-900 text-lg font-bold">{user.username}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 text-sm font-semibold">Email</p>
                      <p className="text-gray-900 text-lg font-bold">{user.email}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700 text-sm font-semibold">Role</p>
                        <p className="text-blue-800 text-lg font-bold">{user.role}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700 text-sm font-semibold">Email Verified</p>
                        <p className={`text-lg font-bold ${user.isEmailVerified ? "text-green-700" : "text-red-700"}`}>
                          {user.isEmailVerified ? "✓ Yes" : "✗ No"}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-gray-700 text-sm font-semibold">Member Since</p>
                      <p className="text-gray-900 text-lg font-bold">
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-600 py-8">
              <p>No user data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;