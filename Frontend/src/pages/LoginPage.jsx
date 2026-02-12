import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {login, isLoggingIn} = useAuthStore();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
    return (
    <div className="justify-center items-center p-20 bg-base-200 bg-gradient-to-b">
      
      <div className=" rounded-lg  flex justify-center items-center bg-base-100  pb-6 pt-6 pr-6 pl-6 mt-6">
        <div className="w-full max-w-md space-y-10">
          
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-16">
                <img src="./pundits.png" />
              </div>
              <h1 className="text-2xl font-extrabold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 
                </div>
                <input
                  type="email"
                  className={`pl-0.5 input input-bordered w-full`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className=" label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none">
       
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`pl-0.5 input input-bordered w-full `}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="bg-green-600 btn border-t-green-50 w-full hover" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className=" text-green-500 link-hover ">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
export default LoginPage;