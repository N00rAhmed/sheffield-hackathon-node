export function strokesRequired(picture) {
    for (let i = 0; i < picture.length; i++) {
        let str = ''
        for(let j = 0; j < picture[i].length; j++) {
            str += picture[i][j] ? '1 ': '0 ';
        }
        console.log(str);
    }
    console.log('-------------');
}

