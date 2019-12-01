class Animal {

    get eyeColor() {
        return this._eyeColor;
    }
    set eyeColor(value) {
        this._eyeColor = value;
    }
    get hairColor() {
        return this._hairColor;
    }
    set hairColor(value) {
        this._hairColor = value;
    }
}

let vit = new Animal();
vit.eyeColor = "yellow";
console.log(vit);
