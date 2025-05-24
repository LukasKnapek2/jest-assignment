/* import capitalize from '../src/capitalize';
import reverseString from '../src/reverseString';
import calculator from '../src/calculator';
import caesarCipher from '../src/caesarCipher';
import analyzeArray from '../src/analyzeArray'; */

export function capitalize(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return string.split('').reverse().join('');
}
export function calculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        divide: (a, b) => a / b,
        multiply: (a, b) => a * b
    };
}

export function caesarCipher(string, shift) {
    if (typeof string !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (typeof shift !== 'number') {
        throw new TypeError('Shift must be a number');
    }

    return string.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}