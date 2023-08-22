import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
import Floors from "../components/Floors";

// assumptions:
// the elevator goes in the selected order
// floors can not be selected twice
// the 13th floor is bad luck and won't be displayed
// the time constatnt is measured in seconds
// the set number of floors is 20

const Home = () => {
  const [startingFloor, setStartingFloor] = useState(
    "Select all floors to visit beginning with the starting floor and click go"
  );
  const [totalFloors] = useState(20);
  const [currentFloor, setCurrentFloor] = useState(startingFloor);
  const [selectedFloors, setSelectedFloors] = useState([startingFloor]);
  const [floorDifference, setFloorDifference] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);

  const handleUpdateFloor = (floor) => {
    if (
      startingFloor ===
      "Select all floors to visit beginning with the starting floor and click go"
    ) {
      // remove the placeholder and splice in the
      // selected floor
      selectedFloors.splice(0, 1, floor);
      setCurrentFloor(floor);
      setStartingFloor(floor);
    } else {
      setCurrentFloor(floor);
      // measure the distance between two floors here with Math.abs()
      setFloorDifference(Math.abs(floor - currentFloor) + floorDifference);
      // Adding each floor selected to the selectedFloor array
      setSelectedFloors([...selectedFloors, floor]);
    }
  };

  const handleFloorCorrection = (floors) => {
    let correctedFloors = [];
    floors.map((i) => {
      // check if the floor is 13 or greater to correct and send that value to new array
      if (i >= 13) {
        correctedFloors = [...correctedFloors, i + 1];
      } else {
        correctedFloors = [...correctedFloors, i];
      }
    });
    return correctedFloors;
  };

  // Multiplying the total amount of floors traveled by the
  // time constant
  let timeTraveled = floorDifference * 10;

  // split the number of floors identified into an array so that we an iterate over it
  const inputFloor = Array.from({ length: totalFloors }, (_, index) => index);
  return (
    <>
      <Head>
        <title>Elevator Pitch!</title>
      </Head>
      <main className={styles.appContainer}>
        <h1>Outside Analytics Elevator Pitch</h1>
        <div className={styles.panelContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.floorDisplayContainer}>
            {selectedFloors.map((floor) => (
              <p key={floor}>
                {/* 13th floor display adjustment */}
                {floor >= 13 ? floor + 1 : floor}
              </p>
            ))}
          </div>
          {/* map over the number of floors identified and create a 'button' for each */}
          <div className={styles.buttonContainer}>
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
          <div className={styles.buttonContainerBottom}>
            {/* dump the state with a reload to 'reset' this exercise  */}
            <button onClick={() => window.location.reload(false)}>Reset</button>
            {/* display the calculated travel time */}
            <button
              disabled={selectedFloors.length > 1 ? false : true}
              onClick={() => setShowCalculation(true)}
            >
              Go
            </button>
          </div>

          <p className={styles.calcText}>
            {showCalculation
              ? `Time elapsed was ${timeTraveled} seconds and the floors visited were ${handleFloorCorrection(
                  selectedFloors
                )}`
              : null}
          </p>
        </div>
        {/* <SolutionTwo /> */}
      </main>
    </>
  );
};
export default Home;
