console.log('Stop Watch Working Fine');

function StopWatch () {
    let timerRunning, counter = 0;
    let interval;

    this.start = function () {
        if(timerRunning) {
            throw new Error('Timer is already Running');
        }else{
            timerRunning= true;
            interval = setInterval(function() {
                    counter++
            }, 1000);
        }               
    }

    this.stop = function () {
        if(!timerRunning) {
            throw new Error('Timer is already Stopped');
        }else{
            clearInterval(interval);
            timerRunning = false;
        }                
    }

    this.reset = function () {
        counter=0;
        timerRunning=false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            var date = new Date(null);
            date.setSeconds(counter);
            return date.toISOString().substr(11, 8);    
        }
    });
}