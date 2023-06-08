// import { supabase } from "../supabase/business";


// const auth = new SupabaseAuth(supabaseClient);

// // When the user logs in, store the access token and refresh token
// auth.onAuthStateChange((event, session) => {
//   if (event === 'SIGNED_IN') {
//     Preferences.set({
//       key: 'accessToken',
//       value: session.access_token,
//     });
//     Preferences.set({
//       key: 'refreshToken',
//       value: session.refresh_token,
//     });
//   }
// });

// // When the app starts, check if the access token is still valid
// const { value: accessToken } = await Preferences.get({ key: 'accessToken' });
// if (accessToken) {
  
//   const { data: { user } } = await supabase.auth.getUser(accessToken);
//   if (!error) {
//     supabase.setUser(data);
//   } else {
//     // If the access token has expired, use the refresh token to obtain a new one
//     const { value: refreshToken } = await Preferences.get({
//       key: 'refreshToken',
//     });
//     const { error } = await supabase.auth.refreshAccessToken(refreshToken);
//     if (!error) {
//       const newAccessToken = await supabase.auth.getSession().access_token;
//       await Preferences.set({
//         key: 'accessToken',
//         value: newAccessToken,
//       });
//       const { data } = await supabase.auth.getUser(newAccessToken);
//       supabase.setUser(data);
//     } else {
//       // If the refresh token is also invalid, the user needs to log in again
//       supabase.auth.signOut();
//     }
//   }
// }