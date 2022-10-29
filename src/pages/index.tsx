import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { trpc } from "../client/trpc";

const queryClient = new QueryClient();

export default function AppRoot() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">proxied api</Link>
              </li>
              <li>
                <Link to="/v2">v2</Link>
              </li>
              <li>
                <Link to="/trpc">trpc</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/trpc" element={<TRPC />} />
            <Route path="/v2" element={<V2 />} />
            <Route path="/" element={<ProxiedApi />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

function ProxiedApi() {
  const { data } = useQuery(["repoData"], () =>
    fetch("/api/v1/a/b/c/gsdf/sdfg/sdfh/sdfh/sdf/hs/dfhsdfhs/asdf/d").then((res) => res.json())
  );

  return (
    <div>
      <h2>api v1</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function V2() {
  const { data } = useQuery(["v2"], () =>
    fetch("/api/v2/hello").then((res) => res.json())
  );

  return (
    <div>
      <h2>api v2</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

function TRPC() {
  const { data } = useQuery(["trpc"], () => trpc.healthcheck.query());
  return (
    <div>
      <h2>trpc</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
