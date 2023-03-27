import React, { useState, useEffect } from "react";

export default function Score() {
  const [score, setScore] = useState(0);
  return <div class="score">Current Score: {score}</div>;
}
