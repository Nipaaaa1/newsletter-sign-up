import mobileIllustration from "/images/illustration-sign-up-mobile.svg";

import successIcon from "/images/icon-success.svg";

const App = () => {
  return (
    <main>
      <img
        className="h-max w-full"
        src={mobileIllustration}
        alt="Mobile Illustration"
      />
      <section className="font-roboto flex flex-col gap-5 px-5 pb-6 pt-10 text-darkSlateGrey antialiased">
        <h1 className="text-[2.5rem] font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="space-y-3">
          <li className="flex gap-4">
            <img className="h-6 w-max" src={successIcon} alt="Success Icon" />
            Product discovery and building what matters
          </li>
          <li className="flex gap-4">
            <img className="h-6 w-max" src={successIcon} alt="Success Icon" />
            Measuring to ensure updates are a success
          </li>
          <li className="flex gap-4">
            <img className="h-6 w-max" src={successIcon} alt="Success Icon" />
            And much more!
          </li>
        </ul>
      </section>
      <form action="/" className="flex flex-col p-5">
        <label
          className="mb-3 text-sm font-bold text-darkSlateGrey"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="w-full rounded-lg border-2 p-5"
          name="email"
          placeholder="email@company.com"
          type="email"
        />
        <button
          className="font-roboto mt-7 w-full rounded-lg bg-darkSlateGrey py-5 text-sm font-bold text-white"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </main>
  );
};

export default App;
