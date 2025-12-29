import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password"; // Dùng Password của Prime để có icon con mắt
import { useState, useRef } from "react";
import { useAuthStore } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const setLogin = useAuthStore((state) => state.setLogin);
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleClick = async () => {
    //gọi api từ backend
    // Cập nhật tài khoản theo yêu cầu của bạn
    if (email === "vutung150100@gmail.com" && pass === "ADtungvu456") {
      setLogin();
      navigate("/");
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Sai email hoặc pass",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 p-4">
      <Toast ref={toast} />

      {/* Logo góc trên trái */}
      <div className="absolute top-8 left-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
          <i className="pi pi-prime text-white text-xl"></i>
        </div>
      </div>

      <div className="w-full max-w-[480px] bg-white rounded-[24px] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100/50">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign in</h2>
          <p className="text-slate-500 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Get started
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-500 ml-1">
              Email address
            </label>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@gmail.com"
              className="p-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-semibold text-slate-500">
                Password
              </label>
              <span
                className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </span>
            </div>
            <Password
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              toggleMask
              feedback={false}
              placeholder="••••••••"
              inputClassName="w-full p-3 rounded-xl border-gray-200"
              className="w-full"
            />
          </div>

          <Button
            label="Sign in"
            onClick={handleClick}
            // Nền đen (bg-black), chữ trắng (text-white)
            className="w-full py-4 bg-black border-none rounded-xl font-bold text-white hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
          />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400 font-semibold">
                OR
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6 text-xl">
            <i className="pi pi-google text-red-500 cursor-pointer hover:scale-110 transition-transform"></i>
            <i className="pi pi-github text-slate-800 cursor-pointer hover:scale-110 transition-transform"></i>
            <i className="pi pi-twitter text-blue-400 cursor-pointer hover:scale-110 transition-transform"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
