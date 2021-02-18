import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const App1 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData1", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>React Query App 1</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

ReactDOM.render(<App1 />, document.getElementById("app1"));
