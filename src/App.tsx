import mobileIllustration from "/images/illustration-sign-up-mobile.svg";

import { clsx } from "clsx";

import successIcon from "/images/icon-success.svg";
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (isValidEmail(email)) {
      setMessage(!message);
    } else {
      setError(true);
    }
  };

  const handleClick = () => {
    setMessage(!message);
    setEmail("");
  };
  return (
    <main>
      {!message ? (
        <>
          <img
            className="h-max w-full"
            src={mobileIllustration}
            alt="Mobile Illustration"
          />
          <section className="font-roboto flex flex-col gap-5 px-5 pb-6 pt-10 antialiased">
            <h1 className="text-[2.5rem] font-bold text-darkSlateGrey">
              Stay updated!
            </h1>
            <p className="text-charcoalGrey">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="space-y-3 text-charcoalGrey">
              <li className="flex gap-4">
                <img
                  className="h-6 w-max"
                  src={successIcon}
                  alt="Success Icon"
                />
                Product discovery and building what matters
              </li>
              <li className="flex gap-4">
                <img
                  className="h-6 w-max"
                  src={successIcon}
                  alt="Success Icon"
                />
                Measuring to ensure updates are a success
              </li>
              <li className="flex gap-4">
                <img
                  className="h-6 w-max"
                  src={successIcon}
                  alt="Success Icon"
                />
                And much more!
              </li>
            </ul>
            <form onSubmit={handleInput} className="mt-6 flex flex-col">
              <div className="flex w-full justify-between">
                <label
                  className="mb-3 text-sm font-bold text-darkSlateGrey"
                  htmlFor="email"
                >
                  Email address
                </label>
                {error && (
                  <p className="text-sm font-bold text-tomato">
                    Valid email required
                  </p>
                )}
              </div>
              <input
                onChange={handleEmail}
                className={clsx("w-full rounded-lg border-2 p-5", {
                  "border-tomato bg-tomato/20 text-tomato placeholder:text-tomato":
                    error,
                })}
                name="email"
                placeholder="email@company.com"
                type="text"
              />
              <button
                className="font-roboto mt-7 w-full rounded-lg bg-darkSlateGrey py-5 text-sm font-bold text-white"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </section>
        </>
      ) : (
        <section className="font-roboto flex h-svh flex-col px-5 py-10">
          <section className="flex size-full flex-col justify-center gap-8">
            <img className="h-16 w-max" src={successIcon} alt="success" />
            <h1 className="text-[2.5rem] font-bold leading-none text-darkSlateGrey">
              Thanks for subscribing!
            </h1>
            <p className="text-charcoalGrey">
              A confirmation email has been sent to{" "}
              <span className="font-bold text-darkSlateGrey">{email}</span>.
              Please open it and click the button inside to confirm your
              subscription
            </p>
          </section>
          <button
            onClick={handleClick}
            className="font-roboto mt-7 w-full rounded-lg bg-darkSlateGrey py-5 text-sm font-bold text-white"
          >
            Dismiss message
          </button>
        </section>
      )}
    </main>
  );
};

export default App;
