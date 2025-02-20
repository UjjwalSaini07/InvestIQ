import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "../../@/ui/card";
import { Button } from "../../@/ui/button";
import { Input } from "../../@/ui/input";
import { Label } from "../../@/ui/label";
import Logo from "../../assets/Logo.png";

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
              className="fixed top-8 left-5 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-blue-700 hover:bg-blue-500 text-[#06b6d4] hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={16} />
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="fixed top-12 left-1/2 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-blue-700 hover:bg-blue-500 text-[#06b6d4] hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          <div className="flex justify-center mb-2 sm:mt-4 -mt-30">
            <div className="w-21 h-21 rounded-full overflow-hidden">
              <img
                src={Logo}
                alt="InvestIQ Logo"
                className="w-[120px] h-[120px] object-cover hidden md:block"
              />
            </div>
          </div>

          {step === 1 && (
            <>
              <h2 className="text-2xl font-bold text-white mb-7">
                Forgot Password
              </h2>
              <p className="text-[#fff] mb-8">
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
                    className={`border px-5 bg-black w-full rounded-xl focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-black"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm text-left px-3 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className={`w-full p-2 rounded-full text-white text-sm transition hover:bg-[#06b6d4] ${
                    isValid
                      ? "bg-[#06b6d4] hover:bg-blue-700"
                      : "bg-gray-300 text-grey-700 cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                >
                  Continue
                </Button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold text-white mb-5">
                Verification Code
              </h2>
              <p className="text-[#fff] mb-6">
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
                    className="w-10 h-10 border rounded-xl bg-black text-center text-lg focus:outline-none focus:ring-2 focus:ring-black"
                    maxLength={1}
                  />
                ))}
              </div>
              <Button
                onClick={handleOtpSubmit}
                className="w-full p-2 rounded-full bg-[#06b6d4] text-white text-sm transition hover:bg-[#06b6d4]"
              >
                Continue
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold text-white mb-4 sm:text-center text-left">
                Set a New Password
              </h2>

              <p className="text-[#fff] mb-6">
                Create a new password. Ensure it differs from previous ones for
                security.
              </p>
              <div className="space-y-4">
                <div className="relative sm:w-80 mb-6">
                  <Label
                    htmlFor="old-password"
                    className={`absolute left-4 transition-all ${
                      isFocusedsec || watch("oldPassword")
                        ? "-top-3 left-4 text-sm font-medium text-[#fff] bg-black px-1"
                        : "top-3 text-[#fff]"
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
                    className={`border p-4 px-5 bg-black w-full rounded-xl focus:outline-none focus:ring-2 ${
                      errors.oldPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-black"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute right-3 top-2 text-white focus:outline-none"
                  >
                    {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.oldPassword && (
                    <p className="text-red-500 text-sm text-left px-3 mt-1">
                      {errors.oldPassword.message}
                    </p>
                  )}
                </div>

                <div className="relative sm:w-80 mb-6">
                  <Label
                    htmlFor="new-password"
                    className={`absolute left-4 transition-all ${
                      isFocusedthir || watch("newPassword")
                        ? "-top-3 left-4 text-sm font-medium text-[#fff] bg-black px-1"
                        : "top-3 text-[#fff]"
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
                    className={`border p-4 px-5 bg-black w-full rounded-xl focus:outline-none focus:ring-2 ${
                      errors.newPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-black"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-2 text-white focus:outline-none"
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
              <Button
                onClick={handleFinalSubmit}
                className="w-full mt-10 p-2 rounded-full bg-[#06b6d4] text-white text-sm transition hover:bg-[#06b6d4]"
              >
                Password Reset
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPage;
