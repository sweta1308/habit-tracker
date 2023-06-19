import "./HabitCard.css";
import { useHabit } from "../../context/HabitContext";

export const HabitCard = ({ habit }) => {
  const {
    setHabitSelected,
    setHabitDetails,
    addArchive,
    deleteHabit,
    setModalVisible,
  } = useHabit();
  const { name } = habit;

  const editHandler = () => {
    setHabitDetails(habit);
    setModalVisible({
      ...setModalVisible,
      isAddHabitVisible: true,
      isEditBtn: true,
    });
  };

  return (
    <>
      <div className="habit-card">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalVisible({
              ...setModalVisible,
              isHabitDetailsVisible: true,
            });
            setHabitSelected(habit);
          }}
        >
          <h2>{name}</h2>
        </div>
        <div className="icons">
          <i className="fa-solid fa-pen" onClick={editHandler}></i>

          <i
            className="fa-solid fa-folder"
            onClick={() => addArchive(habit)}
          ></i>

          <i
            className="fa-solid fa-trash-can"
            onClick={() => deleteHabit(habit)}
          ></i>
        </div>
      </div>
    </>
  );
};
