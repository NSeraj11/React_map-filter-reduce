const players = [
    {
        name:"Lebron James",
        number: "23",
        team: "Lakers",
        position: "SF",
        chips: 4
    },
    {
        name: "Stephen Curry",
        number: "30",
        team: "Warriors",
        position: "PG",
        chips: 4
    },
    {
        name: "Giannis Antetekumpo",
        number: "34",
        team:"Bucks",
        position: "SF",
        chips: 1
    }
];

console.log(players);

const names = players.map(person => {
    return person.name;
});

console.log(names);





const forwards = players.filter(person => {
    return person.position == "SF";
}).map(person => {
    return person.name;
});

console.log(forwards);





const totalChips = players.reduce((total, person) => {
  return total + person.chips;   
}, 0);

console.log(totalChips);




