//get the json file and parse it
var blbJson = {};
fetch('/assets/generator_resources/leftburied.json')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        blbJson = data;
        grabParamsURL();
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

var seedCode;
var modeGen = "archetype";
var humanBox;
var myrng;

function grabParamsURL(){
//if someone is loading a character code
if (window.location.search != ""){
  console.log(window.location.search);
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('code') && urlParams.get('mode') && urlParams.get('human')){
    seedCode = urlParams.get('code');
    modeGen = urlParams.get('mode');
    humanBox = urlParams.get('human');
    console.log("Found SeedCode: " + seedCode);
    console.log("Found Mode: " + modeGen);
    console.log("Found human: " + humanBox);
    //populate the generator with the saved info
    if (humanBox){
      document.getElementById("humanBox").checked = true;
    }
    blb_generate(modeGen, seedCode);
  } else {
    console.log("invalid code, using new code");
  }
} else {
  console.log("no params, using new code");
}
}

var CharName = "Test";

//helper function to simplify json lookups
function randomList(jsonList) {
  return jsonList[Math.floor(myrng() * jsonList.length)];
}
//used for properties instead of lists
function randomProperty(obj) {
  var keys = Object.keys(obj);
  return keys[Math.floor(myrng() * keys.length)];
};

function blb_generate(mode, oldSeed) {
  //create a new code if we don't have one
  if (!oldSeed){
    seedCode = (Math.random()*1e32).toString(36);
  } else {
    seedCode = oldSeed;
  }
  myrng = new Math.seedrandom(seedCode);
  
  //pick a random name
  CharName = randomList(blbJson.Names);

  //pick stats, "BRAWN WIT WILL"
  statStr = randomProperty(blbJson.Stats);
  stats = statStr.split(' ');
  brawn = parseInt(stats[0]);
  wit = parseInt(stats[1]);
  will = parseInt(stats[2]);
  vigour = brawn + 6;
  grip = will + 4;
  affluence = 1;

  //define Slot Limits
  slotLimit = 12 + (brawn * 2);
  if (will > wit) {
    slotLimit = slotLimit + will;
  } else {
    slotLimit = slotLimit + wit;
  }

  //choose archetypes and advancements
  abilityHTML = "";
  if (mode == "random") {
    if (document.getElementById("humanBox").checked) {
      ancestries = ["Dwarf", "Lamenter", "Gastropodian", "Awakened Automata", "Small Folk", "Elf"]
      archetype = "Dwarf";
      //re-roll archetypes until you pick a human one
      while (ancestries.includes(archetype)) {
        archetype = randomProperty(blbJson.Archetypes);
      }
    } else {
      archetype = randomProperty(blbJson.Archetypes);
    }
    advancement = randomProperty(blbJson.Advancements);
  } else if (mode == "archetype") {

    //if humans only, don't pick ancestries (just 0-5)
    if (document.getElementById("humanBox").checked) {
      archetype = blbJson.Stats[statStr][Math.floor(myrng() * 6)];
    } else {
      archetype = randomList(blbJson.Stats[statStr]);
    }
    advancement = randomList(blbJson.Archetypes[archetype].Advancements);
  }

  //Add abilities from archetype
  for (i = 0; i < blbJson.Archetypes[archetype].Abilities.length; i++) {
    ability = blbJson.Archetypes[archetype].Abilities[i];
    abilityHTML = abilityHTML +
      "<div class=\"col-md-5 col-11 sketchy\">" +
      "<h3>" + ability + "</h3>" +
      "<p>" + blbJson.Abilities[ability] + "</p></div>";
  }

  //Add Advancement
  abilityHTML = abilityHTML + "<div class=\"col-md-5 col-11 sketchy\">" +
    "<h3>Advancement: " + advancement + "</h3>" +
    "<p>" + blbJson.Advancements[advancement] + "</p></div>";

  //Equipment
  equipment = ["Rope (50')", "Torches (3)", "A Backpack", "A Bedroll", "Rations (1 week)", "Basic Armour"];

  if (mode == "random") {
    //add 3 random pieces of equipment
    for (i = 0; i < 3; i++) {
      equipList = randomProperty(blbJson.StatEquipment);
      equipment.push(randomList(blbJson.StatEquipment[equipList]));
    }
  } else if (mode == "archetype") {
    //pick equipment based on stats, avoid duplicates
    i = 0;
    while (i < brawn) {
      newItem = "Rope (50')";
      while (equipment.includes(newItem)) {
        newItem = randomList(blbJson.StatEquipment.Brawn);
      }
      equipment.push(newItem);
      i = i + 1;
    }
    i = 0;
    while (i < wit) {
      newItem = "Rope (50')";
      while (equipment.includes(newItem)) {
        newItem = randomList(blbJson.StatEquipment.Wit);
      }
      equipment.push(newItem);
      i = i + 1;
    }
    i = 0;
    while (i < will) {
      newItem = "Rope (50')";
      while (equipment.includes(newItem)) {
        newItem = randomList(blbJson.StatEquipment.Will);
      }
      equipment.push(newItem);
      i = i + 1;
    }
  }

  //Weapons
  weapon1 = "weapon";
  weapon2 = "weapon";

  if (mode == "random") {
    //just pick random weapons
    equipWeapon = randomProperty(blbJson.Weapons);
    weapon1 = randomList(blbJson.Weapons[equipWeapon]);
    equipWeapon = randomProperty(blbJson.Weapons);
    weapon2 = randomList(blbJson.Weapons[equipWeapon]);
  } else if (mode == "archetype") {
    //pick based on best stats
    switch (true) {
      case (will == 0):
        weapon1 = randomList(blbJson.Weapons.Brawn);
        weapon2 = randomList(blbJson.Weapons.Wit);
        break;
      case (brawn == 0):
        weapon1 = randomList(blbJson.Weapons.Will);
        weapon2 = randomList(blbJson.Weapons.Wit);
        break;
      case (wit == 0):
        weapon1 = randomList(blbJson.Weapons.Brawn);
        weapon2 = randomList(blbJson.Weapons.Will);
        break;
    }
  }
  //put weapons on the top
  equipment.unshift(weapon1, weapon2);

  //format items for display
  equipStr = "<ul>";
  for (i = 0; i < equipment.length; i++) {
    equipStr = equipStr + "<li>" + equipment[i] + "</li>";
  }
  equipStr = equipStr + "</ul>";

  /**console.log("Character: " + CharName +
    "\n Stats: " + stats +
    "\n Vigor: " + vigour +
    "\n Grip: " + grip +
    "\n Archetype: " + archetype +
    "\n Advancement: " + advancement +
    "\n Weapons: " + weapon1 + " | " + weapon2 +
    "\n Equipment: " + equipment);
    */

  //Set Info
  document.getElementById("charBR").innerHTML = brawn;
  document.getElementById("charWIT").innerHTML = wit;
  document.getElementById("charWILL").innerHTML = will;
  document.getElementById("charGRIP").innerHTML = grip;
  document.getElementById("charVIG").innerHTML = vigour;

  if (document.getElementById("humanBox").checked) {
    document.getElementById("charName").innerHTML = CharName + " the Human " + archetype;
  } else {
    document.getElementById("charName").innerHTML = CharName + " the " + archetype;
  }
  document.getElementById("description").innerHTML = "<p>" + blbJson.Archetypes[archetype].Description + "</p>";

  document.getElementById("charAbilities").innerHTML = abilityHTML;

  document.getElementById("charSlotLimit").innerHTML = "<i>" + slotLimit + " Max Item Slots</i>";
  document.getElementById("charItems").innerHTML = equipStr;

  document.getElementById("leftburiedCharacter").style.display = "block";
  //document.getElementById("leftburiedIntro").style.display = "none";

  //set the url to match the current code
  console.log("New SeedCode: " + seedCode);
  console.log("New Mode: " + mode);
  console.log("New human: " + document.getElementById("humanBox").checked);
  //urlParam = {'code':seedCode, 'mode':mode, "human":document.getElementById("humanBox").checked};
  //defaulturl = "https://www.technicalgrimoire.com/leftburiedgenerator";
  //window.history.pushState(urlParam,'',defaulturl);
  window.history.replaceState(null, null, "?code="+seedCode+"&mode="+mode+"&human="+document.getElementById("humanBox").checked);
  document.getElementById("saveCharacter").innerHTML = "<i>Bookmark this page to save your character, or <a href=\"" + window.location.href + "\"> copy this link</a>.</i>";
}