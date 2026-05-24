import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ role: "ADMIN" });
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("error");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const roles = ["ADMIN"];

  const handleSubmit = async () => {
    if (!form.username || !form.email || !form.password) {
      setMsg("Please fill in all fields");
      setMsgType("error");
      return;
    }

    if (form.password.length < 6) {
      setMsg("Password must be at least 6 characters");
      setMsgType("error");
      return;
    }

    setLoading(true);
    const payload = {
      username: form.username,
      email: form.email,
      password: form.password,
      role: "ADMIN"
    };
    console.log("Submitting payload:", payload);
    const res = await registerUser(payload);
    console.log("Registration response:", res);
    setLoading(false);

    if (res.success) {
      setMsg("✅ Registered successfully! Redirecting to login...");
      setMsgType("success");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMsg(res.message || "Registration failed. Try a different username.");
      setMsgType("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-700 mt-2">Join us today</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              placeholder="Username"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-700 transition duration-200 text-gray-900 bg-white placeholder-gray-500"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-700 transition duration-200 text-gray-900 bg-white placeholder-gray-500"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-700 transition duration-200 text-gray-900 bg-white placeholder-gray-500"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div>
            <select
              value={form.role || "MEMBER"}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-slate-700 transition duration-200 text-gray-900 bg-white"
            >
              {/* <option value="MEMBER">Member</option> */}
              <option value="ADMIN">Admin</option>
              {/* <option value="MODERATOR">Moderator</option> */}
            </select>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-gradient-to-r from-slate-700 to-blue-800 text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {msg && (
          <div className={`${msgType === "success" ? "bg-green-50 border-green-600" : "bg-red-50 border-red-600"} border-l-4 p-4 rounded`}>
            <p className={`${msgType === "success" ? "text-green-800" : "text-red-800"} font-medium`}>{msg}</p>
          </div>
        )}

        <div className="text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-slate-700 hover:text-slate-900 font-semibold">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;