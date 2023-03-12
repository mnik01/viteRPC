import trpc from "./utils/trpc";

const App = () => {
  const { isLoading } = trpc.example.useQuery();

  return (
    <main className="w-screen h-screen flex-col justify-center flex items-center">
      <a href="https://github.com/mnik01/viteRPC">
        <svg
          width="94"
          height="94"
          viewBox="0 0 32 32"
          className="hover:scale-110 transition-all"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9007 4.19761L16.8082 30.5894C16.5172 31.1343 15.7697 31.1375 15.4744 30.5953L1.1025 4.20006C0.780704 3.60924 1.26317 2.89347 1.90254 3.01326L16.0102 5.65405C16.1002 5.6709 16.1923 5.67073 16.2823 5.65356L30.0948 3.01694C30.7321 2.89531 31.2168 3.60556 30.9007 4.19761Z"
            fill="url(#paint0_linear_1_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_5"
              x1="-23.84"
              y1="217.256"
              x2="1588.32"
              y2="2307.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#58A7FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <h1 className="text-2xl mt-4 font-bold mb-4 border-b pb-4">viteRPC</h1>
      <p>Vite + tRPC + TailwindCSS template</p>
      <p
        className={`mt-2 text-sm ${
          isLoading ? "text-orange-400" : "text-green-600"
        } first-letter:capitalize`}
      >
        {isLoading ? "loading tRPC query..." : "hello from tRPC procedure!"}
      </p>
      <a href="https://github.com/mnik01/viteRPC">
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          data-view-component="true"
          className="absolute right-4 bottom-4 hover:scale-110 transition-all"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </a>
    </main>
  );
};

export default App;
