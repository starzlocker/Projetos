let obj = {
    name: "Adolfo",
    sayName: function() {
        console.log(obj.name);
    }
}

obj.sayName()

function Obj(name) {
    this.name = name;

    sayName = function() {
        console.log(name)
    }
}

let obj2 = new Obj("julio")
obj2.sayName()