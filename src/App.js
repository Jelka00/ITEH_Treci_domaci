import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Vesti from "./components/Vesti";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Staze from "./components/Staze";
import Izabrani from "./components/Izabrani";

function App() {
  const [izabraniR, setIzabraniR] = useState([]);
  const [stazeNiz] = useState([
    {
      id: 1,
      naziv: "Pancicev vrh",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.04.dsc02434.jpg",
      opis: " Žičara je tipa četvorosed sa sklopivim sedištima. Dužine trase je 1.393 m, visinska razlika 248 m, a kapacitet je 1.800 skijaša na sat. Postavljena je na mestu i trasi najstarije žičare jednoseda na Kopaoniku.",
      vreme: "10 min",
      izabraneStaze: 0,
    },
    {
      id: 2,
      naziv: "Karaman greben",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.07.dsc02294.jpg",
      opis: "Staze sa obe strane žičare idealne za početnike i osrednje skijaše.Po izlasku sa žičare, sa leve staze odvaja prelazna staza prema žičari br.8 Mali Karaman.",
      vreme: "15 min",
      izabraneStaze: 0,
    },
    {
      id: 3,
      naziv: "Suncana dolina",
      slika: "https://www.kopaoniksmestaj.rs/assets/img/suncana-dolina-1.jpg",
      opis: " Ove staze počinju iznad vrha Krst na 1715mnv i spuštaju se do samog magistralnog puta za Vikend naselje i Rudnicu.",
      vreme: "12 min",
      izabraneStaze: 0,
    },
    {
      id: 4,
      naziv: "Duboka I",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.06.dsc01764.jpg",
      opis: " Vodi iz Duboke (1.595m) do Suvog rudišta (1.976m). Ovo je jedina žičara na Kopaoniku koja ima krivinu u trasi i na njoj međustanicu.",
      vreme: "8 min",
      izabraneStaze: 0,
    },
    {
      id: 5,
      naziv: "Krst",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.02.Krst1.JPG",
      opis: " Nov četvorosed Krst opslužuje dve staze. Desna staza je po kategorizaciji laka i idealna je za prve skijaške korake. Leva staza je pretvorena u Snow park.",
      vreme: "15 min",
      izabraneStaze: 0,
    },
    {
      id: 6,
      naziv: "Ledenice I",
      slika: "https://www.infokop.net/images/stories/staze/18/Ledenice3.jpg",
      opis: " Crna – Teška i spušta se sa vrha Ledenice. Poslednjih godina se sneg na njoj ne taba, pa je pogodna za dobre skijaše koji vole skijanje po dubokom snegu",
      vreme: "7 min",
      izabraneStaze: 0,
    },
    {
      id: 7,
      naziv: "Krcmar",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.vesti.2015.zima.20150113k.20150113_141056.jpg",
      opis: "U sezoni 2019/2020. izgrađena je još jedna staza na lokaciji Krčmar sa oznakom 21a, koje je paralelna sa postojećom stazom 21.",
      vreme: "10 min",
      izabraneStaze: 0,
    },
    {
      id: 8,
      naziv: "Gobelja",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.12.dsc01491.jpg",
      opis: " Sa šest staza jasno obeležnih i trasiranih (3 crvene, 2 crnei i 1 plavom) i prostranim delom za off piste Gobelja se izdvaja kao sasvim novo skijalište.",
      vreme: "15 min",
      izabraneStaze: 0,
    },
    {
      id: 9,
      naziv: "Malo jezero",
      slika:
        "https://kopaonikonline.com/wp-content/uploads/2021/01/KOP_0121PV1.jpg",
      opis: " Staza Malo jezero, uz Pančićev vrh 4b i Karaman greben 7a, je jedna od tri osvetljene kopaoničke staza.",
      vreme: "7 min",
      izabraneStaze: 0,
    },
    {
      id: 10,
      naziv: "Jaram",
      slika:
        "https://www.infokop.net/mambots/content/multithumb/images/b.800.600.0.1.stories.staze.11.dsc02651.jpg",
      opis: " Do staze Jaram se dolazi sa vrha Gobelja na koji izlazi Gobelja relej i direktno prelaskom puta na prevoju Jaram sa staze Karaman.",
      vreme: "10 min",
      izabraneStaze: 0,
    },
    {
      id: 11,
      naziv: "Marine vode",
      slika: "https://www.infokop.net/images/stories/staze/09/MarineVode2.jpg",
      opis: " Marine Vode: Spada u lake staze. Dupli ski lift, sidro i tanjir, polazi sa puta Brzeće-Kopaonik i izlazi na vrh Vučak 1934m/nv.",
      vreme: "5 min",
      izabraneStaze: 0,
    },
    {
      id: 12,
      naziv: "Mali Karaman",
      slika:
        "https://brzecekopaonik.rs/wp-content/uploads/2021/01/GondolaBrzece_0121a.jpg",
      opis: "Mali Karaman: Staza spada u izuzetno lake i pogodna je za početnike. Odmah treba napomenuti da većina ski škola obučava svoje polaznike na ovoj stazi.",
      vreme: "15 min",
      izabraneStaze: 0,
    },
  ]);

  const [kriterijumPretrage, setKriterijumPretrage] = useState("");

  function pretrazi(kriterijum) {
    setKriterijumPretrage(kriterijum);
  }
  function dodaj(id) {
    for (var i = 0; i < stazeNiz.length; i++) {
      if (stazeNiz[i].id === id) {
        stazeNiz[i].izabraneStaze = 1;
      }
    }
    var niz = stazeNiz.filter((r) => r.izabraneStaze === 1);
    setIzabraniR(niz);
  }
  function izbaci(id) {
    for (var i = 0; i < stazeNiz.length; i++) {
      if (stazeNiz[i].id === id) {
        stazeNiz[i].izabraneStaze = 0;
      }
    }
    var niz = stazeNiz.filter((r) => r.izabraneStaze === 1);
    setIzabraniR(niz);
  }

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav pretrazi={pretrazi}></Nav>
          <Routes>
            <Route path="/" element={<Vesti></Vesti>}></Route>
            <Route
              path="/staze"
              element={
                <Staze
                  kriterijum={kriterijumPretrage}
                  staze={stazeNiz}
                  dodaj={dodaj}
                ></Staze>
              }
            ></Route>
            <Route
              path="/izabrani"
              element={
                <Izabrani
                  kriterijum={kriterijumPretrage}
                  staze={izabraniR}
                  izbaci={izbaci}
                ></Izabrani>
              }
            ></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
