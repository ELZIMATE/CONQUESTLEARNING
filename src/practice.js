//nums = [1,2,3]

//const result = nums.map(n =>{n*2})

//console.log(result)






//const player = {
 // id: 7,
  //info: { username: "EliasDev", level: 12 },
  //stats: { hp: 90, mp: 50 }
//}


//const{info: {username}, id, stats:{hp}} = player //go into the player object and please pull out the username id and stats.hp individually of each
// if the obj we want is nested in {} we need to write the outter value info or stats and then the the {} with the inner.,

//console.log(username, id, hp) 


//const ninja = {
  //name: "Naruto",
  //rank: "Genin",
  //chakra: 100
//}

// TASK:
// Destructure ninja to get variables: name, rank, chakra
// Then log them in one line


//const{name, rank, chakra} = ninja

//console.log(name, rank, chakra)


//const ninja2 = {
  //info: {
    //username: "Sasuke",
    //clan: "Uchiha"
  //},
 // stats: {
    //chakra: 120,
    //stamina: 80
  //}
//}

// TASK:
// 1. Destructure info.username into a variable called `name`
// 2. Destructure stats.chakra and stats.stamina into variables chakra and stamina
// 3. Log: "Sasuke has 120 chakra and 80 stamina" using your variables


//const{info:{username:name}, stats:{chakra, stamina}, } = ninja2 //from ninja2 inside the info obj, pull out the username and alter it to be name. and from stats object we want tp pull chakr and stamina


//console.log(`${name} has ${chakra} chakra and ${stamina} stamina`)


//const missionControl = {
 // leader: { name: "Elias", rank: "Hokage" },
  //ninjas: [
    //{ info: { username: "Naruto" }, stats: { chakra: 100 } },
    //{ info: { username: "Sasuke" }, stats: { chakra: 120 } },
    //{ info: { username: "Sakura" }, stats: { chakra: 80 } }
  //],
  //missions: []
//}

// TASK:
// 1. Destructure leader.name into `hokageName`
// 2. Destructure the ninjas array into first, second, third ninja
// 3. Destructure each ninja to get username and chakra
// 4. Set a default chakra of 50 if missing
// 5. Log a summary like:
// "Hokage Elias has team: Naruto(100), Sasuke(120), Sakura(80)"



//const{leader:{name:hokageName}} = missionControl

//const[ninja, ninja2, ninja3] = missionControl.ninjas //from the mission controls array chain ninjas area and pull out in the order of the array obj make ninja, ninja1, ninja2
//the array with thse words takes the obj in ninjas in order of how they are and plugs them into each word ninja = Naruto, ninja2 = sasuke and so on...

//const{info:{username:un1}, stats:{chakra: chakra1}} = ninja //with each obj from array stored pull and destrcuture whilst renaming them how  we want 

//const{info:{username:un2}, stats:{chakra: chakra2}} = ninja2

//const{info:{username:un3}, stats:{chakra: chakra3}} = ninja3

//console.log(`${hokageName} has a team ${un1}(${chakra1}), ${un2}(${chakra2}), ${un3}(${chakra3})` ) //now with the individual elemnets make the messsage we want....


//const sword = {
  //name: "Shadow Blade",
  //damage: 50
//


//const{name, damage, rarity = 'Common'} = sword

//console.log(`the name of the sword is ${name}, it does ${damage}, ${rarity}`)

//const character = {
  //id: 99,
  //profile: {
    //username: "EliasDev",
    //title: "Code Ninja"
  //},
  //stats: {
    //hp: 100,
    //energy: 75
  //}
//}

//const{profile: {username, title}, stats : {hp, mana = 30}} = character


//console.log(`${title}, ${username} has ${hp} hp and ${mana} mana`)


//const squad = {
  //teamName: "Frontend Force",
  //members: [
    //{ info: { username: "Naruto" }, stats: { skill: 80 } },
    //{ info: { username: "Sasuke" }, stats: { skill: 95 } },
    //{ info: { username: "Sakura" }, stats: { skill: 70 } }
  //]
//}


//const{teamName} = squad 

//const[member1, member2, member3] =  squad.members //pull obj into variable corresponding to list order and number them

//const{info:{username:rival}, stats: {skill: rivalskills}} = member2 //pull out from each object what we want and assign the accurate variable we want it to be corresponding

//const{info:{username:useless}, stats: {skill: noskills}} = member3


//console.log(`Team 7 Front Force Core : ${rival}(${rivalskills}) & ${useless}(${noskills})`) //log new msg 

//const ninja = {
  //name: "Naruto",
  //chakra: 100
//}


//const newninja = {...ninja,
  //chakra: 70}


  //const{name, chakra} = newninja
  
  //console.log(name, chakra )


  //function fetchMission() {
  //return new Promise((resolve) => {
    //setTimeout(() => {
      //resolve({ mission: "Save the village", difficulty: "S" })
    //}, 2000)
  //})
//}


//const chooseshinobi = async() => {

//const shinobi = {name: "Naruto"}
//const{name} = shinobi
//return name 


//}


//async function startMission() {
  //console.log("Loading mission...")

  //const data = await fetchMission()
  //const thing = await chooseshinobi()

  //console.log("Mission received:", data.mission)
  //console.log("Difficulty:", data.difficulty)
  //console.log(thing)

//}

//startMission()



//refresher 

//const ninja = {
  //name: "Sasuke",
  //clan: "Uchiha",
  //stats: { chakra: 120, stamina: 80 }
//}


//const{name, stats: {chakra}} = ninja 

//console.log(name)
//console.log(chakra)


//const player = { hp: 100, level: 5 }

//const newobj = {...player, hp: 70}

//const{hp, level} = newobj 

//console.log(hp, level)

//const team = ["Naruto", "Sakura"]

//const fullteam = [...team, "Kakashi"]

//console.log(fullteam)

//const chakraLevels = [50, 80, 30]


//const chakradouble = chakraLevels.map(chakra => chakra*2)

//console.log(chakradouble)

//const ninjas = [
  //{ name: "Naruto", chakra: 100 },
  //{ name: "Rock Lee", chakra: 40 },
  //{ name: "Sasuke", chakra: 120 }
//]


//const eightyplus = ninjas.filter(ninja => ninja.chakra >= 80)

//console.log(eightyplus)

//function getMission() {
  //return new Promise(res =>
    //setTimeout(() => res("Rescue Mission"), 1000)
  //)
//}


//const finisher = async() => {
  //const resulter = await getMission()
  //console.log(resulter)
//}

//finisher()


//const user = {
  //profile: { username: "EliasDev" },
  //stats: { hp: 90 }
//}


//const{profile:{username:name}, stats: {hp: health}} = user

//console.log(name)




//const nums = [1,2,3]

//const doubled = nums.map(n => n*2)


//console.log(doubled)

//const player = {hp:100}
//const player2 = {health:80}
//const newplayer = {...player, ...player2}

//console.log(newplayer)

//3.
//when a stateful is changed 
//alters the value of the stateful variable it is in coherence with based on what is passed into it
//because useState causes the stateful variable to save the state on each rerender only changing if explicity told

//4. Condition and Component ran one after the other...








//const beacons = [
  //{ id: 1, attendees: [] },
  //{ id: 2, attendees: ["Alice"] }
//];


//const newBeacons = beacons.map(b => b.id === 1 ? {...b, attendees:[...b.attendees, 'Elzi']} : b)

//console.log(newBeacons)



//let beacons = [
  //{ id: 1, title: "Hangout", attendees: [] },
  //{ id: 2, title: "Game Night", attendees: ["Alice"] },
  //{ id: 3, title: "Study Group", attendees: [] }
//];

// Write this function
//function toggleAttendance(user, eventID) { //the function we have will toggle attendance of the people to the event
  //return beacons.map(b => b.id === eventID? {...b, attendees: b.attendees.includes(user)? b.attendees.filter(a => a !== user) //we will return the result of following
    //map out the beacons take the individual beacon get its id see if is the right one that was passed in on the consolelog arg
    //if it is now copy that beacon in and please check if the attendees section there has the user inside it.
    //if it does filter out the beacons attendees to only have those where the attendee is not the user.
     //: [...b.attendees, user]}: //if the beacon attendees in there doesnt include user we pass in replace with this array that copies in the previosu attendees and adds user ontop
      //b//if the id is not right return back the beacon as is
  // your code here

//)}

// TEST CASES
//console.log(toggleAttendance("Bob", 1)); // Add Bob to Hangout
//console.log(toggleAttendance("Alice", 2)); // Remove Alice from Game Night
//console.log(toggleAttendance("Charlie", 3)); // Add Charlie to Study Group




//let beacons = [
  //{ id: 1, title: "Hangout", attendees: [] },
  //{ id: 2, title: "Game Night", attendees: ["Alice"] },
  //{ id: 3, title: "Study Group", attendees: [] }
//];



//const idreturn = (beaconID, b) => {
  //return beacons.map(b => b.id === beaconID? {...b}: b )
//}


//console.log(idreturn(1))



//const userattending =(beaconID, user) => {
  //const beacon =  beacons.find(b => b.id === beaconID)
  //if(!beacon) return false
  //return beacon.attendees.includes(user)

//}



//console.log(userattending(1, 'Johnson'))
//console.log(userattending(2, 'Alice'))
//console.log(userattending(3, 'Peter'))




//const toggleUserAttendance = (beaconID, user) =>  {
  //return beacons.map(b => b.id === beaconID?{...b, attendees: b.attendees.includes(user)?b.attendees.filter(a => a !== user):
    //[...b.attendees, user]}: b)

//}


//console.log(toggleUserAttendance(1, 'Johnson'))
//console.log(toggleUserAttendance(2, 'Alice'))
//console.log(toggleUserAttendance(3, 'Peter'))







let beacons = [
  { id: 1, title: "Game Night", attendees: ["Alice", "Jane", "Mary"] },
  { id: 2, title: "Hangout", attendees: [] },
  { id: 3, title: "Study Group", attendees: ["Bob"] }
];

const toggleAttendance = (username, BeaconID) => {
const updatedBeacon = beacons.find(b => b.id === BeaconID) //we have selected the second beacon from the array

const attending =  updatedBeacon.attendees.includes(username)

 updatedBeacon.attendees = attending? updatedBeacon.attendees.filter(a => a !== username) : [...updatedBeacon.attendees, username]

return updatedBeacon



}



const toggleBeacons = (username, BeaconID) => {
  return beacons.map(b => { if( b.id !== BeaconID) return b 



return{...b, 
  attendees: b.attendees.includes(username)?
  b.attendees.filter(a => a !== username) : [b.attendees, username]

}
  })


}

console.log(toggleAttendance('Elzi', 2))

console.log(toggleBeacons('Elzi', 2))



const justattendees  = [...beacons[0].attendees].join('-')

console.log(justattendees)