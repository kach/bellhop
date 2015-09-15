~function() {
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
        Flex: {
            name: "Flex Time",
            color: "#FFFFFF"
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
    var Schedule = {
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
            {type: Period.Flex, time: '10:00'},
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
    };
/*
    moment.locale('en', {
        relativeTime : {
            future: "in %s",
            s:  "secs",
            m:  "min",
            mm: "%d mins",
            h:  "an hour",
            hh: "%d hrs",
        }
    });
*/
    
    var currentPeriodElement = null;
    function choose() {
        return arguments[Math.floor(Math.random()*arguments.length)];
    }

    function update() {
        document.getElementById('progressbar-container').style.display = 'none';
        if (currentPeriodElement) {
            currentPeriodElement.className = 'period';
        }
        var now = moment();
        var day = now.day();
        //var now = moment({hour: 16, minute: 00});
        //var day = 3;
        if (day === 0 || day === 6) {
            return weekend();
        }
        var dayname = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
        ][day - 1];
        [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
        ].forEach(function(name) {
            document.getElementById(name+'-col').className = 'column';
        });
        document.getElementById(dayname+'-col').className += ' today';

        var schedule = Schedule[dayname];

        for (var i=0; i<schedule.length; i++) {
            if (moment(schedule[i].time, 'hh:mm').isAfter(now)) {
                break;
            }
        }
        if (i == 0) {
            // Day hasn't started yet
            currentPeriodElement = null;
            var nextP    = schedule[i];
            document.getElementById('current-period').textContent = "Early morning!";
            document.getElementById('current-period').style.textShadow = '0 0 0';
            document.getElementById('next-period').textContent = nextP.type.name;
            document.getElementById('next-period').style.textShadow = '0 0 0.2em '+nextP.type.color;
            document.getElementById('next-time').textContent = moment(nextP.time, 'hh:mm').from(now);
        } else if (i >= schedule.length) {
            // School's out
            currentPeriodElement = null;
            document.getElementById('current-period').textContent = "School's out!";
            document.getElementById('current-period').style.textShadow = '0 0 0';
            document.getElementById('next-period').textContent = 'Homework';
            document.getElementById('next-period').style.textShadow = '0 0 0';
            document.getElementById('next-time').textContent = '';
        } else {
            var currentP = schedule[i-1];
            var nextP    = schedule[i];
            document.getElementById('current-period').textContent = currentP.type.name;
//          document.getElementById('current-period').style.textShadow = '0 0 0.2em '+currentP.type.color;
            document.getElementById('next-period').textContent = nextP.type.name;
//          document.getElementById('next-period').style.textShadow = '0 0 0.2em '+nextP.type.color;
            document.getElementById('next-time').textContent = moment(nextP.time, 'hh:mm').from(now);
            currentPeriodElement = document.getElementById(dayname+'-col').childNodes[i+2];

            var delta = moment(nextP.time, 'hh:mm').diff(now, 'minutes', true);
            if (delta > 0 && delta < 10) {
                document.getElementById('progressbar-container').style.display = 'block';
                document.getElementById('progressbar').style.width = (100*(10-delta)/10)+'%';
            }
        }
        if (currentPeriodElement) {
            currentPeriodElement.className = 'period now';
        }
    }

    function weekend() {
        document.getElementById('current-period').textContent = 'Weekend';
        document.getElementById('next-period').textContent = choose(
            'AP Sleep'
        );
        document.getElementById('next-time').textContent = '';
    }

    window.addEventListener("load", function() {
        Object.keys(Schedule).forEach(function(day) {
            var container = document.getElementById(day+'-col');
            Schedule[day].forEach(function(period, idx) {
                if (idx === Schedule[day].length - 1) {
                    return;
                }
                var el = document.createElement("div");
                var name = document.createElement("div");
                name.textContent = period.type.name;
                name.className = 'name';
                var time = document.createElement("div");
                time.textContent = period.time + '-' + Schedule[day][idx+1].time;
                time.className = 'time';
                el.appendChild(name);
                el.appendChild(time);
                el.className = 'period';
                el.style.backgroundColor = period.type.color;
                container.appendChild(el);
            });
        });

        update();
        setInterval(update, 5000);
    });
}();
