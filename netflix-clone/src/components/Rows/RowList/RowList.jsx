import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
   <>
   <Row
   title="NETFLIX ORGINALS"
   fectURL={requests. fetchNetflixOriginals}
   isLargeRow={true}/>
   <Row
   title="Trending Now"
   fectURL={requests.fetchTrending}
   isLargeRow={true}
   />
    <Row
   title="Top Rated"
   fectURL={requests.fetchTopRated}
   isLargeRow={true}
   />
    <Row
   title="Action Movies"
   fectURL={requests. fetchActionMovies}
   />
    <Row
   title="Horror Movies"
   fectURL={requests.fetchHorrorMovies}
   isLargeRow={true}
   />
   <Row
   title="Comdy Movies"
   fectURL={requests.fetchComedyMovies}
   isLargeRow={true}
   />
   
   <Row
   title="Romance Movies"
   fectURL={requests.fetchRomanceMovies}
   isLargeRow={true} 
   />
    <Row
   title="Documentaries"
   fectURL={requests.fetchDocumentaries}
   isLargeRow={true} 
   />
    <Row
   title="Animatioms"
   fectURL={requests.fetchAnimations}
   isLargeRow={true} 
   />

    
   </>
   
  )
 }

 export default RowList

