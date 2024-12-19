import React from "react";
import "./AccomplishmentsScreen.css"; // Import the CSS file

const accomplishments = [
  "Apologetics",
  "NT Overview",
  "John in Depth",
  "Build Your Testimony",
]; // import accomplishments here

const AccomplishmentsScreen: React.FC = () => {
  const handleCardClick = (title: string) => {
    console.log(`${title} clicked`);
    // Add your navigation or action logic here
  };

  return (
    <div className="accomplishment-container">
      <header className="accomplishment-header">
        <h1 className="accomplishment-title">Daniel, here's what you've learnt!</h1>   
      </header>
      <main className="accomplishment-main">
        {accomplishments.map((item) => (
          <button
            key={item}
            className="accomplishment-card"
            onClick={() => handleCardClick(item)}
          >
            {item}
          </button>
        ))}
      </main>
    </div>
  );
};

export default AccomplishmentsScreen;
