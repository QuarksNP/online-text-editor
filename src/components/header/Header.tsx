import {
  PiXBold,
  PiQuestionBold,
  PiDotsThreeVerticalBold,
} from "react-icons/pi";

import * as style from "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className={style.headerStyle}>
      <PiXBold size={20} />

      <div className={style.optionStyle}>
        <PiQuestionBold size={20} />
        <PiDotsThreeVerticalBold size={20} />

        <button type="button" className={style.buttonStyle}>
          Publish
        </button>
      </div>
    </header>
  );
};
