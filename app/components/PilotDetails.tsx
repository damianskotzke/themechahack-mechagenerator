import Label from "./Label";
import Stat from "./Stat";

export default function PilotDetails(props: any) {
  return (
    <section className={`${props.className} grid gap-6`}>
      <div className="grid gap-1">
        <Label>Pilot Details || Abilities</Label>
        <p>{props.mechaPilotDescription}</p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label>{props.mechaPilotPrimaryAbilityName}</Label>
          <ul className="grid grid-cols-4 gap-2">
            <Stat label="Power Bonus">
              {props.mechaPilotPrimaryAbilityPower}
            </Stat>
            <Stat label="Mobility Bonus">
              {props.mechaPilotPrimaryAbilityMobility}
            </Stat>
            <Stat label="System Bonus">
              {props.mechaPilotPrimaryAbilitySystem}
            </Stat>
            <Stat label="Presence Bonus">
              {props.mechaPilotPrimaryAbilityPresence}
            </Stat>
          </ul>
        </div>
        <div className="grid gap-1">
          <Label>{props.mechaPilotSecondaryAbilityName}</Label>

          <p>{props.mechaPilotSecondaryAbilityDescription}</p>
        </div>
      </div>
    </section>
  );
}
