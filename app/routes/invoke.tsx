import {
  Await,
  Links,
  Meta,
  Scripts,
  defer,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { PythonShell } from "python-shell";
import { Suspense, useEffect, useState } from "react";
import { useSocket } from "~/context";

export const loader = async () => {
  const result = PythonShell.run("./scripts/src/scripts/__init__.py");
  return defer({ output: result });
};

export default function Index() {
  const { output } = useLoaderData<typeof loader>();
  // const socket = useSocket();
  const [data, setData] = useState<string[]>([]);

  // useEffect(() => {
  //   if (!socket) return;

  //   socket.on("event", (data) => {
  //     console.log(data);
  //   });

  //   socket.emit("event", "getData");
  // }, [socket]);

  return (
    <div className="font-sans p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={output}>
          {(output) => <h1>Invoke python: {output}</h1>}
        </Await>
      </Suspense>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Sorry there was an error</h1>
        <Scripts />
      </body>
    </html>
  );
}
