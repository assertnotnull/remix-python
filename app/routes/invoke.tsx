import { Links, Meta, Scripts, useRouteError } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useSocket } from "~/context";

export default function Index() {
  const socket = useSocket();
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("receive-python", (message: string) => {
      data.push(message);
      setData([...data]);
    });

    socket.emit("python-script", "getData");
    return () => {
      socket.close();
    };
  }, [socket, data]);

  return (
    <div className="font-sans p-4">
      {data ? <h1>Invoke python: {data}</h1> : null}
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
