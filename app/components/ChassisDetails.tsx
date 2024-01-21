import Label from "./Label";
import Stat from "./Stat";

export default function ChassisDetails(props: any) {
  return (
    <section className={`${props.className} grid gap-6 break-before`}>
      <div className="grid gap-1">
        <Label>Chassis Details || Abilities</Label>
        <p>{props.mechaChassisDescription}</p>
      </div>
      <div>
        <Label>Weapons & Armor</Label>
        <div className="uppercase text-black bg-stone-50 text-xs leading-3 mb-2">
          Compatibile with {props.mechaChassisWeaponRules}
        </div>
        <ul className="grid grid-cols-3 gap-2">
          <Stat label="Armor" textSize="text-lg">
            {props.mechaChassisArmorName}
            <br />
            [+{props.mechaChassisArmorArmorPoints} AP]
          </Stat>
          <Stat label="Hand Weapon" textSize="text-lg">
            {props.mechaChassisHandWeaponName}
            <br />
            [+{props.mechaChassisHandWeaponDamageBonus} DMG]
          </Stat>
          <Stat label="Range Weapon" textSize="text-lg">
            {props.mechaChassisRangedWeaponName}
            <br />
            [+{props.mechaChassisRangedWeaponDamageBonus} DMG]
          </Stat>
          <Stat label="Shield" textSize="text-lg">
            {props.mechaChassisShieldName}
            <br />
            [+{props.mechaChassisShieldArmorPoints} AP]
          </Stat>
          <Stat label="Accessory" textSize="text-lg">
            Comlink
          </Stat>
        </ul>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label>{props.mechaChassisPrimaryAbilityName}</Label>
          <p>{props.mechaChassisPrimaryAbilityDescription}</p>
        </div>
        <div className="grid gap-1">
          <Label>{props.mechaChassisSecondaryAbilityName}</Label>
          <p>{props.mechaChassisSecondaryAbilityDescription}</p>
        </div>
      </div>
    </section>
  );
}
