import React from "react";
import "./ProgressScreen.css"; // Import the CSS file

const goals = [
  { title: "Discipleship", status: "Complete" },
  { title: "Evangelism", status: "In Progress" },
  { title: "Prayer", status: "Complete" },
  { title: "Bible Study", status: "Pending" },
  { title: "Health", status: "In Progress" },
];

const ProgressScreen: React.FC = () => {
  return (
    <div className="progress-container">
      <header className="progress-header">
        <h1 className="progress-title">Hi Daniel!</h1>
        <p className="progress-subtitle">"Builder of People"</p>
        <p className="progress-overview">Overview of Goals</p>
      </header>
      <main className="progress-main">
        {goals.map((goal, index) => (
          <div key={index} className={`progress-item ${goal.status.toLowerCase().replace(" ", "-")}`}>
            <span className="progress-item-title">{goal.title}</span>
            <span className="progress-item-status">{goal.status}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProgressScreen;
