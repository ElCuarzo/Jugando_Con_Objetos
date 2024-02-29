var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27},
    {name: "Diego", age:17}
];

// ¿Cómo harías print/log de la edad de John?
var john = users.find(function(users){
    return users.name === "John";
});

if (john) {
    console.log("la edad de Jhon es:", john.age)
}
else {
    console.log("John no ha sido encontrado")
}

// ¿Cómo harías print/log del nombre del primer objeto?

var edad_primero = users[0].name;
console.log("El nombre del primer objeto es:", edad_primero)

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto

    for (var i = 0; i < users.length; i++){
            console.log("-Nombre:", users[i].name, "-Edad:", users[i].age)
        }

// ¿Cómo harías para imprimir el nombre de los mayores de edad?

        for (var i = 0; i < users.length; i++){
            if (users[i].age >= 18){
                console.log(users[i].name)
            }
        }