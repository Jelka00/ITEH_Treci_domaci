import Card from "./Card";

function Staze({ staze, kriterijum, dodaj }) {
  return (
    <div className="row">
      {kriterijum === "" ? (
        staze.map((r) => (
          <div key={r.id}>
            <Card dodaj={dodaj} key={r.id} r={r} mod={1}></Card>
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
                <Card dodaj={dodaj} key={r.id} r={r} mod={1}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Staze;
