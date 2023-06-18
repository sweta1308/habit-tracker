import { useNavigate } from "react-router";
import { HabitCard } from "../../components/habitcard/HabitCard";
import { useHabit } from "../../context/HabitContext";

export const Archive = () => {
  const {
    archive,
    setIsHabitDetailsVisible,
    setIsEditBtn,
    setIsAddHabitVisible,
  } = useHabit();

  const navigate = useNavigate();
  return (
    <>
      <h1>Archives</h1>
      <button onClick={() => navigate("/")}>Back to Habits</button>
      {archive.length === 0 ? (
        <h1>Nothing in archive</h1>
      ) : (
        archive.map((data) => (
          <HabitCard
            habit={data}
            checkVisiblity={() => setIsHabitDetailsVisible((prev) => !prev)}
            showEditModal={() => setIsAddHabitVisible(true)}
            editButtonHandler={() => setIsEditBtn(true)}
          />
        ))
      )}
    </>
  );
};
