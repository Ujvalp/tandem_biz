import { useAuth } from './src/context/AuthProvider';
import { Preferences } from '@capacitor/preferences';

const {auth} = useAuth();

// When the user logs in, store the access token and refresh token
auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    Preferences.set({
      key: 'accessToken',
      value: session.access_token,
    });
    Preferences.set({
      key: 'refreshToken',
      value: session.refresh_token,
    });
  }
});

// When the app starts, check if the access token is still valid
const { value: accessToken } = await Preferences.get({ key: 'accessToken' });
if (accessToken) {
  const { data, error } = await supabase.auth.api.getUser(accessToken);
  if (!error) {
    auth.setUser(data);
  } else {
    // If the access token has expired, use the refresh token to obtain a new one
    const { value: refreshToken } = await Preferences.get({
      key: 'refreshToken',
    });
    const { error } = await supabase.auth.api.refreshAccessToken(refreshToken);
    if (!error) {
      const newAccessToken = supabase.auth.session().access_token;
      await Preferences.set({
        key: 'accessToken',
        value: newAccessToken,
      });
      const { data } = await supabase.auth.api.getUser(newAccessToken);
      auth.setUser(data);
    } else {
      // If the refresh token is also invalid, the user needs to log in again
      auth.signOut();
    }
  }
}