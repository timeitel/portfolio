import { FC } from "react";

interface Props {
  items: IItem[];
}

interface IItem {
  label: string;
  onClick?: () => void;
}

export const ListRenderer: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((i) => (
        <li onClick={i?.onClick}>{i.label}</li>
      ))}
    </ul>
  );
};
