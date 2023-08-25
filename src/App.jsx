import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Router from "@/routes/Router";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// services
import { getProfilePicture } from "@/services/ApiServices";

function App() {
  const { isLoggedIn, userInfo } = useAuth();
  const { setProfileImageUrl } = useGlobal();

  const getProfilePic = async () => {
    try {
      const profilePic = await getProfilePicture(userInfo.userId);
      setProfileImageUrl(profilePic.imgUrl);
    } catch (error) {}
  };

  useEffect(() => {
    getProfilePic();
  }, []);

  /**
   * JSX
   */
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

// =========== LOADING-COMP ==============

const Loading = () => {
  return (
    <div
      className="h-[100vh] w-full flex justify-center
   items-center text-white text-xl"
    >
      <img src="/assets/loading.gif" alt="" width={70} height={70} />
    </div>
  );
};

export default App;
