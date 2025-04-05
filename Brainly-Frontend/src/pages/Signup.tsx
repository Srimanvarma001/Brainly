import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    try {
      // ✅ Send correct data format
      await axios.post(`${BACKEND_URL}api/v1/signup`, {
        username,
        password,
      });

      alert("You have signed up!");
    } catch (err: any) {
      console.error("Signup failed:", err?.response?.data || err.message);
      alert("Signup failed. Check console for more info.");
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white rounded p-6 min-w-48 shadow-md w-96">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <div className="flex justify-center pt-4 pb-4">
          <Button
            onClick={signup}
            text="Sign Up"
            variant="primary"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
