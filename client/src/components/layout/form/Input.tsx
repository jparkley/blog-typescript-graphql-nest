import React from "react";

interface Props {
  label: string;
}
export const Input: React.FC<Props> = ({ label }: Props) => {
  return (
    <div>
      <div>{label}</div>
      <div>
        <input />
      </div>
    </div>
  );
};
