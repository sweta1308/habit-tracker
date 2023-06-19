import { useHabit } from "../../context/HabitContext";
import "./AddHabit.css";

export const AddHabit = ({ display }) => {
  const {
    habitDetails,
    setHabitDetails,
    addHabit,
    modalVisible,
    setModalVisible,
    editHabit,
  } = useHabit();
  const { name, repeat, goal, time, startDate } = habitDetails;

  return (
    <>
      <div className="add-habit" style={{ display: display }}>
        <div className="flex-display">
          <h2>Add Habit</h2>
          <i
            className="fa-solid fa-xmark x-icon"
            onClick={() => {
              setModalVisible({
                ...modalVisible,
                isEditBtn: false,
                isAddHabitVisible: false,
              });
              setHabitDetails({
                id: "",
                name: "",
                repeat: "",
                goal: "",
                time: "",
                startDate: "",
              });
            }}
          ></i>
        </div>

        <label for="name">NAME OF HABIT</label>
        <input
          id="name"
          value={name}
          onChange={(e) =>
            setHabitDetails({ ...habitDetails, name: e.target.value })
          }
        />

        <div className="flex-display">
          <div className="column">
            <label for="repeat-frequency">REPEAT</label>
            <select
              value={repeat}
              id="repeat-frequency"
              onChange={(e) =>
                setHabitDetails({ ...habitDetails, repeat: e.target.value })
              }
            >
              <option disabled value="Select">
                Select
              </option>
              <option value="Daily">Daily</option>
              <option value="Once in 3 days">Once in 3 days</option>
              <option value="Weekly">Weekly</option>
              <option value="Once in 2 weeks">Once in 2 weeks</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="column">
            <label for="goal-frequency">GOAL</label>
            <select
              value={goal}
              id="goal-frequency"
              onChange={(e) =>
                setHabitDetails({ ...habitDetails, goal: e.target.value })
              }
            >
              <option disabled value="Select">
                Select
              </option>
              <option value="Once Daily">Once Daily</option>
              <option value="Twice Daily">Twice Daily</option>
              <option value="Thrice daily">Thrice daily</option>
            </select>
          </div>
        </div>

        <div className="flex-display">
          <div className="column">
            <label for="time">TIME OF DAY</label>
            <select
              value={time}
              id="time"
              onChange={(e) =>
                setHabitDetails({ ...habitDetails, time: e.target.value })
              }
            >
              <option disabled value="Select">
                Select
              </option>
              <option value="Anytime">Anytime</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div className="column">
            <label for="start">START DATE</label>
            <input
              value={startDate}
              type="date"
              onChange={(e) =>
                setHabitDetails({ ...habitDetails, startDate: e.target.value })
              }
            />
          </div>
        </div>

        <button
          className="add-btn"
          onClick={() => {
            modalVisible.isEditBtn
              ? editHabit(habitDetails)
              : addHabit(habitDetails);
            setModalVisible({
              ...modalVisible,
              isEditBtn: false,
              isAddHabitVisible: false,
            });
          }}
        >
          {modalVisible.isEditBtn ? "Edit" : "Add"}
        </button>
      </div>
    </>
  );
};
