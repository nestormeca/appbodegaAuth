import { Children, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

const [user, setUser] = useState(null);

const UserProvider = ({ children }) => {
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <UserContext.Provider value={{ loginWithGoogle, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
