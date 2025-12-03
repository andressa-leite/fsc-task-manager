import InputLabel from "./InputLabel";

const TimeSelect = () => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="Time">Time</InputLabel>
      <select
        id="time"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm"
      >
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
    </div>
  );
};

export default TimeSelect;
