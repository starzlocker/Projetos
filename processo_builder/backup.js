
    const blueBox = document.querySelector(".blue");
    const greenBox = document.querySelector(".green");
    const draggable = document.querySelector(".draggable");
    const canvas = document.querySelector("#canvas");

    const width = blueBox.clientWidth;
    const height = blueBox.clientHeight;

    const halfWidth = width / 2;
    const halfHeight = height / 2;

    let x = blueBox.getBoundingClientRect().left;
    let initialCursorX = 0;
    let y = blueBox.getBoundingClientRect().top;
    let initialCursorY = 0;
    console.log("X: " + x);

    let finalX = 0;

    // eu quero atualizar a posição X e Y iniciais do meu retangulo baseado no deslocamento desde o drag até o drop

    // blueBox.addEventListener("dragstart", function(event) {
        
    //     initialCursorY = event.clientY;

    //     console.log(initialCursorX);
    // })

    blueBox.ondragstart = function(event) {
        initialCursorX = initialCursorX ? initialCursorX + (event.clientX - finalX) : event.clientX;
    }

    // event listener? offset y and x?
    blueBox.addEventListener('drag', function(event) {
            // blueBox.style.left = (x + (event.clientX - initialCursorX)) + 'px';
            // blueBox.style.top = (event.clientY - halfHeight - 4) + 'px';
            // console.log(`box X: ${x}, mouse X: ${event.clientX}`);
            console.log("mouse agora: " + event.clientX + " mouse inicial: " + initialCursorX);

            blueBox.style.left = event.clientX - initialCursorX + 'px';

            // blueBox.style.top = ((y) + (event.clientY - initialCursorY)) + 'px';
            // console.log(`box X: ${x}, mouse X: ${event.clientX}`);

    })



    // blueBox.addEventListener('dragend', function(event) {
    //     event.preventDefault();

    //     // ----
    //     x = blueBox.getBoundingClientRect().left;
    //     //  y = blueBox.getBoundingClientRect().top;
    // })

    blueBox.addEventListener('dragover', function(event) {
        event.preventDefault();
        finalX = event.clientX;
    })

    console.log(blueBox.clientHeight);