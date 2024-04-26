import { useState } from "react";

function Dashboard(navigator) {
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleOptionChange = (event) => {
    selectedOption(event.taget.value);
  };

  return (
    <div>
        <nav>
            <a href="/home">Inicio</a>
            <a href="/top">Top 5</a>
            <a href="/placeholder">No sé</a>
        </nav>
    </div>
  );
};

export default Dashboard;