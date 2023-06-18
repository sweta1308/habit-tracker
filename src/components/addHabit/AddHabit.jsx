import "./AddHabit.css";

export const AddHabit = () => {
  return (
    <>
      <h2>Add Habit</h2>
      <label for="name">NAME</label>
      <input id="name" />
      <label for="repeat-frequency">REPEAT</label>
      <select id="repeat-frequency">
        <option value="Daily">Daily</option>
        <option value="Once in 3 days">Once in 3 days</option>
        <option value="Weekly">Weekly</option>
        <option value="Once in 2 weeks">Once in 2 weeks</option>
        <option value="Monthly">Monthly</option>
      </select>

      <label for="goal-frequency">GOAL</label>
      <select id="goal-frequency">
        <option value="Once Daily">Once Daily</option>
        <option value="Twice Daily">Twice Daily</option>
        <option value="Thrice daily">Thrice daily</option>
      </select>

      <label for="time">TIME OF DAY</label>
      <select id="time">
        <option value="Anytime">Anytime</option>
        <option value="Morning">Morning</option>
        <option value="Evening">Evening</option>
        <option value="Night">Night</option>
      </select>

      <label for="start">START DATE</label>
      <input type="date" />
    </>
  );
};
