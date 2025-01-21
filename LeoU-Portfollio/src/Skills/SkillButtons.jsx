import propTypes from "prop-types";
import markup from "../images/skill buttons icons/markup.png";
import interactivity from "../images/skill buttons icons/interactivity.png";
import styling from "../images/skill buttons icons/styling.png";
import softskills from "../images/skill buttons icons/softSkills.png";
import { skills as skillsArray } from "../utils/data.jsx";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GiClick } from "react-icons/gi";
import { CiText } from "react-icons/ci";
import { BsDatabaseFillGear } from "react-icons/bs";

function SkillButtons({ setSkillsData, skillsData }) {
  return (
    <ul className="grid h-fit w-8/12 min-w-72 grid-cols-2 grid-rows-2 gap-10 md:max-w-80">
      <SkillButton
        icon={<CiText className="size-9" />}
        alt={"markup icon"}
        text={"markup"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "markup"}
      />
      <SkillButton
        icon={<GiClick className="size-9" />}
        alt={"interactivity icon"}
        text={"interactivity"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "interactivity"}
      />
      <SkillButton
        icon={<HiOutlinePaintBrush className="size-9" />}
        alt={"styling icon"}
        text={"styling"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "styling"}
      />
      <SkillButton
        icon={<BsDatabaseFillGear className="size-9" />}
        alt={"tools icon"}
        text={"tools"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "tools"}
      />
      {/* <SkillButton
        imageSource={markup}
        alt={"markup icon"}
        text={"markup"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "markup"}
      />
      <SkillButton
        imageSource={interactivity}
        alt={"interactivity icon"}
        text={"interactivity"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "interactivity"}
      />
      <SkillButton
        imageSource={styling}
        alt={"styling icon"}
        text={"styling"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "styling"}
      />
      <SkillButton
        imageSource={softskills}
        alt={"tools icon"}
        text={"tools"}
        setSkillsData={setSkillsData}
        isActive={skillsData?.title?.toLowerCase() === "tools"}
      /> */}
    </ul>
  );
}

export default SkillButtons;

function SkillButton({ icon, alt, text, setSkillsData, isActive }) {
  const corrispondingData = skillsArray.find(
    (el) => el.title.toLowerCase() === text
  );

  return (
    <li onClick={() => setSkillsData(corrispondingData)}>
      <div
        className={`${
          isActive ? "bg-gradient-to-br" : ""
        } relative mx-auto h-20 w-32 cursor-pointer select-none rounded-xl border-[1px] border-violet-700 from-violet-600 to-violet-900 duration-300 hover:bg-gradient-to-l active:translate-y-4 md:h-20 md:w-36`}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm capitalize text-white flex items-center gap-2">
          {icon}
          {text}
        </span>
      </div>
    </li>
  );
}

SkillButtons.propTypes = {
  setSkillsData: propTypes.func,
  skillsData: propTypes.object,
};

SkillButton.propTypes = {
  imageSource: propTypes.string,
  alt: propTypes.string,
  text: propTypes.string,
  setSkillsData: propTypes.func,
  isActive: propTypes.bool,
};
