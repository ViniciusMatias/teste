"use strict";
// modulo de export do commonjs
// const Matematica = require('./Matematica')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modulo de export do Ecman Script 6
const Matematica_1 = __importDefault(require("./Matematica"));
const validator_1 = __importDefault(require("validator"));
let nome = "Vinicius";
let idade = 23;
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
console.log(`${Matematica_1.default.somar(1, 2)}`);
console.log(`${Matematica_1.default.subtrair(1, 2)}`);
console.log(`${Matematica_1.default.multiplicar(1, 2)}`);
console.log(validator_1.default.isEmail(`matias@hotmail.com`));
