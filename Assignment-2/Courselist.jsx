import React from "react";
const courses = [
 { id: 101, name: "Data Structures", credits: 4, faculty: "Dr. Rao" },
 { id: 102, name: "Database Systems", credits: 3, faculty: "Prof. Sharma" },
 { id: 103, name: "Computer Networks", credits: 3, faculty: "Dr. Iyer" },
 { id: 104, name: "Operating Systems", credits: 4, faculty: "Prof. Khan" },
];
function CourseList({ courseData = courses }) {
 // Conditional rendering: empty array -> message
 if (courseData.length === 0) {
 return <p>No courses available</p>;
 }
 return (
 <div>
 <h2>Course List</h2>
 <ul>
 {courseData.map((course) => (
 // key must be unique and stable, so use the course id (not the index)
 <li key={course.id}>
 <strong>{course.name}</strong> &mdash; {course.credits} credits
 &mdash; Faculty: {course.faculty}
 </li>
 ))}
 </ul>
 </div>
 );
}
export default CourseList;
