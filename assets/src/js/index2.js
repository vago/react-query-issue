import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const App2 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example2 />
    </QueryClientProvider>
  );
};

function Example2() {
  const { isLoading, error, data, isFetching } = useQuery("repoData2", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>React Query App 2</h1>
      <p>{data.description}</p>
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

ReactDOM.render(<App2 />, document.getElementById("app2"));
