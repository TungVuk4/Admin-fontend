import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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
    //Gọi backend api login
    if (email == "admin" && pass == "admin") {
      setLogin();
      navigate("/");
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Sai email hoặc pass",
      });
    }
  };
  return (
    <Card title="Login" className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <small>Email</small>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col gap-1">
          <small>Password</small>
          <InputText
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <Button label="Login" onClick={handleClick} />
        <div className="text-center">
          <Button
            label="Register"
            onClick={() => {
              navigate("/register");
            }}
            className="w-30"
          />
        </div>

        <Toast ref={toast} />
      </div>
    </Card>
  );
}
