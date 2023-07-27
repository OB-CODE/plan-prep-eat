import React from "react";
import { Button, buttonVariants } from "~/UI/button";

const PythonCalculator = () => {
  const sendDataToDjango = async () => {
    const dataToSend = { key: "HELLO MITCH" }; // Data you want to send
   
    try {
      const response = await fetch("http://localhost:8000/api/process_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json(); // Processed data from Django
      // Handle the response data from Django as needed
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      PythonCalculator
      <Button onClick={sendDataToDjango} type="submit" className={buttonVariants({
          variant: "purple",
          size: "lg",
        })}
        children={"Calculate Calories"}>
      </Button>
    </div>
  );
};

export default PythonCalculator;
