import {v4 as uuidv4} from "uuid";

function chillHop(){
    return([
        {
            name:"Slim Bobby",
            artist: "Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
            color: ["#B76CB3", "#657CAD"],
            uuid: uuidv4(),
            active: true,
        },
        {
            name:"Hidden Structure",
            artist: "Leavv, Flitz&Suppe",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            color: ["#B76CB3", "#657CAD"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Aqueduct",
            artist: "Leavv",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9921",
            color: ["#4F7F77", "#83C2AC"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Faces",
            artist: "Knowmadic",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8554",
            color: ["#62A4F7", "#383F6A"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Maple Leaf Pt.2",
            artist: "Philanthrope",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
            color: ["#8A543B", "#CC583B"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Sleepover",
            artist: "Nymano, JK the Sage",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
            color: ["#5e508c", "#A06F88"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Sodium",
            artist: "Philanthrope, Tesk",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
            color: ["#20212D", "#3A324A"],
            uuid: uuidv4(),
            active: false,
        },
        {
            name:"Flke",
            artist: "Philanthrope",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8780",
            color: ["#20212D", "#3A324A"],
            uuid: uuidv4(),
            active: false,
        },

    ]);
}

export default chillHop;