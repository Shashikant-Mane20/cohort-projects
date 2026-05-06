import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setMsg("Please enter username and password");
      return;
    }

    setLoading(true);
    const res = await loginUser(form);
    setLoading(false);

    console.log("Login response:", res);

    if (res.success) {
      setMsg("");
      navigate("/dashboard");
    } else {
      setMsg(res.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-700 mt-2">Sign in to your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              placeholder="Username"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition duration-200 text-gray-900 bg-white placeholder-gray-500"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 transition duration-200 text-gray-900 bg-white placeholder-gray-500"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {msg && (
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
            <p className="text-red-800 font-medium">{msg}</p>
          </div>
        )}

        <div className="text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;