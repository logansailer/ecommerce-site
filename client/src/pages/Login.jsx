import { googleDark } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addUser, removeUser } from "../redux/worldSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const userInfo = useSelector((state) => state.world.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
        toast.success("sign in successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("sign out was successful");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignInDisplay = () => {
    return userInfo ? (
      <button
        onClick={handleSignOut}
        className="bg-black text-white text-sm py-3 px-8 tracking-wide 
        rounded-md hover:bg-[#006937] duration-300"
      >
        sign out
      </button>
    ) : (
      <div
        onClick={handleGoogleLogin}
        className="w-60 h-12 tracking-wide border-[1px] border-gray-400 
        rounded-md flex items-center justify-center gap-2 
        hover:border-[#006937] cursor-pointer duration-300"
      >
        <img className="w-8" src={googleDark} alt="googleLogo" />
        <span className="text-sm text-gray-800">sign in with google</span>
      </div>
    );
  };

  return (
    <div className="w-full h-[calc(100vh-263px)] flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <SignInDisplay />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default Login;
