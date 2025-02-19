import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "../../@/ui/card";
import { Button } from "../../@/ui/button";
import { Input } from "../../@/ui/input";
import { Label } from "../../@/ui/label";

const ForgotPage = () => {
  const navigate = useNavigate();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedsec, setIsFocusedsec] = useState(false);
  const [isFocusedthir, setIsFocusedthir] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });

  const handleEmailSubmit = (data) => {
    console.log("Email Submitted:", data);
    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyPress = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
  };

  const handleOtpSubmit = () => {
    console.log("OTP Submitted:", otp.join(""));
    setStep(3);
  };

  const handleFinalSubmit = () => {
    console.log("Final Submission Complete");
    navigate("/login");
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      window.history.back();
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
    <div className="flex items-center justify-center px-4">
      <Card className="w-full max-w-md relative">
        <CardContent className="flex flex-col items-center sm:text-center">
          {isMobile ? (
            <button
              onClick={handleBack}
              className="fixed top-8 left-5 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={25} />
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="fixed top-12 left-1/2 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-purple-500 hover:border-[#5A3CBF] text-purple-500 hover:bg-[#5A3CBF] hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={30} />
            </button>
          )}
          <img
            src={"logo.png"}
            alt="Logo"
            className="w-[100px] h-[100px] mb-6 hidden md:block"
          />

          {step === 1 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-7">
                Forgot Password
              </h2>
              <p className="text-[#868686] mb-12">
                Please enter your Email ID to reset the password.
              </p>
              <form
                onSubmit={handleSubmit(handleEmailSubmit)}
                className="space-y-6 w-full"
              >
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
                    <p className="text-red-500 text-sm text-left px-3 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full p-2 rounded-full text-white transition ${
                    isValid
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                >
                  Continue
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Verification Code
              </h2>
              <p className="text-[#868686] mb-6">
                Enter the 6 digit code that is mentioned in the email to reset
                your password.
              </p>
              <div className="flex gap-2 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && index === otp.length - 1) {
                        e.preventDefault();
                        handleOtpSubmit();
                      } else if (
                        e.key === "Backspace" &&
                        !otp[index] &&
                        index > 0
                      ) {
                        document.getElementById(`otp-${index - 1}`).focus();
                      }
                    }}
                    className="w-10 h-10 border rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    maxLength={1}
                  />
                ))}
              </div>
              <button
                onClick={handleOtpSubmit}
                className="w-full p-2 rounded-full bg-purple-600 text-white transition hover:bg-[#5A3CBF]"
              >
                Continue
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-5 sm:text-center text-left">
                Set a New Password
              </h2>

              <p className="text-[#868686] mb-6">
                Create a new password. Ensure it differs from previous ones for
                security.
              </p>
              <div className="space-y-4">
                <div className="relative sm:w-90 mb-6">
                  <Label
                    htmlFor="old-password"
                    className={`absolute left-4 transition-all ${
                      isFocusedsec || watch("oldPassword")
                        ? "-top-3 left-4 text-sm font-medium text-[#868686] bg-white px-1"
                        : "top-2 text-[#868686]"
                    }`}
                  >
                    Old Password
                  </Label>
                  <Input
                    id="old-password"
                    type={showOldPassword ? "text" : "password"}
                    {...register("oldPassword", {
                      required: "Old password is required",
                    })}
                    onFocus={() => setIsFocusedsec(true)}
                    onBlur={() => setIsFocusedsec(!!watch("password"))}
                    className={`border p-4 px-5 w-full rounded-xl focus:outline-none focus:ring-2 ${
                      errors.oldPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-purple-500"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-2 text-gray-500 focus:outline-none"
                  >
                    {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.oldPassword && (
                    <p className="text-red-500 text-sm text-left px-3 mt-1">
                      {errors.oldPassword.message}
                    </p>
                  )}
                </div>

                <div className="relative sm:w-90 mb-6">
                  <Label
                    htmlFor="new-password"
                    className={`absolute left-4 transition-all ${
                      isFocusedthir || watch("newPassword")
                        ? "-top-3 left-4 text-sm font-medium text-[#868686] bg-white px-1"
                        : "top-2 text-[#868686]"
                    }`}
                  >
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    onFocus={() => setIsFocusedthir(true)}
                    onBlur={() => setIsFocusedthir(!!watch("password"))}
                    className={`border p-4 px-5 w-full rounded-xl focus:outline-none focus:ring-2 ${
                      errors.newPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-purple-500"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-2 text-gray-500 focus:outline-none"
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.newPassword && (
                    <p className="text-red-500 text-sm text-left px-3 mt-1">
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleFinalSubmit}
                className="w-full mt-10 p-2 rounded-full bg-purple-600 hover:text-[#5A3CBF] text-white transition"
              >
                Password Reset
              </button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPage;
