//array users => copy array users => change copy =>
// => use copy users with changes

const user = {      // #567
  name: "Bob",
  age: 23
}

const user2 = user; // #567
user2.name = "Alex";
console.log(user2.name); // "Alex"

const copyUser = {...user} // copy object user
/*copyUser.name = user.name;
copyUser.age = user.age;*/

const arr = [1,2,3,4,5];
const arr2 = [ ...arr ];

const state = [
  {
    id: 1,
    name: "Bob",
    isStudent: true,
    adress: {}
  },
  {
    id: 2,
    name: "Peter",
    isStudent: false,
    adress: {}
  },
  {
    id: 3,
    name: "Ann",
    isStudent: true,

  }
]

/*
const copyState = [...state]; //поверхностная копия
const copyState2 = [
  {...state[0]},
  {...state[1]},
  {...state[2]},
];

const copyState3 = state.map(value => ({...value, adress: {...value.adress}}));
console.log(copyState3);*/

const copyState = state.map(st => st.id === 3 ? {...st, name: "Anne"} : st);
console.log(copyState);