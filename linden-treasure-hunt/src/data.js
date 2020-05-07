const maps = [{
    id:1,
    title: "Rock Wall Hunt",
    stamp: "/img/treasure/sattelite1.jpg",
    level:"easy",
    location: "neighborhood",
    details:"A quick and easy hunt in the neighborhood to get everyone excited. Or, more honestly, to see if this is something they're into or not.",
    clues:[
        {
            clue:"Start down Winslow Drive toward the end of the circle. Be on the lookout for the fire alarm at the farthest end of the circle.",
            image: "/img/clues/alarm.jpg",
            clicked:false
        },
        {
            clue:"At the fire alarm search the houses for number 10. Or, pretend you're educating your child by turning it into a math problem or a counting question so they come up with 10 as the answer. Then pat your back for being a great parent.",
            image:"/img/clues/myhouse.jpg",
            clicked:false
        },
        {
            clue:"Head up the driveway and be on the lookout for a rock in the wall that doesn't look like the others.",
            image:"/img/clues/rockwall1.jpg",
            clicked:false
        }
    ],
    parentsNeeded:false
},
{
    id:2,
    title: "Train Track Treasure",
    stamp: "/img/treasure/star.jpg",
    level:"easy",
    location: "woods",
    details:"Just into the woods and a safe place to watch the trains go by.",
    clues:[
        {
            clue:"Start down Winslow Drive toward the end of the circle. Make your way to the start of the trail leading into the woods.",
            image: "/img/clues/trailhead1.jpg",
            clicked:false
        },
        {
            clue:"As you enter the woods, walk towards the train tracks. There is a fork in the path. The path to the right goes down to the train tracks and your trail goes left on the hill along side of the train tracks. DO NOT GO DOWN TO THE TRAIN TRACKS. Take the path leading to the left.",
            image: "/img/clues/traintrackfork.jpg",
            clicked:false
        },
        {
            clue:"Continue on the path until you find an old telephone pole.",
            image: "/img/clues/telephonepole.jpg",
            clicked:false
        },
        {
            clue:"Search around the base of the pole for a strange rock covering the treasure.",
            image: "/img/clues/telephonerock.jpg",
            clicked:false
        }
    ],
    parentsNeeded:false
},
{
    id:3,
    title: "The Leaning Pine",
    stamp: "/img/treasure/earth.jpg",
    level:"medium",
    location: "woods",
    details:"Down the path a little makes this a somewhat trickier. A big leaning pine tree helps this hiding spot stick out.",
    clues:[
        {
            clue:"To start, enter the woods at the trailhead either at the end of Winslow Drive or Squire Way. Look for the trailhead markers that say 'Trail'",
            image: "/img/clues/trailhead2.jpg",
            clicked:false
        },
        {
            clue:"Head towards the river and take the path that stays closest to the river. Keep the river on your left side. I'm not sure if this image clue is helpful, but it's supposed to show that you should keep to the left at forks to stay on the river path.",
            image: "/img/clues/pathfork.jpg",
            clicked:false
        },
        {
            clue:"Be on the lookout for a big pine tree that leans far over the river, almost to the other side.",
            image: "/img/clues/leaningpine.jpg",
            clicked:false
        },
        {
            clue:"The treasure is buried under a rock and a tree root at the base of a tree near the leaning pine",
            image: "/img/clues/hidden.jpg",
            clicked:false
        },
    ],
    parentsNeeded:true
},
{
    id:4,
    title: "Log Hole",
    stamp: "/img/treasure/ufo.jpg",
    level:"hard",
    location: "woods",
    details:"Deep in the woods and a fun hiding spot, however there aren't many descriptive features nearby so stay vigilant. The hiding spot is slightly to the side of the trail.",
    clues:[
        {
            clue:"To start, enter the woods at the trailhead either at the end of Winslow Drive or Squire Way. Look for the trailhead markers that say 'Trail'",
            image: "/img/clues/trailhead2.jpg",
            clicked:false
        },
        {
            clue:"Take the trail along the river leading away from the train tracks. Keep to the left at forks to stay on the river path. You'll be on this path for a while.",
            image: "/img/clues/pathfork.jpg",
            clicked:false
        },
        {
            clue:"You will cross a couple bridges and trudge through some muck. Eventually, you will come to a section of the trail where a large tree, and a few smaller ones, had fallen and have been cut to clear the path. You're close now!",
            image: "/img/clues/holelogpath.jpg",
            clicked:false
        },
        {
            clue:"Not far ahead will be a cedar tree on your left. About 10ft beyond that and on your right will be a log with a hole in it.",
            image: "/img/clues/holelogpath2.jpg",
            clicked:false
        },
        {
            clue:"Look inside the log with the hole in it and you will find the treasure.",
            image: "/img/clues/hiddenlog.jpg",
            clicked:false
        }
    ],
    parentsNeeded:true
},
{
    id:5,
    title: "Trail Wall Treasure",
    stamp: "/img/treasure/sun.jpg",
    level:"easy",
    location: "neighborhood",
    details:"A brief woods adventure that doesn't count as leaving the neighborhood in my books.",
    clues:[
        {
            clue:"Start down Winslow Drive toward the end of the circle. Make your way to the start of the trail leading into the woods.",
            image: "/img/clues/trailhead1.jpg",
            clicked:false
        },
        {
            clue:"Walk along the trail leading away from the train tracks. Take the path that leads to the other trailhead on Squire Way.",
            image: "/img/clues/pathforkright.jpg",
            clicked:false
        },
        {
            clue:"As you get close to the trailhead marker you'll notice that there is a retaining wall keeping the path in place. Is there a strange looking rock in the wall?",
            image: "/img/clues/pathwall.jpg",
            clicked:false
        },
        {
            clue:"Here's an extra picture clue. Yes, there is a faster way to get to this spot, but where's the fun in that?",
            image: "/img/clues/pathwall2.jpg",
            clicked:false
        }
    ],
    parentsNeeded:false
},
{
    id:6,
    title: "Yard Waste Treasure",
    stamp: "/img/treasure/rocket.jpg",
    level:"medium",
    location: "neighborhood",
    details:"Time to explore another part of the neighborhood.",
    clues:[
        {
            clue:"As you head out of the neighborhood there is a small pond full of reeds called cattails, and next to the pond is a little house of mystery. What goes on in there? Walk to that house and check it out.",
            image: "/img/clues/pumphouse.jpg",
            clicked:false
        },
        {
            clue:"Once you've figured out what goes on in the little house, continue down the road to the trailhead that starts at the curve in road.",
            image: "/img/clues/distanttrailhead.jpg",
            clicked:false
        },
        {
            clue:"Head down the trail, but not too far. You'll quickly see a big fenced in area where everyone dumps their yard waste. It's surprisingly empty considering everyone uses it huh? I know I do. Totally. Anyway, one of the fence posts has a yellow hiking trail marker. Look under the rocks at the base of this post.",
            image: "/img/clues/fencepost.jpg",
            clicked:false
        }
    ],
    parentsNeeded:false
}
]

export default maps
