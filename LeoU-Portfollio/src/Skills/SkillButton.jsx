import propTypes from "prop-types";
export default function SkillButton({
  data,
  currentSkillsID,
  setCurrentSkillsID,
}) {
  const { id, icon, title } = data;

  return (
    <li onClick={() => setCurrentSkillsID(id)}>
      <div
        className={`${
          currentSkillsID === id ? "bg-gradient-to-br" : ""
        } relative mx-auto h-20 w-32 cursor-pointer select-none rounded-xl border-[1px] border-violet-700 from-violet-600 to-violet-900 duration-300 hover:bg-gradient-to-l active:translate-y-4 md:h-20 md:w-36`}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm capitalize text-white flex items-center gap-2">
          {icon}
          {title}
        </span>
      </div>
    </li>
  );
}

SkillButton.propTypes = {
  data: propTypes.object,
  currentSkillsID: propTypes.number,
  setCurrentSkillsID: propTypes.func,
};
