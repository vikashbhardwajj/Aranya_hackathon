import { useForm } from "react-hook-form";
import PageWrapper from "../components/PageWrapper";
import "../styles/Login.scss";
import vid1 from "../assets/videos/bg2.mp4";
import WavyText from "../components/WavyText";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const parentRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("No user found. Please register first.");
      navigate("/register");
      reset();
      return;
    }

    if (data.email === user.email && data.password === user.password) {
      toast.success("Login successful! Welcome back to Aranya 🌱");
      navigate("/products");
      reset();
      return;
    } else {
      toast.error("Invalid email or password. Please try again.");
      reset();
      return;
    }
  };

  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();

  return (
    <>
      <Helmet>
        <title>Join Aranya – Sign In or Register</title>
        <meta
          name="description"
          content="Begin your mindful journey with Aranya. Sign in or create an account to access nature-inspired experiences."
        />
        <meta
          name="keywords"
          content="Aranya login, register, join Aranya, eco membership, nature community"
        />
        <meta name="robots" content="noindex, nofollow" />

        <meta property="og:title" content="Join Aranya – A Nature Community" />
        <meta
          property="og:description"
          content="Access Aranya’s soulful experiences and be part of our nature-loving family."
        />
        <meta
          property="og:image"
          content="https://aranya-five.vercel.app/login-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://aranya-five.vercel.app/login"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login or Register – Aranya" />
        <meta
          name="twitter:description"
          content="Step into a world rooted in reverence for Earth."
        />
        <meta
          name="twitter:image"
          content="https://aranya-five.vercel.app/login-cover.jpg"
        />
      </Helmet>

      <PageWrapper className="login">
        <div className="topp flex justify-between">
          <h1 className="mb-2 text-[60px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
            Login
          </h1>
          <Link
            to={"/register"}
            className="regs mb-2 cursor-pointer self-end text-xl underline md:mb-7 md:text-[2rem] lg:text-[4rem] lg:-tracking-[5px]"
          >
            register
          </Link>
        </div>
        <div className="login_wrapper flex h-full w-full flex-col gap-5 md:flex-row md:p-0 lg:gap-20 lg:p-[3rem]">
          <div className="login_left flex w-full gap-0 rounded-lg p-[1rem] shadow-md md:w-1/2 md:gap-[1rem]">
            <div className="circu h-[200px] w-[200px] shadow-md sm:h-[400px] sm:w-[400px] md:h-[220px] md:w-[220px] lg:h-[500px] lg:w-[500px]"></div>
            <div className="login_left_left flex h-full w-1/2 flex-col justify-between rounded-md p-[1rem] shadow-md md:p-[2rem]">
              <div className="top">
                <h1 className="text-5xl font-semibold md:text-4xl lg:text-9xl">
                  {month}
                </h1>
                <h1 className="text-4xl font-semibold opacity-50 md:text-3xl lg:text-8xl">
                  {year}
                </h1>
              </div>
              <div className="bottom">
                <h1 className="text-lg leading-none font-bold tracking-wider uppercase opacity-70 lg:text-xl">
                  Aranya
                </h1>
                <h1 className="text-lg leading-none font-bold tracking-wider uppercase opacity-70 lg:text-xl">
                  Community
                </h1>
              </div>
            </div>
            <div className="login_left_right w-1/2">
              <h1 className="w-[85%] py-2 text-end text-sm leading-none font-bold tracking-wider uppercase opacity-70 sm:text-base md:py-0 lg:text-xl">
                Become part of something grounded in reverence. We’re not
                building a business, we’re growing a living story — and every
                soul adds to its strength.
              </h1>
              <button>
                <WavyText
                  text="Smile Plz 🙂"
                  className="text-sm leading-none font-semibold opacity-60 sm:text-lg"
                />
              </button>
            </div>
          </div>

          <div
            ref={parentRef}
            className="login_right relative w-full overflow-hidden shadow-md md:w-1/2"
          >
            <video
              className="absolute top-0 left-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={vid1}
            ></video>

            <motion.div
              drag
              dragConstraints={parentRef}
              dragElastic={0.7}
              className="form_section relative w-full max-w-md rounded-xl p-8 shadow-md"
            >
              <i className="ri-menu-3-line absolute top-2 right-1 cursor-pointer text-3xl"></i>
              <h1 className="mb-4 text-start text-3xl font-semibold">
                Welcome Back, Wanderer
              </h1>
              <p className="mb-3 text-start text-lg font-semibold opacity-70">
                Continue your journey where leaves remember your name.
              </p>
              <p className="mb-6 text-start text-lg font-semibold opacity-70">
                Log in to access your path, your purpose, your place in Aranya.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`mt-1 block w-full border-b ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } p-2 focus:border-green-500 focus:outline-none`}
                  />
                  {errors.email && (
                    <h4 className="text-sm text-red-500">
                      {errors.email.message}
                    </h4>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter a password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                    className={`mt-1 block w-full border-b ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } p-2 focus:border-green-500 focus:outline-none`}
                  />
                  {errors.password && (
                    <h4 className="text-sm text-red-500">
                      {errors.password.message}
                    </h4>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md border-none px-4 py-3 font-semibold"
                >
                  <WavyText
                    text="Log In & Bloom 🌱"
                    className="text-sm leading-none font-semibold opacity-60 sm:text-lg"
                  />
                </button>

                <Link
                  to="/register"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Don't have an account? Register here
                </Link>
              </form>

              <p className="mt-6 text-start text-sm text-gray-400">
                By joining Aranya, you align with nature’s eternal generosity.
              </p>
            </motion.div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Login;
