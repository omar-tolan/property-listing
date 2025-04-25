import { ServerIcon } from "lucide-react";
export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-row">
        <ServerIcon size={50} color="#ffffff" />
        <div className="flex flex-col ml-4">
          <h1 className="text-3xl font-bold text-white">Server Error</h1>
          <p className="text-lg text-white">
            Something went wrong on the server.
          </p>
        </div>
      </div>
    </div>
  );
}
