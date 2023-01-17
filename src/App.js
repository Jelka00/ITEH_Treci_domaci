import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Vesti from './components/Vesti'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Staze from './components/Staze';
import Izabrani from './components/Izabrani';

function App() {
  const [izabraniR,setIzabraniR]=useState([]);
  const[stazeNiz] = useState([

    {
        id:1,
        naziv:"Čokoladna torta",
        slika: "https://podravkaiovariations.blob.core.windows.net/3fd5067a-6423-11eb-94c1-0242ac120021/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        opis:" Jednostavna čokoladna torta za sve prilike koja će vas oduševiti.",
        vreme: 60,
        izabraneStaze:0
        
         
    },
    {
      id:2,
      naziv:"Bajadere",
      slika: "https://podravkaiovariations.blob.core.windows.net/bc65da46-63e4-11eb-bab5-0242ac12002b/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Bajedere po receptu naših baka.Probajte i uverite se sami!",
      vreme: 45,
      izabraneStaze:0

    },      
    {
        id:3,
        naziv:"Rocher praline",
        slika:"https://podravkaiovariations.blob.core.windows.net/8410ae4a-6421-11eb-bb8b-0242ac120042/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
        opis:" Jednostavan recept idealan za početnike.",
        vreme: 55,
        izabraneStaze:0
    },
    {
      id:4,
      naziv:"Tart od karamele i kikirikija",
      slika: "https://podravkaiovariations.blob.core.windows.net/b70163d4-6187-11ed-ab21-da76589037d6/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Tart za koji Vam je potrebno samo 40 minuta.",
      vreme: 40,
      izabraneStaze:0
    },
    {
      id:5,
      naziv:"Gibanica koja se najlakše pravi",
      slika: "https://podravkaiovariations.blob.core.windows.net/640ebfd8-6421-11eb-ab73-0242ac120058/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Recept za gibanicu idealan za početnike.",
      vreme: 120,
      izabraneStaze:0

    }, 
    {
      id:6,
      naziv:"Domaci burek kao iz pekare",
      slika: "https://podravkaiovariations.blob.core.windows.net/cdce5412-63cf-11eb-a5d7-0242ac12005a/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Najbrži recept za burek od gotovih kora.",
      vreme: 120,
      izabraneStaze:0

    },
    {
      id:7,
      naziv:"Piletina sa susamom",
      slika: "https://podravkaiovariations.blob.core.windows.net/7a7175f6-259e-11ec-af17-2a8316b4add6/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Piletina sa susamom kao iz restorana. Brzo i jednostavno!",
      vreme: 100,
      izabraneStaze:0
    },  
    {
      id:8,
      naziv:"Slani rolati",
      slika: "https://podravkaiovariations.blob.core.windows.net/e95a3056-63e4-11eb-a4ea-0242ac120051/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.webp",
      opis:" Slani rolati idealni za slavlja i za svaki dan.",
      vreme: 150,
      izabraneStaze:0

    },

  ]);

  const [kriterijumPretrage,setKriterijumPretrage]=useState("");

  function pretrazi(kriterijum){
    setKriterijumPretrage(kriterijum);
  }
function dodaj(id){
  for(var i=0;i<stazeNiz.length;i++){
    if(stazeNiz[i].id===id){
      stazeNiz[i].izabraneStaze=1;
    }
  }
  var niz = stazeNiz.filter((r)=>r.izabraneStaze===1);
  setIzabraniR(niz);
}
function izbaci(id){
  for(var i=0;i<stazeNiz.length;i++){
    if(stazeNiz[i].id===id){
      stazeNiz[i].izabraneStaze=0;
    }
  }
  var niz = stazeNiz.filter((r)=>r.izabraneStaze===1);
  setIzabraniR(niz);
}


  return (
    <div className="App">
    <div>
    <BrowserRouter>
    <Nav pretrazi={pretrazi}></Nav> 
        <Routes>
          <Route path="/" element={<Vesti></Vesti>}></Route>
           <Route path="/staze" element={<Staze kriterijum={kriterijumPretrage}  staze={stazeNiz} dodaj={dodaj}></Staze>}></Route> 
           <Route path="/izabrani" element={<Izabrani kriterijum={kriterijumPretrage}  staze={izabraniR} izbaci={izbaci}></Izabrani>}></Route> 


        </Routes>
        <Footer></Footer>
     </BrowserRouter>
  </div>
  </div>
  );
}

export default App;
