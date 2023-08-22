const Floors = ({ floor, selected, isSelected }) => {
  const realFloor = floor + 1;
  return (
    <div>
      <p onClick={() => selected(realFloor)}>{realFloor}</p>
      is selected: {isSelected ? "False" : "True"}
    </div>
  );
};
export default Floors;
