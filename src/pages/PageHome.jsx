import Section1 from "@Components/homePage/mainBanner/Section1";
import { useEffect, useState } from "react";
import DemoLogin from "./DemoLogin";

const urlImageDefault = 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/'


const getFilm = async () => {
   const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
   return result;
} catch (error) {
	console.error(error);
   return false;
}
}

export default function PageHome(){

   const [film,setFilm] = useState()

  
  useEffect(() => {
   getFilm()
      .then(r => {
         setFilm(r)
      })
  },[])

   return (
      <>
         <h2 className="text-red-700">Home Page
            <Section1 />
            <DemoLogin />
         </h2>
      </>
   )
}