import { Outlet, matchRoutes, useMatch, useResolvedPath } from "react-router-dom";
import MenuHeader from "@Layout/MenuHeader";
// import { obFirebase } from "../observer/ObFirebase";
import { useEffect, useLayoutEffect, useState } from "react";

export default function MainLayout(){
   const [isSignedIn, setIsSignedIn] = useState(false) 
   const currentPath = useResolvedPath()
   console.log('currentPath', currentPath);

   // useLayoutEffect(() => {
   //    if(currentPath !== '/sign-up'){
   //       const unregisterAuthObserver = obFirebase.auth().onAuthStateChanged(user => {
   //          setIsSignedIn(!!user);
   //        });
   //        return () => unregisterAuthObserver();
   //    }
   //  }, []);



   return (
      <>
         <header>
            <MenuHeader />
         </header>
         <main>
            <div className="mx-4">
               <Outlet />
            </div>
         </main>
      
      </>
   )
}