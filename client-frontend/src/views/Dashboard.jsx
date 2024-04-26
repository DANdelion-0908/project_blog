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
            <a href="/"></a>
        </nav>
    </div>
  )
};

export default Dashboard;