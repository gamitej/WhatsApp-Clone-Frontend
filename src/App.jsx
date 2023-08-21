import { Suspense } from "react";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./store/auth/useAuth";
import { useGlobal } from "./store/global/useGlobal";

function App() {
  const { isLoggedIn } = useAuth();
  // const { socket } = useGlobal();

  // console.log(socket);

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
      className="h-[100vh] w-full flex justify-center
   items-center text-white text-xl"
    >
      <img src="/public/assets/loading.gif" alt="" width={70} height={70} />
    </div>
  );
};

export default App;
