// routes
import React,{  useEffect,useState} from 'react';
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { supabase } from './dbclient/supabseClient';
import { Context } from './Context';



// ----------------------------------------------------------------------

export default function App() {
  const TCC=Context
  const [session, setSession] = useState(null)
   useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session,"session")
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  const contextVals = {
    isLoggedIn: session?.user?.id,
    session,
  };

  return (
   <TCC.Provider value={contextVals}>
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Router />
    </ThemeProvider>
</TCC.Provider>
   

  );
}
