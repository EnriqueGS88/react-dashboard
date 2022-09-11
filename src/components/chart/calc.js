const emissions = [
    46, 50, 43, 40, 38, 36, 36, 39, 38, 40, 42, 44
];

const offsets = [
    44, 46, 50, 43, 40, 38, 36, 36, 39, 38, 40, 46
];

let sum = 0;

function sumAll( array ) {

    for ( i = 0; i < array.length; i++ ) {
        sum += array[i];        
    }

    console.log( sum );

};

sumAll( offsets );
