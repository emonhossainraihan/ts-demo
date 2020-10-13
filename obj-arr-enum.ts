// :object didn't help with auto completion

enum Role { ADMIN, READ_ONLY, AUTHOR };

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// const person: {
//     name: string;
//     age: number;
// hobbies: string[];
// role: [number, string]; // tuple
// } = {
const person = {
    name: 'Emon Hossain',
    age: 21,
    hobbies: ['eating', 'coding'],
    // role: [2, 'Author']
    role: Role.AUTHOR

}

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('Person is Admin')
}