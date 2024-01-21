import Label from "./Label";
import Stat from "./Stat";

export default function Statistics(props: any) {
  return (
    <section className={`${props.className} `}>
      <div>
        <Label>Statistics</Label>
        <div className="uppercase text-black bg-stone-50 text-xs leading-3 mb-2">
          pilot && chassis bonus included
        </div>
      </div>
      <div className="grid gap-2">
        <ul className="grid grid-cols-4 gap-2">
          <Stat label="Power">{props.mechaPower}</Stat>
          <Stat label="Mobility">{props.mechaMobility}</Stat>
          <Stat label="System">{props.mechaSystem}</Stat>
          <Stat label="Presence">{props.mechaPresence}</Stat>
        </ul>
        <ul className="grid grid-cols-2 gap-2">
          <Stat label="Starting Hit Points (HP)">
            {props.mechaStartingHitPoints}
          </Stat>
          <Stat label="Starting Armor Points (AP)">
            {props.mechaStartingArmorPoints}
          </Stat>
        </ul>
        <ul className="grid grid-cols-3 gap-2">
          <Stat label="Hit Die (HD)">{props.mechaChassisHitDie}</Stat>
          <Stat label="Damage Die (DD)">{props.mechaChassisDamageDie}</Stat>
          <Stat label="Reactor Die (RD)">{props.mechaChassisReactorDie}</Stat>
        </ul>
      </div>
    </section>
  );
}
