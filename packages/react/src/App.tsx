import trpc from "./utils/trpc";

const App = () => {
  const exampleRequest = trpc.example.useQuery(undefined, {
    enabled: false,
  });
  const requestWithArgs = trpc.exampleWithArgs.useMutation({});

  const onClick = async () => {
    const { data } = await exampleRequest.refetch();
    const { info } = await requestWithArgs.mutateAsync({ message: "hello" });
    alert(data?.info);
    alert(info);
  };

  return (
    <main>
      <div className="p-6">
        <h1 className="text-2xl text-white font-medium mb-4 border-b border-zinc-800 pb-4">
          tRPC tailwind react typescript template Vite
        </h1>
        <button
          onClick={onClick}
          className="h-10 mb-4 block rounded-full px-6 text-white bg-blue-600 hover:bg-blue-700 transition-colors ease-in-out duration-200"
        >
          click me
        </button>
      </div>
    </main>
  );
};

export default App;
