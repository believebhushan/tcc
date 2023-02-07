// import { createContext} from "react";
// // import { supabase } from "../dbclient/supabseClient";

// const ValidUserContext = createContext({
//   isLoggedIn: false,
//   session:null,
// });




// // export const ValidUserContextProvider = (props) => {
// //   const [session, setSession] = useState(null)
// //    useEffect(() => {
// //     supabase.auth.getSession().then(({ data: { session } }) => {
// //       setSession(session)
// //     })

// //     supabase.auth.onAuthStateChange((_event, session) => {
// //       setSession(session)
// //     })
// //   }, [])

// //   const setData=(isLoggedIn,session)=>{
// //     setSession(session)
  
// //   }

// //   const context = {
// //     isLoggedIn: session.expires_at > (new  Date()).getTime(),
// //     session,
// //     setData
// //   };

// //   return (
// //     <ValidUserContext.Provider value={context}>
// //       {props.children}
// //     </ValidUserContext.Provider>
// //   );
// // };

// export default ValidUserContext;
