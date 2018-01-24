export default class Main {
    constructor() {
        console.log('Typescript Webpack starter launched');
    }
}

let start = new Main();

function myF<string>(arg1: string): string {
    return arg1;
}

console.log('...', myF(11) );
