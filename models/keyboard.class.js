class Keyboard {
    ArrowLeft = false;
    ArrowRight = false;
    ArrowUp = false;
    ArrowDown = false;
    Space = false;
    BtnUp = document.getElementById('btnUp');
    BtnDown = document.getElementById('btnDown');
    BtnLeft = document.getElementById('btnLeft');
    BtnRight = document.getElementById('btnRight');
    BtnSpace = document.getElementById('btnSpace');

    constructor() {
        this.bindTouchEvents();
        this.bindKeyboardEvents();
    }

    bindKeyboardEvents() {
        document.addEventListener('keydown', (event) => {
            keyboard[`${event.code}`] = true;
        });

        document.addEventListener('keyup', () => {
            keyboard.ArrowLeft = false;
            keyboard.ArrowRight = false;
            keyboard.ArrowUp = false;
            keyboard.ArrowDown = false;
            keyboard.Space = false;
        });
    }

    bindTouchEvents() {
        this.BtnUp.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.ArrowUp = true;
        });

        this.BtnUp.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.ArrowUp = false;
        });

        this.BtnDown.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.ArrowDown = true;
        });

        this.BtnDown.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.ArrowDown = false;
        });

        this.BtnLeft.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.ArrowLeft = true;
        });

        this.BtnLeft.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.ArrowLeft = false;
        });

        this.BtnRight.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.ArrowRight = true;
        });

        this.BtnRight.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.ArrowRight = false;
        });

        this.BtnSpace.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.Space = true;
        });

        this.BtnSpace.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.Space = false;
        });
    }
}
