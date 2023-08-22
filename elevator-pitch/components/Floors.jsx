import styles from "./Floors.module.scss";
const Floors = ({ floor, selected, isSelected }) => {
  // setting this to display the correct floor number instead of the
  // array index
  const realFloor = floor + 1;

  return (
    <div className={styles.button}>
      {/* set to disabled if this is selected and pass up the real floor value to 
      parent */}
      <button disabled={!isSelected} onClick={() => selected(realFloor)}>
        {/* 13th floor display adjustment */}
        {realFloor >= 13 ? realFloor + 1 : realFloor}
      </button>
    </div>
  );
};
export default Floors;
