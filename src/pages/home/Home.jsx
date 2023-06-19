import { AddHabit } from "../../components/addHabit/AddHabit";
import "./Home.css";
import { HabitCard } from "../../components/habitcard/HabitCard";
import { useHabit } from "../../context/HabitContext";
import { HabitDetails } from "../../components/habitDetails/HabitDetails";
import { useNavigate } from "react-router";

export const Home = () => {
  const { habitData, modalVisible, setModalVisible } = useHabit();

  const navigate = useNavigate();
  return (
    <>
      <div
        className="home"
        style={{
          filter:
            modalVisible.isAddHabitVisible || modalVisible.isHabitDetailsVisible
              ? "blur(5px)"
              : "",
        }}
      >
        <div>
          <h1>Habits</h1>
          <i
            className="fa-solid fa-plus plus-icon"
            onClick={() =>
              setModalVisible({ ...modalVisible, isAddHabitVisible: true })
            }
          ></i>
          <button
            style={{ display: "block" }}
            onClick={() => navigate("/archived")}
          >
            Show Archives
          </button>
        </div>

        <div className="habit-data">
          {habitData.length === 0 ? (
            <h1>No Habits Added</h1>
          ) : (
            habitData.map((habit) => (
              <div key={habit.id} className="habit">
                <HabitCard habit={habit} />
              </div>
            ))
          )}
        </div>
      </div>
      <AddHabit display={modalVisible.isAddHabitVisible ? "" : "none"} />
      <HabitDetails
        display={modalVisible.isHabitDetailsVisible ? "" : "none"}
      />
    </>
  );
};
