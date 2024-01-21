"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Label from "./components/Label";

// Databases
import mechaPilotsDatabase from "./mechaPilotsDatabase.json";
import mechaChassisDatabase from "./mechaChassisDatabase.json";
import mechaCallsignDatabase from "./mechaCallsignDatabase.json";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import PilotDetails from "./components/PilotDetails";
import ChassisDetails from "./components/ChassisDetails";
import Footer from "./components/Footer";

// Main Component
export default function Home() {
  // Loading
  const [isLoadingPilot, setIsLoadingPilot] = useState(true);
  const [isLoadingChassis, setIsLoadingChassis] = useState(true);

  // Set initial states
  const [mechaPower, setMechaPower] = useState(0);
  const [mechaMobility, setMechaMobility] = useState(0);
  const [mechaSystem, setMechaSystem] = useState(0);
  const [mechaPresence, setMechaPresence] = useState(0);
  const [mechaStartingHitPoints, setMechaStartingHitPoints] = useState(0);
  const [mechaStartingArmorPoints, setMechaStartingArmorPoints] = useState(0);
  const [mechaImage, setMechaImage] = useState(1);

  // Set initial states for Pilot Attributes
  const [mechaPilot, setMechaPilot] = useState({
    name: "[Pilot]",
    description: "[Description]",
    primaryAbility: {
      name: "[Name]",
      power: 0,
      mobility: 0,
      system: 0,
      presence: 0,
    },
    secondaryAbility: {
      name: "[Name]",
      description: "[Description]",
    },
  });

  // Set initial states for Chassis Attributes
  const [mechaChassis, setMechaChassis] = useState({
    name: "[Chassis]",
    description: "[Description]",
    startingHitPointsDie: 0,
    startingHitPointsBonus: 0,
    hitDie: "[Hit Die]",
    damageDie: "[Damage Die]",
    reactorDie: "[Reactor Die]",
    weaponRules: "[Weapons Rule]",
    armor: {
      name: "[Armor]]",
      armorPoints: 0,
    },
    handWeapon: {
      name: "[Hand Weapon]",
      damageBonus: 0,
    },
    rangedWeapon: {
      name: "[Ranged Weapon]",
      damageBonus: 0,
    },
    shield: {
      name: "[Shield]",
      armorPoints: 0,
    },
    primaryAbility: {
      name: "[Primary Ability]",
      description: "[Description]",
    },
    secondaryAbility: {
      name: "[Secondary Ability]",
      description: "[Description]",
    },
    levelUp: "[Description]",
  });

  // Set initial states for Callsign Attributes
  const [mechaCallsign, setMechaCallsign] = useState("");

  // Generating Mecha Callsign
  function rollMechaCallsign() {
    const randomCallsignIndex = Math.floor(
      Math.random() * mechaCallsignDatabase.length
    );
    setMechaCallsign(mechaCallsignDatabase[randomCallsignIndex]);
  }

  //Generating Mecha Pilot
  function rollMechaPilot() {
    const randomPilotIndex = Math.floor(
      Math.random() * mechaPilotsDatabase.length
    );
    setMechaPilot(mechaPilotsDatabase[randomPilotIndex]);

    // Draw Pilot Attribues
    // Detect if there is any attribute rolled above 14.
    let highAttribute = false;

    // Rolling and adding pilot bonus function
    function rollPilotAttribute(pilotBonus: any, setAttribute: any) {
      // Set variables
      let totalRoll = 0;
      const thresholdRoll = 14;
      const d6 = 6;
      const belowThresholdBonus = 3;

      // Rolling logic
      // If any is higher than 14 (threshold) then roll 2d6+3, otherwise roll 3d6
      if (highAttribute) {
        for (let i = 0; i < 2; i++) {
          totalRoll += Math.floor(Math.random() * d6) + 1;
        }
        setAttribute(totalRoll + belowThresholdBonus + pilotBonus);
      } else {
        for (let i = 0; i < 3; i++) {
          totalRoll += Math.floor(Math.random() * d6) + 1;
        }
        setAttribute(totalRoll + pilotBonus);
      }

      // Threshold check
      if (totalRoll > thresholdRoll) {
        highAttribute = true;
      }
    }

    // Rolling
    rollPilotAttribute(mechaPilot.primaryAbility.power, setMechaPower);
    rollPilotAttribute(mechaPilot.primaryAbility.mobility, setMechaMobility);
    rollPilotAttribute(mechaPilot.primaryAbility.system, setMechaSystem);
    rollPilotAttribute(mechaPilot.primaryAbility.presence, setMechaPresence);

    setIsLoadingPilot(false);
  }

  //Generating Mecha Chassis
  function rollMechaChassis() {
    const randomChassisIndex = Math.floor(
      Math.random() * mechaChassisDatabase.length
    );
    setMechaChassis(mechaChassisDatabase[randomChassisIndex]);

    // Draw Chassis Attributes
    function rollChassisAttributes(
      mechaChassisStartingHitPointsDie: any,
      mechaChassisStartingHitPointsBonus: any,
      mechaChassisArmorArmorPoints: any,
      mechaChassisShieldArmorPoints: any,
      setStartingHitPointsAttribute: any,
      setStartingArmorPointsAttribute: any
    ) {
      let totalHitPointsRoll = 0;
      let totalArmorPointsRoll = 0;
      let rollHitPoints = Math.floor(
        Math.random() * mechaChassisStartingHitPointsDie
      );

      totalHitPointsRoll = rollHitPoints + mechaChassisStartingHitPointsBonus;

      totalArmorPointsRoll =
        mechaChassisArmorArmorPoints + mechaChassisShieldArmorPoints;

      setStartingHitPointsAttribute(totalHitPointsRoll);
      setStartingArmorPointsAttribute(totalArmorPointsRoll);
    }
    // Rolling
    rollChassisAttributes(
      mechaChassis.startingHitPointsDie,
      mechaChassis.startingHitPointsBonus,
      mechaChassis.armor.armorPoints,
      mechaChassis.shield.armorPoints,
      setMechaStartingHitPoints,
      setMechaStartingArmorPoints
    );

    setIsLoadingChassis(false);
  }

  function rollMechaImage() {
    let imagesNumber = 35;
    let randomImage = Math.floor(Math.random() * imagesNumber) + 1;
    setMechaImage(randomImage);
  }

  // Handle Rolling on Click
  function handleClick() {
    rollMechaCallsign();
    rollMechaPilot();
    rollMechaChassis();
    rollMechaImage();
  }

  // Generating Mecha on Reload
  useEffect(() => {
    rollMechaCallsign();
    rollMechaPilot();
    rollMechaChassis();
    rollMechaImage();
  }, []);

  // Displaying Presentational Components
  if (isLoadingPilot === false && isLoadingChassis === false) {
    return (
      <>
        <main className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <div className="lg:block md:hidden hidden border border-stone-50 h-[calc(100vh-8px)]">
            {" "}
            <img
              className="h-full w-full object-cover"
              src={`images/Mecha_${mechaImage}.png`}
            />
          </div>
          <div>
            <div className="grid gap-2">
              <Header
                className="border border-stone-50 p-2"
                mechaCallsign={mechaCallsign}
                mechaPilotName={mechaPilot.name}
                mechaChassisName={mechaChassis.name}
                handleClick={handleClick}
              />
              <Statistics
                className="border border-stone-50 p-2"
                mechaPower={mechaPower}
                mechaMobility={mechaMobility}
                mechaSystem={mechaSystem}
                mechaPresence={mechaPresence}
                mechaStartingHitPoints={mechaStartingHitPoints}
                mechaStartingArmorPoints={mechaStartingArmorPoints}
                mechaChassisHitDie={mechaChassis.hitDie}
                mechaChassisDamageDie={mechaChassis.damageDie}
                mechaChassisReactorDie={mechaChassis.reactorDie}
              />
              <section className="border border-stone-50 p-2 grid gap-1">
                <Label>Levelling Up</Label>
                <p>{mechaChassis.levelUp}</p>
              </section>
            </div>
          </div>
          <div className="grid gap-2">
            <PilotDetails
              className="border border-stone-50 p-2"
              mechaPilotDescription={mechaPilot.description}
              mechaPilotPrimaryAbilityName={mechaPilot.primaryAbility.name}
              mechaPilotPrimaryAbilityPower={mechaPilot.primaryAbility.power}
              mechaPilotPrimaryAbilityMobility={
                mechaPilot.primaryAbility.mobility
              }
              mechaPilotPrimaryAbilitySystem={mechaPilot.primaryAbility.system}
              mechaPilotPrimaryAbilityPresence={
                mechaPilot.primaryAbility.presence
              }
              mechaPilotSecondaryAbilityName={mechaPilot.secondaryAbility.name}
              mechaPilotSecondaryAbilityDescription={
                mechaPilot.secondaryAbility.description
              }
            />
            <ChassisDetails
              className="border border-stone-50 p-2"
              mechaChassisDescription={mechaChassis.description}
              mechaChassisWeaponRules={mechaChassis.weaponRules}
              mechaChassisArmorName={mechaChassis.armor.name}
              mechaChassisArmorArmorPoints={mechaChassis.armor.armorPoints}
              mechaChassisHandWeaponName={mechaChassis.handWeapon.name}
              mechaChassisHandWeaponDamageBonus={
                mechaChassis.handWeapon.damageBonus
              }
              mechaChassisRangedWeaponName={mechaChassis.rangedWeapon.name}
              mechaChassisRangedWeaponDamageBonus={
                mechaChassis.rangedWeapon.damageBonus
              }
              mechaChassisShieldName={mechaChassis.shield.name}
              mechaChassisShieldArmorPoints={mechaChassis.shield.armorPoints}
              mechaChassisPrimaryAbilityName={mechaChassis.primaryAbility.name}
              mechaChassisPrimaryAbilityDescription={
                mechaChassis.primaryAbility.description
              }
              mechaChassisSecondaryAbilityName={
                mechaChassis.secondaryAbility.name
              }
              mechaChassisSecondaryAbilityDescription={
                mechaChassis.secondaryAbility.description
              }
            />
          </div>
        </main>
        <Footer className=" text-stone-700 p-2" />
      </>
    );
  }
}
