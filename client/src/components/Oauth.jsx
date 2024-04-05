import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess, signinFailure } from "../redux/user/userSlice";

export default function Oauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resFromGoogle = await signInWithPopup(auth, provider);
      console.log(resFromGoogle);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resFromGoogle.user.displayName,
          email: resFromGoogle.user.email,
          googlePhotoUrl: resFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) dispatch(signinSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signinFailure(error));
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Sign In with Google
    </Button>
  );
}
