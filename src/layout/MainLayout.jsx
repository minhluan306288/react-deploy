import { Outlet, useNavigate, useResolvedPath } from "react-router-dom";
import MenuHeader from "@Layout/MenuHeader";
// import MenuHeader from "/layout/MenuHeader";
import firebase from 'firebase/compat/app';
import { useLayoutEffect, useState } from "react";
import {auth} from '@Observer/ObFirebase';


export default function MainLayout(){
   const [isSignedIn, setIsSignedIn] = useState(false) 
   const {pathname} = useResolvedPath()
   const navigate = useNavigate()
   console.log('pathname', pathname);
   console.log('update code deploy');

   useLayoutEffect(() => {

      const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
         setIsSignedIn(!!user);
         console.log('user', user);
         console.log('user', await user?.getIdToken());
         // if(pathname !== '/sign-up' && pathname !== '/sign-in') navigate('/sign-in')
       });
       return () => unregisterAuthObserver();

      // if(pathname !== '/sign-in' && pathname !== '/sign-up'){
         
      // }
    },[pathname]); 



   return (
      <>
         <header>
            <MenuHeader />
         </header>
         <main>
            <div className="mx-4">
               {/* {(isSignedIn || pathname ==='/sign-up' || pathname ==='/sign-in' ) && <Outlet />} */}
               <Outlet />
            </div>
         </main>
      
      </>
   )
}