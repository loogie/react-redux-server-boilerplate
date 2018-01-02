import * as Helper from "./helper";

import {Tag, TagGroup, TagRange} from "./Tag";
import Relationship from "./Relationship";
import Person from "./Person";

const tmpNameCount = 0;

export const Traits = {
    sex: new TagGroup("sex", [
        new Tag("male"),
        new Tag("female")
    ]),
    age: new TagRange("age",[
        new Tag("baby"),
        new Tag("child"),
        new Tag("young adult"),
        new Tag("adult"),
        new Tag("elderly"),
    ]),
    hair: new TagGroup("hair", [
        new Tag("blonde hair"),
        new Tag("brown hair"),
        new Tag("black hair"),
        new Tag("red hair"),
    ]),
    eyes: new TagGroup("eyes", [
        new Tag("blue eyes"),
        new Tag("brown eyes"),
        new Tag("green eyes"),
    ]),
}

export function Init(){
    Helper.addTags(new TagGroup("Human", Traits));
}

function generateName(inputs){
    tmpNameCount++;
    return "Person" + tmpNameCount;
}

export function CreateFamily(){

    let mom = new Person(name, {
        appearance: {
            sex: "female",
            age: Traits.age.getAboveTrait("child"),
            hair: Traits.hair.getRandom(),
            eyes: Traits.eyes.getRandom()
        }
    });
    
    let dad = new Person(name, {
        appearance: {
            sex: "male",
            age: Traits.age.getAboveTrait("child"),
            hair: Traits.hair.getRandom(),
            eyes: Traits.eyes.getRandom()
        }
    });

    let childAge = Traits.age.getBelowTrait(mom.appearance.age);
}

export function CreatePerson(sex, age, hair, eyes){
    let name = generateName(); 
    return new Person(name);
}