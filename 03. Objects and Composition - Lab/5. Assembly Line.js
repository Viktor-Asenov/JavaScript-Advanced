function assemblyLine() {
    let car = {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.tem > this.tempSettings) {
                    this.temp--;
                }
            };
        },
        hasAudio(obj) {
            obj.currentTrack = {
                name: null,
                artist: null
            },
            obj.nowPlaying = function() {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }                
            }
        },
        hasParktronic(obj) {
            obj.checkDistance = function(distance) {
                let message;
                if (distance < 0.1) {
                    message = 'Beep! Beep! Beep!';
                } else if (distance >= 0.1 && distance < 0.25) {
                    message = 'Beep! Beep!';
                } else if (distance >= 0.25 && distance < 0.5) {
                    message = 'Beep!'
                } else {
                    message = '';
                }

                console.log(message);
            }
        }
    }

    return car;
}