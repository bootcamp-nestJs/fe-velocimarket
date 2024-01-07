import { useState } from "react";
import "./SelectorSection.css"
import plus from "../assets/icon/Más.svg"

interface SelectorSectionProps {
  title: string;
  options: { label: string; value: string }[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  chequeado:number;
}

const SelectorSection: React.FC<SelectorSectionProps> = ({ title, options,handleChange, chequeado }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className={`section-selector ${isOpen ? "open" : ""}`}>
      <div className="header-selector-input">
      <h4 className="title-selector" onClick={toggleSelector}>
        {title} 
      </h4>
      <img className="icon-plus"src={plus} onClick={toggleSelector}/>
      </div>
      <div className="selector-options">
        {options.map((option, index) => {
          return (
          <label key={index} className="selector-checkbox">
            <input type="checkbox" id={`cbox${index + 1}`} checked={chequeado==parseInt(option.value)? true:false} value={option.value} name="subcat" onChange={handleChange} />
            {option.label}
          </label>
        )})}
      </div>
    </div>
  );
};

export default SelectorSection;