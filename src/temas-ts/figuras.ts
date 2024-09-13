export class Area {
    calcularAreaPrisma(base: number, altura: number): number {
        return 2 * (base * altura + Math.pow(base, 2));
    }

    calcularAreaPiramide(base: number, altura: number): number {
        const alturaInclinada = Math.sqrt(Math.pow(altura, 2) + Math.pow(base / 2, 2));
        return Math.pow(base, 2) + 2 * base * alturaInclinada; 
    }

    calcularAreaCilindro(radio: number, altura: number): number {
        return 2 * Math.PI * radio * (radio + altura);
    }
}

const area = new Area();
console.log(`Área del Prisma: ${area.calcularAreaPrisma(5, 10)}`);
console.log(`Área de la Pirámide: ${area.calcularAreaPiramide(5, 10)}`);
console.log(`Área del Cilindro: ${area.calcularAreaCilindro(5, 10)}`);


