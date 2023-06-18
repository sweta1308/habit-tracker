import "./HabitCard.css";
import { useHabit } from "../../context/HabitContext";
import uuid from "react-uuid";

export const HabitCard = ({
  habit,
  checkVisiblity,
  showEditModal,
  editButtonHandler,
}) => {
  const { setHabitSelected, setHabitDetails, addArchive, deleteHabit } =
    useHabit();
  const { name } = habit;

  const editHandler = () => {
    setHabitDetails(habit);
    showEditModal();
    editButtonHandler();
  };

  return (
    <>
      <div className="habit-card">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            checkVisiblity();

            setHabitSelected(habit);
          }}
        >
          <h2>{name}</h2>
        </div>
        <div className="icons">
          <i className="fa-solid fa-pen" onClick={editHandler}></i>

          <i
            className="fa-solid fa-folder"
            onClick={() => addArchive({ ...habit, id: uuid() })}
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
