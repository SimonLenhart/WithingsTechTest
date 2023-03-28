import React, { useState, useEffect } from "react";

export default function Score(props) {
  return <div class="score">Current Score: {props.currentScore}</div>;
}
