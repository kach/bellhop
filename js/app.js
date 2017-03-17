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
            {type: Period.A, start: '8:25', end: '9:45'},
            {type: Period.Brunch, start: '9:45', end: '10:00'},
            {type: Period.B, start: '10:00', end: '11:15'},
            {type: Period.C, start: '11:25', end: '12:40'},
            {type: Period.Lunch, start: '12:40', end: '13:20'},
            {type: Period.F, start: '13:20', end: '14:35'},
            {type: Period.Staff, start: '14:45', end: '15:35'},
            {type: Period.Done, start: '15:35'}
        ],
        "Tuesday": [
            {type: Period.D, start: '8:25', end: '9:45'},
            {type: Period.Brunch, start: '9:45', end: '10:00'},
            {type: Period.Tutorial, start: '10:00', end: '10:50'},
            {type: Period.E, start: '11:00', end: '12:15'},
            {type: Period.Lunch, start: '12:15', end: '12:55'},
            {type: Period.A, start: '12:55', end: '14:15'},
            {type: Period.G, start: '14:25', end: '15:40'},
            {type: Period.Done, start: '15:40'}
        ],
        "Wednesday": [
            {type: Period.B, start: '8:25', end: '9:50'},
            {type: Period.Brunch, start: '9:50', end: '10:05'},
            {type: Period.C, start: '10:05', end: '11:25'},
            {type: Period.D, start: '11:35', end: '12:55'},
            {type: Period.Lunch, start: '12:55', end: '13:35'},
            {type: Period.F, start: '13:35', end: '14:55'},
            {type: Period.Staff, start: '15:05', end: '15:45"'},
            {type: Period.Done, start: '15:45'}
        ],
        "Thursday": [
            {type: Period.E, start: '8:25', end: '9:50'},
            {type: Period.Brunch, start: '9:50', end: '10:05'},
            {type: Period.A, start: '10:05', end: '11:15'},
            {type: Period.B, start: '11:25', end: '12:35'},
            {type: Period.Lunch, start: '12:35', end: '13:15'},
            {type: Period.G, start: '13:15', end: '14:35'},
            {type: Period.Tutorial, start: '14:45', end: '15:35'},
            {type: Period.Done, start: '15:35'}
        ],
        "Friday": [
            {type: Period.C, start: '8:25', end: '9:40'},
            {type: Period.Brunch, start: '9:40', end: '9:55'},
            {type: Period.D, start: '9:55', end: '11:05'},
            {type: Period.E, start: '11:25', end: '12:25'},
            {type: Period.Lunch, start: '12:25', end: '13:05'},
            {type: Period.F, start: '13:05', end: '14:15'},
            {type: Period.G, start: '14:25', end: '15:35'},
            {type: Period.Done, start: '15:35'}
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
        // var now = moment({hour: 11, minute: 16});
        var day = now.day();
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
            if (moment(schedule[i].start, 'hh:mm').isAfter(now)) {
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
            document.getElementById('next-time').textContent = moment(nextP.start, 'hh:mm').from(now);
        } else if (i >= schedule.length) {
            // School's out
            currentPeriodElement = null;
            document.getElementById('current-period').textContent = "School's out!";
            document.getElementById('current-period').style.textShadow = '0 0 0';
            document.getElementById('next-period').textContent = 'Homework';
            document.getElementById('next-period').style.textShadow = '0 0 0';
            document.getElementById('next-time').textContent = '';
        } else if (now.isAfter(moment(schedule[i-1].end, 'hh:mm'))) {
            var currentP = schedule[i-1];
            var nextP    = schedule[i];
            document.getElementById('current-period').textContent = "Passing period";
            document.getElementById('current-period').style.textShadow = '0 0 0';
            document.getElementById('next-period').textContent = nextP.type.name;
            document.getElementById('next-period').style.textShadow = '0 0 0';
            document.getElementById('next-time').textContent = moment(nextP.start, 'hh:mm').from(now);
        } else {
            var currentP = schedule[i-1];
            var nextP    = schedule[i];
            document.getElementById('current-period').textContent = currentP.type.name;
//          document.getElementById('current-period').style.textShadow = '0 0 0.2em '+currentP.type.color;
            document.getElementById('next-period').textContent = nextP.type.name;
//          document.getElementById('next-period').style.textShadow = '0 0 0.2em '+nextP.type.color;
            document.getElementById('next-time').textContent = moment(currentP.end, 'hh:mm').from(now);
            currentPeriodElement = document.getElementById(dayname+'-col').childNodes[i+2];

            var delta = moment(nextP.start, 'hh:mm').diff(now, 'minutes', true);
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
                time.textContent = period.start + '-' + period.end;
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
