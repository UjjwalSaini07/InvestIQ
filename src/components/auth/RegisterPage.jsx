import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../../@/ui/card";
import { Button } from "../../@/ui/button";
import { Input } from "../../@/ui/input";
import { Label } from "../../@/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signupUser } from "../utils/authSlice";

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
    window.history.back();
  };

  const handleSubmitNext = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/verifyotp");
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
          {isMobile ? (
            <button
              onClick={handleBack}
              className="fixed top-8 left-5 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={25} />
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="absolute top-12 left-1/2 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-purple-500 hover:border-[#5A3CBF] text-purple-500 hover:bg-[#5A3CBF] hover:text-white"
              aria-label="Go back"
            >
              <ArrowLeft size={30} />
            </button>
          )}

          <div className="flex justify-center mb-4 sm:mt-4 -mt-30">
            <div className="w-21 h-21 rounded-full overflow-hidden">
              <img
                src={"logo.png"}
                alt="Profile"
                className="w-[100px] h-[100px] object-cover hidden md:block"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-7">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="relative">
              <Label
                htmlFor="name"
                className={`absolute left-4 transition-all ${
                  isFocusedfir || watch("name")
                    ? "-top-3 left-4 text-sm font-medium text-[#868686] bg-white px-1"
                    : "top-2 text-[#868686]"
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
                className={`border px-5 w-full rounded-xl focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-purple-500"
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
                    ? "-top-3 left-4 text-sm font-medium text-[#868686] bg-white px-1"
                    : "top-2 text-[#868686]"
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
                className={`border px-5 w-full rounded-xl focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-purple-500"
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
                    ? "-top-3 left-4 text-sm font-medium text-[#868686] bg-white px-1"
                    : "top-2 text-[#868686]"
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
                className={`border px-5 w-full rounded-xl focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-purple-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500 focus:outline-none"
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
              className="w-full p-2 rounded-full text-white hover:bg-[#5A3CBF] bg-purple-700"
              disabled={loading || disableButton}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>

          <div className="w-full flex flex-col items-center justify-center gap-6">
            <p className="text-gray-600 mt-4">OR SIGN UP WITH</p>
            <div className="flex gap-5">
              <button
                className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Sign in with Google"
              >
                <FcGoogle size={35} />
              </button>
              <button
                className="cursor-pointer flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Sign in with GitHub"
              >
                <FaGithub size={35} />
              </button>
            </div>
          </div>

          <div className="mt-3 text-center">
            <p>
              Already Have an Account?{" "}
              <a
                href="/login"
                className="text-purple-600 hover:underline hover:text-[#5A3CBF]"
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
