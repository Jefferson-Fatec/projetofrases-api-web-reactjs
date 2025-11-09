import { useState } from "react";

function App() {
  const [frase, setFrase] = useState("");

  async function carregarFrase() {
   // const resp = await fetch("http://localhost:3001/frase");

   const resp = await fetch("https://projetofrases-api-b3bzashwbhe7hqaa.eastus-01.azurewebsites.net/frase");

    const data = await resp.json();
    setFrase(data.frase);
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>💬 Frase Motivacional</h1>
      <p>{frase || "Clique para começar!"}</p>
      <button onClick={carregarFrase}>Nova Frase</button>
    </div>
  );
}

export default App;
