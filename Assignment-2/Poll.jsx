import React, { useState } from "react";
const question = "Which programming language do you prefer?";
const options = ["JavaScript", "Python", "Java", "C++"];
function Poll() {
 // One vote counter per option
 const [votes, setVotes] = useState(options.map(() => 0));
 const totalVotes = votes.reduce((sum, v) => sum + v, 0);
 // Record a vote on click (copy the array; never mutate state directly)
 const handleVote = (index) => {
 setVotes((prev) => prev.map((v, i) => (i === index ? v + 1 : v)));
 };
 const percent = (count) =>
 totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);
 return (
 <div style={{ width: "360px", fontFamily: "Arial, sans-serif" }}>
 <h2>{question}</h2>
 {options.map((option, index) => (
 <div key={option} style={{ marginBottom: "14px" }}>
 <button onClick={() => handleVote(index)} style={{ marginBottom: "4px" }}>
 {option}
 </button>
 {/* Result bar: width updates automatically as state changes */}
 <div style={{ background: "#e5e7eb", borderRadius: "6px", height: "22px" }}>
 <div
 style={{
 width: `${percent(votes[index])}%`,
 height: "100%",
 background: "#3b82f6",
 borderRadius: "6px",
 transition: "width 0.3s ease",
 }}
 />
 </div>
 <small>
 {votes[index]} votes ({percent(votes[index])}%)
 </small>
 </div>
 ))}
 <p>Total votes: {totalVotes}</p>
 </div>
 );
}
export default Poll;
