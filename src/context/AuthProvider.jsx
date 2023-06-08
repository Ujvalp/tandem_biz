import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/business";
import { Preferences } from '@capacitor/preferences';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email, password) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const passwordReset = (email) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/reset"
  });

const updatePassword = (updatedPassword) =>
  supabase.auth.updateUser({ password: updatedPassword });

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [session ,setSession]=useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setSession(data.session)
      setAuth(currentUser ? true : false);
      setLoading(false);
    };
    getUser();
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setAuth(false);
      } else if (event === "SIGNED_IN") {
        setUser(session.user);
        setSession(null)
        setAuth(true);
        Preferences.set({
          key: 'accessToken',
          value: session.access_token,
        });
        Preferences.set({
          key: 'refreshToken',
          value: session.refresh_token,
        });

      } else if (event === "SIGNED_OUT") {
        setAuth(false);
        setUser(null);
        setSession(null)
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  
// useEffect( () => {
//   newfn();

//   async function newfn () {
//     const { value: accessToken } = await Preferences.get({ key: 'accessToken' });
//     if (accessToken) {
//       const { user } = await supabase.auth.getUser(accessToken);
//       if (user) {
//         supabase.auth.setAuth(accessToken);
//       } else {
//         // If the access token has expired, use the refresh token to obtain a new one
//         const { value: refreshToken } = await Preferences.get({ key: 'refreshToken' });
//         const { error } = await await supabase.auth.refreshSession(refreshToken);
//         if (!error) {
//           const newAccessToken = await supabase.auth.session().access_token;
//           await Preferences.set({ key: 'accessToken', value: newAccessToken });
//           const { data } = await supabase.auth.getUser(newAccessToken);
//           supabase.auth.setAuth(newAccessToken);
//         } else {
//           // If the refresh token is also invalid, the user needs to log in again
//           supabase.auth.signOut();
//         }
//       }
//     }
//   }
// },[])



  return (
    <AuthContext.Provider
      value={{
        session,
        auth,
        user,
        login,
        signOut,
        passwordReset,
        updatePassword
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
