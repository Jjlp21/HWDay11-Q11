console.log('Hi')

const screen = document.querySelector('.screen');



const greeting = (timer) => {

    setTimeout(() => {
        screen.innerHTML = timer;
        setTimeout(() => {
            timer = timer - 1;
            screen.innerHTML = timer;
            setTimeout(() => {
                timer = timer - 1;
                screen.innerHTML = timer;
                setTimeout(() => {
                    timer = timer - 1;
                    screen.innerHTML = timer;
                    setTimeout(() => {
                        timer = timer - 1;
                        screen.innerHTML = timer;
                        setTimeout(() => {
                            timer = timer - 1;
                            screen.innerHTML = timer;
                            setTimeout(() => {
                                timer = timer - 1;
                                screen.innerHTML = timer;
                                setTimeout(() => {
                                    timer = timer - 1;
                                    screen.innerHTML = timer;
                                    setTimeout(() => {
                                        timer = timer - 1;
                                        screen.innerHTML = timer;
                                        setTimeout(() => {
                                            timer = timer - 1;
                                            screen.innerHTML = timer;
                                            setTimeout(() => {
                                                screen.innerHTML="";
                                                screen.innerHTML = 'Happy Independence day..!!';
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

greeting(10);