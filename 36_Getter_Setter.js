// Getters = special meathod that make a property readable.
// Setters = special meathod that make a property writeable.

// we can validate or modify a value when reading/writing a property 

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error(`Width must be a +ve number`)
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error(`Height must be a +ve number`)
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);