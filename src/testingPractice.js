
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
    function validateInputs(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Inputs must be numbers');
        }
    }
    return {
        add: (a, b) => {
            validateInputs(a, b);
            return a + b;
        },
        subtract: (a, b) => {
            validateInputs(a, b);
            return a - b;
        },
        divide: (a, b) => {
            validateInputs(a, b);
            if (b === 0) {
                throw new Error('Cannot divide by zero');
            }
            return a / b;
        },
        multiply: (a, b) => {
            validateInputs(a, b);
            return a * b;
        }
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
            return String.fromCharCode((((code - base + shift) % 26) + 26) % 26 + base);
        }
        return char;
    }).join('');
}

export function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
    }
    if (array.length === 0) {
        return {};
    }

    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    };
}