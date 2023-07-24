const preloadingImages = [
    //background
    'img/background/barrier/1.png',
    'img/background/barrier/2.png',
    'img/background/barrier/3.png',
    'img/background/floor/dark.png',
    'img/background/floor/light.png',
    'img/background/floor/dark1.png',
    'img/background/floor/light1.png',
    'img/background/floor/dark2.png',
    'img/background/floor/light2.png',
    'img/background/fond_1/dark.png',
    'img/background/fond_1/light.png',
    'img/background/fond_1/dark1.png',
    'img/background/fond_1/light1.png',
    'img/background/fond_1/dark2.png',
    'img/background/fond_1/light2.png',
    'img/background/fond_2/dark.png',
    'img/background/fond_2/light.png',
    'img/background/fond_2/dark1.png',
    'img/background/fond_2/light1.png',
    'img/background/fond_2/dark2.png',
    'img/background/fond_2/light2.png',
    'img/background/light/1.png',
    'img/background/light/2.png',
    'img/background/light/complete.png',
    'img/background/water/dark.png',
    'img/background/water/light.png',
    'img/background/water/dark1.png',
    'img/background/water/light1.png',
    'img/background/water/dark2.png',
    'img/background/water/light2.png',
    'img/background/body_small.jpg',
    'img/background/body.png',
    'img/background/rotate.png',
    //collectables
    'img/collectables/coins/1.png',
    'img/collectables/coins/2.png',
    'img/collectables/coins/3.png',
    'img/collectables/coins/4.png',
    'img/collectables/poison/1.png',
    'img/collectables/poison/2.png',
    'img/collectables/poison/3.png',
    'img/collectables/poison/4.png',
    'img/collectables/poison/5.png',
    'img/collectables/poison/6.png',
    'img/collectables/poison/7.png',
    'img/collectables/poison/8.png',
    //endscreen
    'img/endscreen/game_over.png',
    'img/endscreen/try_again.png',
    'img/endscreen/win.png',
    //enemys
    'img/enemys/endboss/attack/1.png',
    'img/enemys/endboss/attack/2.png',
    'img/enemys/endboss/attack/3.png',
    'img/enemys/endboss/attack/4.png',
    'img/enemys/endboss/attack/5.png',
    'img/enemys/endboss/attack/6.png',
    'img/enemys/endboss/dead/1.png',
    'img/enemys/endboss/dead/2.png',
    'img/enemys/endboss/dead/3.png',
    'img/enemys/endboss/dead/4.png',
    'img/enemys/endboss/dead/5.png',
    'img/enemys/endboss/dead/6.png',
    'img/enemys/endboss/hurt/1.png',
    'img/enemys/endboss/hurt/2.png',
    'img/enemys/endboss/hurt/3.png',
    'img/enemys/endboss/hurt/4.png',
    'img/enemys/endboss/intro/1.png',
    'img/enemys/endboss/intro/2.png',
    'img/enemys/endboss/intro/3.png',
    'img/enemys/endboss/intro/4.png',
    'img/enemys/endboss/intro/5.png',
    'img/enemys/endboss/intro/6.png',
    'img/enemys/endboss/intro/7.png',
    'img/enemys/endboss/intro/8.png',
    'img/enemys/endboss/intro/9.png',
    'img/enemys/endboss/intro/10.png',
    'img/enemys/endboss/swim/swim_1.png',
    'img/enemys/endboss/swim/swim_2.png',
    'img/enemys/endboss/swim/swim_3.png',
    'img/enemys/endboss/swim/swim_4.png',
    'img/enemys/endboss/swim/swim_5.png',
    'img/enemys/endboss/swim/swim_6.png',
    'img/enemys/endboss/swim/swim_7.png',
    'img/enemys/endboss/swim/swim_8.png',
    'img/enemys/endboss/swim/swim_9.png',
    'img/enemys/endboss/swim/swim_10.png',
    'img/enemys/endboss/swim/swim_11.png',
    'img/enemys/endboss/swim/swim_12.png',
    'img/enemys/endboss/swim/swim_13.png',
    'img/enemys/jelly-fish/swim/pink_1.png',
    'img/enemys/jelly-fish/swim/pink_2.png',
    'img/enemys/jelly-fish/swim/pink_3.png',
    'img/enemys/jelly-fish/swim/pink_4.png',
    'img/enemys/jelly-fish/swim/violet_1.png',
    'img/enemys/jelly-fish/swim/violet_2.png',
    'img/enemys/jelly-fish/swim/violet_3.png',
    'img/enemys/jelly-fish/swim/violet_4.png',
    'img/enemys/puffer-fish/dead/1.png',
    'img/enemys/puffer-fish/swim/green_swim1.png',
    'img/enemys/puffer-fish/swim/green_swim2.png',
    'img/enemys/puffer-fish/swim/green_swim3.png',
    'img/enemys/puffer-fish/swim/green_swim4.png',
    'img/enemys/puffer-fish/swim/green_swim5.png',
    //menu
    'img/menu/arrow_btn.png',
    'img/menu/bubble_poison.png',
    'img/menu/bubble_water.png',
    'img/menu/controller.png',
    'img/menu/finslap.png',
    'img/menu/fullscreen.png',
    'img/menu/info.png',
    'img/menu/instructions_arrows.png',
    'img/menu/instructions_keyD.png',
    'img/menu/instructions_keySpace.png',
    'img/menu/instructions.png',
    'img/menu/menu_controller_off.png',
    'img/menu/menu_controller_on.png',
    'img/menu/menu_fullscreen_exit.png',
    'img/menu/menu_fullscreen_on.png',
    'img/menu/menu_info.png',
    'img/menu/menu_settings.png',
    'img/menu/menu_vol_off.png',
    'img/menu/menu_vol_up.png',
    'img/menu/muted.png',
    'img/menu/unmuted.png',
    //sharkie
    'img/sharkie/swim/1.png',
    'img/sharkie/swim/2.png',
    'img/sharkie/swim/3.png',
    'img/sharkie/swim/4.png',
    'img/sharkie/swim/5.png',
    'img/sharkie/swim/6.png',
    'img/sharkie/idle_long/1.png',
    'img/sharkie/idle_long/2.png',
    'img/sharkie/idle_long/3.png',
    'img/sharkie/idle_long/4.png',
    'img/sharkie/idle_long/5.png',
    'img/sharkie/idle_long/6.png',
    'img/sharkie/idle_long/7.png',
    'img/sharkie/idle_long/8.png',
    'img/sharkie/idle_long/9.png',
    'img/sharkie/idle_long/10.png',
    'img/sharkie/idle_long/11.png',
    'img/sharkie/idle_long/12.png',
    'img/sharkie/idle_long/13.png',
    'img/sharkie/idle_long/14.png',
    'img/sharkie/idle/1.png',
    'img/sharkie/idle/2.png',
    'img/sharkie/idle/3.png',
    'img/sharkie/idle/4.png',
    'img/sharkie/idle/5.png',
    'img/sharkie/idle/6.png',
    'img/sharkie/idle/7.png',
    'img/sharkie/idle/8.png',
    'img/sharkie/idle/9.png',
    'img/sharkie/idle/10.png',
    'img/sharkie/idle/11.png',
    'img/sharkie/idle/12.png',
    'img/sharkie/idle/13.png',
    'img/sharkie/idle/14.png',
    'img/sharkie/idle/15.png',
    'img/sharkie/idle/16.png',
    'img/sharkie/idle/17.png',
    'img/sharkie/idle/18.png',
    'img/sharkie/hurt/1.png',
    'img/sharkie/hurt/2.png',
    'img/sharkie/hurt/3.png',
    'img/sharkie/hurt/4.png',
    'img/sharkie/hurt/5.png',
    'img/sharkie/dead/1.png',
    'img/sharkie/dead/2.png',
    'img/sharkie/dead/3.png',
    'img/sharkie/dead/4.png',
    'img/sharkie/dead/5.png',
    'img/sharkie/dead/6.png',
    'img/sharkie/dead/7.png',
    'img/sharkie/dead/8.png',
    'img/sharkie/dead/9.png',
    'img/sharkie/dead/10.png',
    'img/sharkie/dead/11.png',
    'img/sharkie/dead/12.png',
    'img/sharkie/bubbling/1.png',
    'img/sharkie/bubbling/2.png',
    'img/sharkie/bubbling/3.png',
    'img/sharkie/bubbling/4.png',
    'img/sharkie/bubbling/5.png',
    'img/sharkie/bubbling/6.png',
    'img/sharkie/bubbling/7.png',
    'img/sharkie/bubbling/8.png',
    'img/sharkie/bubbling/poison_bubble.png',
    'img/sharkie/attack/1.png',
    'img/sharkie/attack/2.png',
    'img/sharkie/attack/3.png',
    'img/sharkie/attack/4.png',
    'img/sharkie/attack/5.png',
    'img/sharkie/attack/6.png',
    'img/sharkie/attack/7.png',
    'img/sharkie/attack/8.png',
    //startscreen
    'img/startscreen/startscreen.png',
    'img/startscreen/start.png',
    'img/startscreen/arrow_back.png',
    //statusbar
    'img/statusbar/coins/coin_0.png',
    'img/statusbar/coins/coin_20.png',
    'img/statusbar/coins/coin_40.png',
    'img/statusbar/coins/coin_60.png',
    'img/statusbar/coins/coin_80.png',
    'img/statusbar/coins/coin_100.png',
    'img/statusbar/life/life_0.png',
    'img/statusbar/life/life_20.png',
    'img/statusbar/life/life_40.png',
    'img/statusbar/life/life_60.png',
    'img/statusbar/life/life_80.png',
    'img/statusbar/life/life_100.png',
    'img/statusbar/poison/poison_0.png',
    'img/statusbar/poison/poison_20.png',
    'img/statusbar/poison/poison_40.png',
    'img/statusbar/poison/poison_60.png',
    'img/statusbar/poison/poison_80.png',
    'img/statusbar/poison/poison_100.png',
    'img/statusbar/life-boss/0.png',
    'img/statusbar/life-boss/20.png',
    'img/statusbar/life-boss/40.png',
    'img/statusbar/life-boss/60.png',
    'img/statusbar/life-boss/80.png',
    'img/statusbar/life-boss/100.png',
];

const preloadingAudio = [
    'audio/background_happy.mp3',
    'audio/background_new_world.mp3',
    'audio/background.mp3',
    'audio/coin_pickup.mp3',
    'audio/endboss_attack.mp3',
    'audio/endboss_dead.mp3',
    'audio/endboss_fight.mp3',
    'audio/endboss_hit.mp3',
    'audio/level_gameover.mp3',
    'audio/level_win.mp3',
    'audio/poison_bubble.mp3',
    'audio/poison_pickup.mp3',
    'audio/sharkie_hit.mp3',
    'audio/sharkie_slap.mp3',
    'audio/swim_left_right.mp3',
    'audio/swim_up_down.mp3',
];