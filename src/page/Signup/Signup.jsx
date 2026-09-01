import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    setShowError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      form.fullname.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password.trim() !== "" &&
      form.confirmPassword.trim() !== "";

    if (!isFormValid) {
      setShowError(true);
      return;
    }

    // Create account
  };

  return (
    <div className="signup-page">
      <div className="signup-page-content w-full max-w-[385px] rounded-xl border border-[#303030] bg-[#171717] p-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="!mb-0 !text-[16px] !font-semibold !text-white">
            Create an account
          </h1>

          <p className="!text-[14px] !text-[#a1a1a1]">
            Enter your information below to create your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-6"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="mb-2 block text-[14px] font-semibold text-white"
            >
              Full Name
            </label>

            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              value={form.fullname}
              onChange={handleChange}
              className={`!h-9 !w-full !rounded-lg !border !bg-[#202020] !px-3 !text-[14px] !text-white !outline-none placeholder:!text-[#999] focus:!ring-2 ${
                showError && !form.fullname.trim()
                  ? "!border-yellow-500 focus:!border-yellow-500 focus:!ring-yellow-500"
                  : "!border-[#454545] focus:!border-[#666] focus:!ring-[#555]"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[14px] font-semibold text-white"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={form.email}
              onChange={handleChange}
              className={`!h-9 !w-full !rounded-lg !border !bg-[#202020] !px-3 !text-[14px] !text-white !outline-none placeholder:!text-[#999] focus:!ring-2 ${
                showError && !form.email.trim()
                  ? "!border-yellow-500 focus:!border-yellow-500 focus:!ring-yellow-500"
                  : "!border-[#454545] focus:!border-[#666] focus:!ring-[#555]"
              }`}
            />

            <p className="mt-2 !text-[13px] !leading-5 !text-[#a1a1a1]">
              We'll use this to contact you. We will not share your <br />
              email with anyone else.
            </p>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-[14px] font-semibold text-white"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className={`!h-9 !w-full !rounded-lg !border !bg-[#202020] !px-3 !text-[14px] !text-white !outline-none focus:!ring-2 ${
                showError && !form.password.trim()
                  ? "!border-yellow-500 focus:!border-yellow-500 focus:!ring-yellow-500"
                  : "!border-[#454545] focus:!border-[#777] focus:!ring-[#555]"
              }`}
            />

            <p className="mt-2 !text-[13px] !text-[#a1a1a1]">
              Must be at least 8 characters long.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-[14px] font-semibold text-white"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`!h-9 !w-full !rounded-lg !border !bg-[#202020] !px-3 !text-[14px] !text-white !outline-none focus:!ring-2 ${
                showError && !form.confirmPassword.trim()
                  ? "!border-yellow-500 focus:!border-yellow-500 focus:!ring-yellow-500"
                  : "!border-[#454545] focus:!border-[#666] focus:!ring-[#555]"
              }`}
            />

            <p className="mt-2 !text-[13px] !text-[#a1a1a1]">
              Please confirm your password.
            </p>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-3 py-2">
              <span className="text-[16px]">⚠️</span>

              <p className="!m-0 !text-[13px] !text-yellow-400">
                Please fill in all fields above.
              </p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="!h-9 !w-full !rounded-lg !border-0 !bg-white !text-[14px] !font-medium !text-black transition hover:!bg-[#e5e5e5] active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
