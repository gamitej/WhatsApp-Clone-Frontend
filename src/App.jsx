import { Suspense } from "react";
import Router from "./routes/Router";

function App() {
  const isLoggedIn = true;

  return (
    <div>
      {/* Navbar */}
      <Suspense fallback={<Loading />}>
        <Router isLoggedIn={isLoggedIn} />
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className="h-[90vh] w-full flex justify-center
   items-center"
    >
      Loading...
    </div>
  );
};

export default App;
