import * as Helper from "./helper";

export class Tag {
    constructor(name){
        this.name = name;
    }
}

export class TagGroup extends Tag{
    constructor(name, tags){
        this.name = name;
        this.tags = tags;
    }

    getByName(name){
        for (let i = 0; i < tags.length; i++){
            let t = tags[i];
            if (t.name == name){
                return t;
            }
        }

        return null;
    }

    getRandom(){
        return tags[Helper.GetRandomInt(0, tags.length)];
    }

    getIndexOf(name){
        for (let i = 0; i < tags.length; i++){
            let t = tags[i];
            if (t.name == name){
                return t;
            }
        }

        return -1;
    }
}

export class TagRange extends TagGroup {
    constructor(name, tags){
        super(name, tags);
    }

    getBelowTrait(name){
        let tindex = getIndexOf(name);

        if (tindex != -1){
            return tags[Helper.GetRandomInt(0, tindex + 1)];
        }
        else {
            return -1;
        }
    }

    getAboveTrait(name){
        let tindex = getIndexOf(name);

        if (tindex != -1){
            return name[Helper.GetRandomInt(tindex, tags.length)];
        }
        else {
            return -1;
        }
    }
}