import Header from './header.jsx'
import Navbar from './navbar.jsx'
import Guildmembers from './guildmembers.jsx';
import Footer from './footer.jsx';
import Beacons from './beacon.jsx';
import Button from './button/button.jsx'
import Shabeb from './shabeb.jsx';
import Guildlogin from './guildlogin.jsx';
import Guildslist from './guildslist.jsx';
import Leafvillagemission from './leafvillagemissions.jsx';
import Missionrequirements from './missionrequirements.jsx';
import Guilddictionary from './guilddictionary.jsx';
import Joinableguilds from './joinableguilds.jsx';
import Guildevent from './guildevent.jsx';
import Shinobimissions from './shinobimissions.jsx';
import Moreguildevents from './moreguildevents.jsx';
import Favouriteevents from './favouriteevents.jsx';
import Rasengan from './RASENGAN.jsx';
import Sagemode from './sagemode.jsx';
import Chidori from './Chidori.jsx';
import Jutsu from './Jutsu.jsx';
import Training from './trainingnaruto.jsx';
import Counter from './counter.jsx';
import Beaconsystem from './Beaconsystem.jsx';
import ChakraCalulator from './Chakracounter.jsx';
import NarutovsSasuke from './NarutovsSasuke.jsx';
import ChangeEvent from './changeevent.jsx';
import Practice from './Practiceevents.jsx';
import Missiontrack from './missiontrackerleaf.jsx';
import Status from './chakratrainingstatus.jsx';
import CharacterBuild from './characterbuilder.jsx';
import Jutsuinformation from './jutsuinfo.jsx';
import GOTY from './goty.jsx';
import Ninjamaker from './ninjavillage.jsx';
import UseJutsu2 from './anotherjutsu.jsx';
import Eventmade from './eventmaker.jsx';
import Adventurelog from './Missionsforyear2026.jsx';
import Listmanipulation from './listmanipulation.jsx';
import PracticeBeaconSystem from './practicebeaconsystem.jsx';
function App() {

const beacons = [
    {id:1, host: 'Elias', event: 'Coffee', spots: 3, location: "Oregano's Middle Eats Cafe Reservoir"},
    {id:2, host: 'Abe', event: 'Gym Push Session', spots: 0, location: "Als Gym Campbellfield" },
    {id:3, host: 'Hadi', event: 'Gooning Session', spots: 2, location: "Hadi's House"},
    {id:4, host: 'Charbel T', event: 'Tabets Bakery Feed', spots: 7, location: "Tabet's Bakery Epping"},
    {id:5, host: 'Elie', event: 'Ugg and Kick back', spots: 3, location: "Elie's House"},
    {id:6, host: 'Mikhael', event: 'Youth Fellowship: Basketball and dinner', spots: 7, location: "St Georges Cathedral Youth Center"},


]

const members = [
    {id: 1, name: 'Elias', status: 'Leader', meetupshosted:'79'},
    {id: 2, name: 'Abe', status: 'Co Leader', meetupshosted: '57' },
    {id: 3, name: 'Hadi', status: 'Admin', meetupshosted: '43'},
    {id: 4, name: 'Maxim', status: 'Member', meetupshosted:'56'},
    {id: 5, name: 'Charbel T', status: 'Member', meetupshosted: '69' },
    {id: 6, name: 'Charbel K', status: 'Member', meetupshosted: '23'},
    {id: 7, name: 'Elie', status: 'Member', meetupshosted:'12'},
    {id: 8, name: 'Jacob', status: 'Member', meetupshosted: '9' },
    {id: 9, name: 'Johnny', status: 'Member', meetupshosted: '7'},
]

const leafvillage = [
    {id: 1, name: 'Naruto', status: 'Hokage', meetupshosted:'79'},
    {id: 2, name: 'Sasuke', status: 'Protector', meetupshosted: '57' },
    {id: 3, name: 'Shikamaru', status: 'Assistant', meetupshosted: '43'},
    {id: 4, name: 'Rock Lee', status: 'Member', meetupshosted:'56'},
    {id: 5, name: 'Kakashi', status: 'Member', meetupshosted: '69' },
    {id: 6, name: 'Kiba', status: 'Member', meetupshosted: '23'},
    {id: 7, name: 'Sai', status: 'Member', meetupshosted:'12'},
    {id: 8, name: 'Neji', status: 'Member', meetupshosted: '9' },
    {id: 9, name: 'Shino', status: 'Member', meetupshosted: '7'},
]

const missions = [
  {id: 1, title: 'Rescue Sasuke', rank: 'S', status:"active", reward: 5000, spots: 0},
  {id: 2, title: 'Escort Tazuna', rank: 'A', status:"complete", reward: 400, spots: 4},
  {id: 3, title: 'Infiltrate the Hidden Rain', rank: 'S', status:"active" , reward: 300 , spots: 2},
  {id: 4, title: 'Find a lost cat', rank: 'D', status: "complete" , reward: 300 , spots: 4},
  {id: 5, title: 'Buy Ramen for home', rank: 'D', status:"active" , reward: 200, spots: 1},
  {id: 6, title: "Rescue Villager", rank: "D", status:"active",  reward: 50, spots: 3 },
  {id: 7, title: "Defeat Rogue Ninja", rank: "S", status:"active", reward: 500, spots: 0 },
  {id: 8, title: "Escort Merchant", rank: "B", status:"active", reward: 150, spots: 2 },
  {id: 9, title: "Spy on Enemy Village", rank: "A", status:"complete", reward: 300, spots: 1 },
]


const guilds = [
    {id:0, name: 'shabeb', members: 9, status: "closed",},
    {id:1, name: 'Fairy Tail', members: 100, status: "invite only",},
    {id:2, name: 'Konoha', members: 10000, status: "public",},
    {id:3, name: 'StrawHat Crew', members: 10, status: "invite only",},
    {id:4, name: 'The Akatsuki', members: 10, status: "invite only",},
    {id:5, name: 'Avalanche', members: 6, status: "invite only",},
    {id:6, name: 'Group 935', members: 40, status: "closed",},
]





  return(
<>
<Header/>
<Button/>
<Rasengan/>
<Missiontrack/>
<ChakraCalulator/>
<Shabeb name=" Elzi" role=  " Leader" isactive = {true}/>
<Shabeb name=" Abe" role=  " Co-Leader" isactive = {true}/>
<Shabeb name=" Hadi" role=  " Admin" isactive = {false}/>
<Guildlogin isLoggedin = {false} username = 'ELIASZAK'/>
{members.length > 0 && <Guildslist items = {members} category = " Members"/>}  {/*the keys=value next to the component is a prop and it will be passed into the component jsx file it is next to and be used accordingly
This one in particular has a members array being stored inside which is the literal thing that will be sent alongside the category assigned the string of 'Members'*/}
{leafvillage.length > 0 && <Guildslist items = {leafvillage} category = "Konoha"/>}
<Leafvillagemission items = {missions}/>
<Missionrequirements items = {missions}/>
<Guilddictionary items = {guilds} header = "Joinable Guilds"/>
<Joinableguilds items = {guilds} header = "Joinable Guild"/>
<Guildmembers items = {beacons}/>
<Guildevent items = {beacons}/>
<Shinobimissions items ={missions}/>
<Moreguildevents items = {beacons}/>
<Favouriteevents items = {beacons}/>
<Beacons/>
<Chidori/>
<Sagemode/>
<NarutovsSasuke/>
<Jutsu/>
<Beaconsystem/>
<ChangeEvent/>
<Counter/>
<Training/>
<Practice/>
<Navbar/>
<Status/>
<CharacterBuild/>
<Jutsuinformation/>
<GOTY/>
<Ninjamaker/>
<UseJutsu2/>
<Eventmade/>
<Adventurelog/>
<Listmanipulation/>
<PracticeBeaconSystem/>
<Footer/>

</>
   
  ); 
  

}

export default App
