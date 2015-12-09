var Period = {
        A: {
            name: "A",
            color: "#e57373"
        },
        B: {
            name: "B",
            color: "#4DB6AC"
        },
        C: {
            name: "C",
            color: "#4FC3F7"
        },
        D: {
            name: "D",
            color: "#AED581"
        },
        E: {
            name: "E",
            color: "#FFF176"
        },
        F: {
            name: "F",
            color: "#FF8A65"
        },
        G: {
            name: "G",
            color: "#F06292"
        },
        Tutorial: {
            name: "Tutorial",
            color: "#7986CB"
        },
        Lunch: {
            name: "Lunch",
            color: "#FFECB3"
        },
        Brunch: {
            name: "Brunch",
            color: "#ffcdd2"
        },
        Assembly: {
            name: "Assembly",
            color: "#FFD54F"
        },
        Staff: {
            name: "Staff",
            color: "#FFD54F"
        },
        Done: {
            name: "School's out",
            color: "#000000"
        }
    };
	

var schedules = {
	"default": {
        "Monday": [
            {type: Period.A, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.B, time: '10:00'},
            {type: Period.C, time: '11:25'},
            {type: Period.Lunch, time: '12:40'},
            {type: Period.D, time: '13:20'},
            {type: Period.Staff, time: '14:45'},
            {type: Period.Done, time: '15:35'}
        ],
        "Tuesday": [
            {type: Period.E, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.Tutorial, time: '10:00'},
            {type: Period.A, time: '11:00'},
            {type: Period.Lunch, time: '12:15'},
            {type: Period.F, time: '12:55'},
            {type: Period.G, time: '14:20'},
            {type: Period.Done, time: '15:35'}
        ],
        "Wednesday": [
            {type: Period.B, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.C, time: '10:00'},
            {type: Period.D, time: '11:25'},
            {type: Period.Lunch, time: '12:40'},
            {type: Period.F, time: '13:20'},
            {type: Period.Staff, time: '14:45'},
            {type: Period.Done, time: '15:35'}
        ],
        "Thursday": [
            {type: Period.E, time: '8:30'},
            {type: Period.Brunch, time: '9:50'},
            {type: Period.A, time: '10:05'},
            {type: Period.B, time: '11:30'},
            {type: Period.Lunch, time: '12:45'},
            {type: Period.G, time: '13:25'},
            {type: Period.Tutorial, time: '14:50'},
            {type: Period.Done, time: '15:35'}
        ],
        "Friday": [
            {type: Period.C, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.D, time: '10:00'},
            {type: Period.E, time: '11:25'},
            {type: Period.Lunch, time: '12:35'},
            {type: Period.F, time: '13:15'},
            {type: Period.G, time: '14:35'},
            {type: Period.Done, time: '15:45'}
        ]
    }, 
	
	"staffApp" : {
		"Monday": [
            {type: Period.A, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.B, time: '10:00'},
            {type: Period.C, time: '11:25'},
            {type: Period.Lunch, time: '12:40'},
            {type: Period.D, time: '13:20'},
            {type: Period.Staff, time: '14:45'},
            {type: Period.Done, time: '15:35'}
        ],
        "Tuesday": [
            {type: Period.E, time: '8:30'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.Tutorial, time: '10:00'},
            {type: Period.A, time: '11:00'},
            {type: Period.Lunch, time: '12:15'},
            {type: Period.F, time: '12:55'},
            {type: Period.G, time: '14:20'},
            {type: Period.Done, time: '15:35'}
        ],
        "Wednesday": [
            {type: Period.B, time: '8:25'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.C, time: '10:00'},
            {type: Period.D, time: '11:25'},
            {type: Period.Lunch, time: '12:40'},
            {type: Period.F, time: '13:20'},
            {type: Period.Staff, time: '14:45'},
            {type: Period.Done, time: '15:35'}
        ],
        "Thursday": [
            {type: Period.E, time: '8:25'},
            {type: Period.Brunch, time: '9:45'},
            {type: Period.A, time: '10:00'},
            {type: Period.B, time: '11:20'},
            {type: Period.Lunch, time: '12:30'},
            {type: Period.G, time: '13:30'},
            {type: Period.Tutorial, time: '14:50'},
            {type: Period.Done, time: '15:35'}
        ],
        "Friday": [
            {type: Period.C, time: '8:25'},
            {type: Period.Brunch, time: '9:40'},
            {type: Period.D, time: '9:55'},
            {type: Period.E, time: '11:15'},
            {type: Period.Lunch, time: '12:25'},
            {type: Period.F, time: '13:05'},
            {type: Period.G, time: '14:25'},
            {type: Period.Done, time: '15:35'}
        ]
	}
};
	
var dates = {
	"1106" : schedules["staffApp"]
};
	
