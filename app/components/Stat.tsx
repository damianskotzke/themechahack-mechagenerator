import Label from "./Label";

export default function Stat(props: any) {
  const textSize = props.textSize || "text-2xl";

  return (
    <li className="border border-stone-50 p-2 h-32">
      <Label>{props.label}</Label>
      <div className={`${textSize} font-extralight leading-6 mt-2`}>
        {props.children}
      </div>
    </li>
  );
}
