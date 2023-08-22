import Head from "next/head";
import { useState } from "react";

import SolutionTwo from "./solutionTwo";

import Floors from "../components/Floors";

// assumptions
// the elevator goes in the selected order
// floors can not be selected twice

const Home = () => {
  const [startingFloor] = useState(10);
  const [totalFloors, setFloors] = useState(10);
  const [currentFloor, setCurrentFloor] = useState(startingFloor);
  const [selectedFloors, setSelectedFloors] = useState([startingFloor]);
  const [floorDifference, setFloorDifference] = useState(0);

  const handleUpdateFloor = (floor) => {
    setCurrentFloor(floor);
    // measure the distance between two floors here with Math.abs()
    setFloorDifference(Math.abs(floor - currentFloor) + floorDifference);
    // Adding each floor selected to the selectedFloor array
    setSelectedFloors([...selectedFloors, floor]);
  };

  // Multiplying the total amount of floors traveled by the
  // time constant
  let timeTraveled = floorDifference * 10;

  // split the number of floors identified into an array so that we an iterate over it
  const inputFloor = Array.from({ length: totalFloors }, (_, index) => index);

  console.log("more tests here: ", selectedFloors);
  return (
    <>
      <Head>
        <title>Elevator Pitch!</title>
      </Head>
      <main>
        <div>
          <h1>Outside Analytics Elevator Pitch</h1>
          {/* map over the number of floors identified and create a 'button' for each */}
          {inputFloor.map((i) => (
            <Floors
              key={i}
              floor={i}
              selected={handleUpdateFloor}
              // checking to see if we have already selected this button
              isSelected={selectedFloors.includes(i + 1) ? false : true}
            />
          ))}
        </div>
        <div>
          Selected Floors:
          {selectedFloors.map((i) => (
            <p key={i + floorDifference}>{i}</p>
          ))}
        </div>
        <div>
          Floor Difference:
          {floorDifference}
        </div>
        <div>
          Time Traveled:
          {timeTraveled}
        </div>
        {/* <SolutionTwo /> */}
      </main>
    </>
  );
};
export default Home;
