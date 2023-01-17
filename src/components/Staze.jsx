import Card from "./Card";

function Recepti({recepti,kriterijum,dodaj}) {
    return (
    <div className="row">
        {kriterijum===""
        ?
        recepti.map((r)=> <div  key={r.id} ><Card dodaj={dodaj} key={r.id} r={r} mod={1}></Card><br /></div>)
        :
        <>
        {recepti
        .filter((r)=>r.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((r)=> <div  key={r.id} ><Card dodaj={dodaj}  key={r.id} r={r} mod={1}></Card><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Recepti;