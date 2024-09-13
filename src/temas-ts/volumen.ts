import { Area } from './figuras';

export class Volumen extends Area {
    calcularVolumenPrisma(base: number, altura: number): number {
        const areaBase = Math.pow(base, 2); 
        return areaBase * altura;
    }
    calcularVolumenPiramide(base: number, altura: number): number {
        return (1 / 3) * Math.pow(base, 2) * altura;
    }
    calcularVolumenCilindro(radio: number, altura: number): number {
        return Math.PI * Math.pow(radio, 2) * altura;
    }
}
const volumen = new Volumen();
console.log(`Volumen del Prisma: ${volumen.calcularVolumenPrisma(5, 10)}`);
console.log(`Volumen de la Pirámide: ${volumen.calcularVolumenPiramide(5, 10)}`);
console.log(`Volumen del Cilindro: ${volumen.calcularVolumenCilindro(5, 10)}`);

