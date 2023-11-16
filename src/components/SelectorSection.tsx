import React from "react";

interface SelectorSectionProps {
  title: string;
  options: { label: string; value: string }[];
}

const SelectorSection: React.FC<SelectorSectionProps> = ({ title, options }) => {
  return (
    <div className="section-selector">
      <h4 className="title-selector">{title}</h4>
      {options.map((option, index) => (
        <label key={index} className="selector-checkbox">
          <input type="checkbox" id={`cbox${index + 1}`} value={option.value} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default SelectorSection;