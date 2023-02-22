const usersDB =[
    {
        id:1,
        name:"mathias",
        time:"12:45pm",
        Comment:"this is lagos, can we meet up ",
    },
    {
        id:2,
        name:"mama",
        time:"12:40pm",
        Comment:"i'm from lagos can we meet up ",
    },
    {
        id:3,
        name:"grace",
        time:"12:39pm",
        Comment:" i just arrive from lagos ",
    },
    {
        id:4,
        name:"obotu",
        time:"12:35pm",
        Comment:"hello friend ,  can we meet up ",
    },
    {
        id:5,
        name:"ada",
        time:"12:30pm",
        Comment:"lagos can we meet up ",
    },
    {
        id:6,
        name:"moses",
        time:"12:30pm",
        Comment:"in  lagos can we meet up ",
    },
    {
        id:7,
        name:"simon",
        time:"12:29pm",
        Comment:" arrive from lagos can we meet up ",
    },
    {
        id:8,
        name:"emmanuel",
        time:"12:25pm",
        Comment:" i just arrive from lagos can we meet up ",
    },
    {
        id:9,
        name:"mathias",
        time:"12:20pm",
        Comment:"hello friend , where are you from ",
    },
];
const displayFeed = document.getElementById("displayFeed");

let html = "";

usersDB.map((user,index,array) => {
    html =
    html +
    `
    <div class="timeline-feed-grp">
                <div class="timeline-feed-grp-col-1">
                    <img src="./WhatsApp Image 2023-02-01 at 10.27.22 AM (6).jpeg" alt="">
                </div>

                <div class="timeline-feed-grp-col-2">
                    <div class="timeline-feed-grp-col-2-row-1">
                        ${user.Comment}
                    </div>
                    <div class="timeline-feed-grp-col-2-row-2">
                        ${user.Comment}
                    </div>
                    <div class="timeline-feed-grp-col-2-row-3">
                        ${user.Comment}
                    </div>
                </div>
            </div>`;

});

displayFeed.innerHTML = html;