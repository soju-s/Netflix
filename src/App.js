

import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';




function App() {
  return (
    <div >
      <Nav/>
      <Banner/>
      <Row isPoster={true} title={'Netflix Orginals'} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title={'Trending'} fetchUrl={requests.fetchTrending} />
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={'Documentary'} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
