import React from "react";
function Profile({ name, age, branch, marks }) {
 // JSX expression: compute pass/fail with a ternary
 const passed = marks >= 40;
 // Inline style object
 const cardStyle = {
 width: "260px",
 padding: "16px",
 border: "1px solid #ccc",
 borderRadius: "10px",
 textAlign: "center",
 fontFamily: "Arial, sans-serif",
 };
 const statusStyle = {
 color: passed ? "green" : "red",
 fontWeight: "bold",
 };
 return (
 <div style={cardStyle}>
 {/* img with src, alt and className attributes; src built with a template literal */}
 <img
 className="profile-photo"
 src={`https://i.pravatar.cc/120?u=${name}`}
 alt={`${name}'s profile`}
 width="120"
 height="120"
 style={{ borderRadius: "50%" }}
 />
 {/* Template literal inside a JSX expression */}
 <h2>{`${name}`}</h2>
 <p>{`Age: ${age}`}</p>
 <p>{`Branch: ${branch}`}</p>
 {/* Ternary expression for pass/fail status */}
 <p style={statusStyle}>
 Status: {passed ? "Pass" : "Fail"}
 </p>
 </div>
 );
}
export default Profile;
