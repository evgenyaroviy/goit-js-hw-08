import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const playOn = function (duration) {
    const currentTime = duration.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime.toString());
}

player.on('timeupdate', throttle(playOn, 1000));

const playedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.setCurrentTime(playedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});