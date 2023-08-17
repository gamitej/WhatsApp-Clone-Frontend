import { Suspense } from "react";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./store/auth/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} limit={1} />
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
   items-center text-white text-xl"
    >
      Loading...
    </div>
  );
};

export default App;
