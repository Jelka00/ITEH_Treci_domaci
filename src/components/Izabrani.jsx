import Card from "./Card";

function Izabrani({ staze, kriterijum, izbaci }) {
  return (
    <div className="row">
      {kriterijum === "" ? (
        staze.map((r) => (
          <div key={r.id}>
            <Card key={r.id} r={r} mod={2} izbaci={izbaci}></Card>
            <br />
          </div>
        ))
      ) : (
        <>
          {staze
            .filter((r) =>
              r.naziv.toLowerCase().includes(kriterijum.toLowerCase())
            )
            .map((r) => (
              <div key={r.id}>
                <Card key={r.id} r={r} mod={2} izbaci={izbaci}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Izabrani;
