import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signupUser } from "../utils/authSlice";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/Logo.png";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedfir, setIsFocusedfir] = useState(false);
  const [isFocusedsec, setIsFocusedsec] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { loading, error } = useSelector((state) => state.auth);
  const { otpRequested } = useSelector((state) => state.auth);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (otpRequested) {
      navigate("/verifyotp");
    }
  }, [otpRequested, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    if (disableButton) return;
    setDisableButton(true);
    dispatch(signupUser(data)).then((result) => {
      if (result.error) {
        setTimeout(() => {
          setDisableButton(false);
        }, 5000);
      }
    });
  };

  const handleBack = () => {
    window.location.replace("/login");
  };

  const handleSubmitNext = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/verifyotp");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", result.user);
      toast.success("Google Sign-In successful:", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      toast.error("Error during Google sign-in:" + error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    }
  };

  const handleGithubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("GitHub Sign-In successful:", result.user);
      toast.success("GitHub Sign-In successful:", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error during GitHub Sign-In:", error);
      toast.error("Error during GitHub sign-in: " + error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center sm:min-h-screen">
      <Card className="w-full max-w-md">
        <CardContent>
          <button
            onClick={handleBack}
            className="fixed sm:absolute top-8 sm:top-12 left-5 sm:left-1/2 sm:ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-[#06b6d4] hover:bg-blue-500 text-[#06b6d4] hover:text-white transition-all z-50"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex justify-center mb-2 sm:mt-4 -mt-30">
            <div className="w-21 h-21 rounded-full overflow-hidden">
              <img
                src={Logo}
                alt="Profile"
                className="w-[120px] h-[120px] object-cover hidden md:block"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-white mb-7">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <Label
                htmlFor="name"
                className={`absolute left-4 transition-all ${
                  isFocusedfir || watch("name")
                    ? "-top-3 left-4 text-sm font-medium text-[#fff] bg-black px-1"
                    : "top-3 text-[#fff]"
                }`}
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                onFocus={() => setIsFocusedfir(true)}
                onBlur={() => setIsFocusedfir(!!watch("name"))}
                className={`border px-5 bg-black w-full rounded-xl focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-black"
                }`}
              />
              {errors.name && (
                <p
                  className="text-red-500 text-sm text-left px-3 mt-1"
                  aria-live="polite"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label
                htmlFor="email"
                className={`absolute left-4 transition-all ${
                  isFocused || watch("email")
                    ? "-top-3 left-4 text-sm font-medium text-[#fff] bg-black px-1"
                    : "top-3 text-[#fff]"
                }`}
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(!!watch("email"))}
                className={`border px-5 w-full bg-black rounded-xl focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-black"
                }`}
              />
              {errors.email && (
                <p
                  className="text-red-500 text-sm text-left px-3 mt-1"
                  aria-live="polite"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Label
                htmlFor="password"
                className={`absolute left-4 transition-all ${
                  isFocusedsec || watch("password")
                    ? "-top-3 left-4 text-sm font-medium text-[#fff] bg-black px-1"
                    : "top-3 text-[#fff]"
                }`}
              >
                Password
              </Label>
              <Input
                id="password"
                autoComplete="new-password"
                type={showPassword ? "password" : "text"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                onFocus={() => setIsFocusedsec(true)}
                onBlur={() => setIsFocusedsec(!!watch("password"))}
                className={`border px-5 w-full bg-black rounded-xl focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-black"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-white focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p
                  className="text-red-500 text-sm text-left px-3 mt-1"
                  aria-live="polite"
                >
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className={`w-full rounded-full text-white text-sm transition hover:bg-[#06b6d4] ${
                isValid
                  ? "bg-[#06b6d4] hover:bg-blue-700"
                  : "bg-gray-300 text-grey-700 cursor-not-allowed"
              }`}
              disabled={loading || disableButton}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>

          <div className="w-full flex flex-col items-center justify-center gap-6">
            <p className="text-white mt-4">OR SIGN UP WITH</p>
            <div className="flex gap-5">
              <button
                className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Sign in with Google"
              >
                <button onClick={handleGoogleSignIn}>
                  <FcGoogle size={35} />
                </button>
              </button>
              <button
                className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Sign in with GitHub"
              >
                <button onClick={handleGithubSignIn}>
                  <FaGithub size={35} />
                </button>
              </button>
            </div>
          </div>

          <div className="mt-3 text-center">
            <p>
              Already Have an Account?{" "}
              <a
                href="/login"
                className="text-[#06b6d4] hover:underline hover:text-blue-700"
              >
                Sign in
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
