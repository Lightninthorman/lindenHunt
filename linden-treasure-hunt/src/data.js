const maps = [{
    id:1,
    title: "Rock Wall Hunt",
    stamp: "/images/treasure/earth.jpg",
    level:"easy",
    location: "neighborhood",
    details:"A quick and easy hunt in the neighborhood to get everyone excited. Or, more honestly, to see if this is something they're into or not.",
    clues:[
        {
            clue:"Start down Winslow Drive toward the end of the circle. Be on the lookout for the fire alarm at the farthest end of the circle.",
            image: "/images/clues/alarm.jpg",
            clicked:false
        },
        {
            clue:"At the fire alarm search the houses for number 10. Or, pretend you're educating your child by turning it into a math problem or a counting question so they come up with 10 as the answer. Then pat your back for being a great parent.",
            image:"images/clues/myhouse.jpg",
            clicked:false
        },
        {
            clue:"Head up the driveway and be on the lookout for a rock in the wall that doesn't look like the others.",
            image:"images/clues/rockwall1.jpg",
            clicked:false
        }
    ],
    parentsNeeded:false
},
{
    id:2,
    title: "Secret in the trees",
    stamp: "/images/treasure/ufo.jpg",
    level:"medium",
    location: "woods",
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    parentsNeeded:false
},
{
    id:3,
    title: "On the Train Trail",
    stamp: "/images/treasure/rocket.jpg",
    level:"easy",
    location: "woods",
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    parentsNeeded:true
},
{
    id:4,
    title: "Too Hard for Most",
    stamp: "/images/treasure/sattelite.jpg",
    level:"hard",
    location: "woods",
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    parentsNeeded:true
},
{
    id:5,
    title: "Howdy Neigbors!",
    stamp: "/images/treasure/star.jpg",
    level:"easy",
    location: "neighborhood",
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    parentsNeeded:false
},
{
    id:6,
    title: "Who's Out There?",
    stamp: "/images/treasure/sun.jpg",
    level:"medium",
    location: "neighborhood",
    details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    parentsNeeded:false
}
]

export default maps
