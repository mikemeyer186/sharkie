class Keyboard {
    ArrowLeft = false;
    ArrowRight = false;
    ArrowUp = false;
    ArrowDown = false;
    Space = false;
    KeyD = false;
    Escape = false;
    slapKey = false;
    BtnUp = document.getElementById('btnUp');
    BtnDown = document.getElementById('btnDown');
    BtnLeft = document.getElementById('btnLeft');
    BtnRight = document.getElementById('btnRight');
    BtnSpace = document.getElementById('btnSpace');
    BtnD = document.getElementById('btnD');

    constructor() {
        this.bindTouchEvents();
        this.bindKeyboardEvents();
    }

    /**
     * binding keyboard events when key is pressed
     */
    bindKeyboardEvents() {
        document.addEventListener('keydown', (event) => {
            this[`${event.code}`] = true;
            this.slapKeyPressed();
        });

        document.addEventListener('keyup', (event) => {
            this[`${event.code}`] = false;
        });
    }

    /**
     * binding keyboard events when mobile touch buttons are pressed
     */
    bindTouchEvents() {
        this.BtnUp.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnUp.classList.add('touched-btn');
            this.ArrowUp = true;
        });

        this.BtnUp.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnUp.classList.remove('touched-btn');
            this.ArrowUp = false;
        });

        this.BtnDown.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnDown.classList.add('touched-btn');
            this.ArrowDown = true;
        });

        this.BtnDown.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnDown.classList.remove('touched-btn');
            this.ArrowDown = false;
        });

        this.BtnLeft.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnLeft.classList.add('touched-btn');
            this.ArrowLeft = true;
        });

        this.BtnLeft.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnLeft.classList.remove('touched-btn');
            this.ArrowLeft = false;
        });

        this.BtnRight.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnRight.classList.add('touched-btn');
            this.ArrowRight = true;
        });

        this.BtnRight.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnRight.classList.remove('touched-btn');
            this.ArrowRight = false;
        });

        this.BtnSpace.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnSpace.classList.add('touched-btn');
            this.Space = true;
        });

        this.BtnSpace.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnSpace.classList.remove('touched-btn');
            this.Space = false;
        });

        this.BtnD.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.BtnD.classList.add('touched-btn');
            this.KeyD = true;
            this.slapKeyPressed();
        });

        this.BtnD.addEventListener('touchend', (event) => {
            event.preventDefault();
            this.BtnD.classList.remove('touched-btn');
            this.KeyD = false;
        });
    }

    /**
     * setting slap key true after 500ms and false after 1000ms
     */
    slapKeyPressed() {
        if (this.KeyD) {
            setTimeout(() => {
                this.slapKey = true;
                return this.slapKey;
            }, 500);
            setTimeout(() => {
                this.slapKey = false;
            }, 1000);
        } else {
            this.slapKey = false;
        }
    }
}
