import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../../@/ui/card";
import { Button } from "../../@/ui/button";
import { Input } from "../../@/ui/input";
import { verifyOtp } from "../utils/authSlice";
import Logo from "../../assets/Logo.png";

const OtpVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userEmail, loading } = useSelector((state) => state.auth);
  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

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

  const handleOtpSubmit = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    await dispatch(verifyOtp(enteredOtp)).unwrap();
    navigate("/signin");
  };

  const handleBack = () => {
    window.history.back();
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
        <CardContent className="flex flex-col items-center md:items-center text-center md:text-center">
          {isMobile ? (
            <button
              onClick={handleBack}
              className="fixed top-8 left-5 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-blue-700 hover:bg-blue-500 text-[#06b6d4] hover:text-white transition-all z-50"
              aria-label="Go back"
            >
              <ArrowLeft size={15} />
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="fixed top-12 left-1/2 ml-4 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-blue-700 hover:bg-blue-500 text-[#06b6d4] hover:text-white transition-all z-50"
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
          <>
            <h2 className="text-2xl font-bold text-white mb-5 md:text-center text-left">
              Verification Code
            </h2>
            <p className="text-[#fff] mb-6 md:text-center text-left">
              We have sent the verification code to your email address.
            </p>
            <div className="flex gap-2 mb-8">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  disabled={loading}
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
              {loading ? "Verifying..." : "Continue"}
            </Button>
          </>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtpVerification;
