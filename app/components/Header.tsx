import Label from "./Label";

export default function Header(props: any) {
  return (
    <section className={`${props.className} `}>
      <div className="">
        <div id="header" className="grid grid-cols-1 gap-6">
          <div>
            <Label>Callsign</Label>
            <div>{props.mechaCallsign}</div>
          </div>
          <div>
            <Label>Pilot Class</Label>
            <div>{props.mechaPilotName}</div>
          </div>
          <div>
            <Label>Chassis Class</Label>
            <div>{props.mechaChassisName}</div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={props.handleClick}
          className="
            mt-12 border 
            border-stone-50 
            p-2
            hover:bg-stone-50
            hover:text-stone-950
          "
        >
          Roll your mecha
        </button>
      </div>
    </section>
  );
}
