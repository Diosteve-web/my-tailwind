// src/pages/LoginPage.jsx
import { GoogleLogin } from "@react-oauth/google";
import { useContactStore } from "../storeg/contact.js";

function LoginPage() {
  const login = useContactStore((state) => state.login);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gradient-to-b from-black via-gray-900 to-black p-8 rounded-lg shadow-lg border border-gold text-center">
        <h1 className="text-3xl font-serif text-gold mb-6">Login with Google</h1>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // Normally decode credentialResponse to get real user info
            const userData = {
              name: "Google User",
              email: "user@gmail.com",
              contact: "123-456-7890",
            };
            login(userData);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
