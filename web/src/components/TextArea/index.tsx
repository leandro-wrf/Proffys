import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default TextArea;
