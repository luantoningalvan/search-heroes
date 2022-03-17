import { iconList } from "./iconList";

interface IconProps {
  name: string;
  size?: number;
}

export const Icon = (props: IconProps) => {
  const { name, size = 22 } = props;
  return (
    <svg height={`${size}px`} width={`${size}px`} viewBox="0 0 48 48">
      <path
        d={iconList[name].path}
        fill="currentColor"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};
