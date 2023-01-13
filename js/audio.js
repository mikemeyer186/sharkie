let audio_background = new Audio('audio/background.mp3');
let audio_music = new Audio('audio/background_happy.mp3');
let audio_level_win = new Audio('audio/level_win.mp3');
let audio_level_loose = new Audio('audio/level_gameover.mp3');
let audio_endboss = new Audio('audio/endboss_fight.mp3');
let audio_endboss_attack = new Audio('audio/endboss_attack.mp3');
let audio_endboss_hurt = new Audio('audio/endboss_hit.mp3');
let audio_endboss_dead = new Audio('audio/endboss_dead.mp3');
let audio_swim_up_down = new Audio('audio/swim_up_down.mp3');
let audio_swim_left_right = new Audio('audio/swim_left_right.mp3');
let audio_coin_pickup = new Audio('audio/coin_pickup.mp3');
let audio_poison_pickup = new Audio('audio/poison_pickup.mp3');
let audio_poison_bubble = new Audio('audio/poison_bubble.mp3');
let audio_sharkie_hurt = new Audio('audio/sharkie_hit.mp3');
let audio_sharkie_slap = new Audio('audio/sharkie_slap.mp3');

function unmuteAllAudio() {
    audio_endboss.volume = 0.2;
    audio_music.volume = 0.2;
    audio_level_win.volume = 0.3;
    audio_level_loose.volume = 0.3;
    audio_background.volume = 1;
    audio_endboss_attack.volume = 0.2;
    audio_endboss_hurt.volume = 1;
    audio_endboss_dead.volume = 0.3;
    audio_swim_up_down.volume = 1;
    audio_swim_left_right.volume = 0.2;
    audio_coin_pickup.volume = 0.2;
    audio_poison_pickup.volume = 0.7;
    audio_sharkie_hurt.volume = 0.3;
    audio_poison_bubble.volume = 0.8;
    audio_sharkie_slap.volume = 0.2;
}

function muteAllAudio() {
    audio_music.volume = 0;
    audio_level_win.volume = 0;
    audio_level_loose.volume = 0;
    audio_background.volume = 0;
    audio_endboss.volume = 0;
    audio_endboss_attack.volume = 0;
    audio_endboss_hurt.volume = 0;
    audio_endboss_dead.volume = 0;
    audio_swim_up_down.volume = 0;
    audio_swim_left_right.volume = 0;
    audio_coin_pickup.volume = 0;
    audio_poison_pickup.volume = 0;
    audio_sharkie_hurt.volume = 0;
    audio_poison_bubble.volume = 0;
    audio_sharkie_slap.volume = 0;
}

function playBackgroundAudio() {
    audio_background.play();
    audio_music.play();
    audio_background.addEventListener('ended', () => {
        audio_background.play();
    });
    audio_music.addEventListener('ended', () => {
        audio_music.play();
    });
}

function stopBackgroundAudio() {
    audio_music.pause();
}

function playEndbossAudio() {
    audio_endboss.play();
    audio_endboss.addEventListener('ended', () => {
        audio_endboss.play();
    });
}

function stopEndbossAudio() {
    audio_endboss.pause();
}

function playEndbossAttackAudio() {
    audio_endboss_attack.play();
}

function playEndbossHurtAudio() {
    audio_endboss_hurt.play();
}

function playEndbossDeadAudio() {
    audio_endboss_dead.play();
}

function playSharkieSwimLeftRightAudio() {
    audio_swim_left_right.play();
}

function playSharkieSwimUpDownAudio() {
    audio_swim_up_down.play();
}

function pauseSharkieSwimAudio() {
    audio_swim_left_right.pause();
    audio_swim_up_down.pause();
}

function playCoinPickupAudio() {
    audio_coin_pickup.play();
}

function playPoisonPickupAudio() {
    audio_poison_pickup.play();
}

function playPoisonBubbleAudio() {
    audio_poison_bubble.play();
}

function playSharkieHurtAudio() {
    audio_sharkie_hurt.play();
}

function playSharkieSlapAudio() {
    audio_sharkie_slap.play();
}
