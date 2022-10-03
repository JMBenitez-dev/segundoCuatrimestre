import { Mamifero } from "./mamifero";

export class Omnivoro extends Mamifero {
    protected cuadripedo: boolean;

    constructor(especie: string, sexo: string, cuadripedo: boolean) {
        super(especie, sexo);
        this.cuadripedo = cuadripedo;
    }

    public esCuadripedo(): void {
        if (this.cuadripedo === true) {
            console.log(`El animal es cuadripedo`);
        } else {
            console.log(`El animal no es cuadripedo`);
        }
    }

    public comer(): void {
        return console.log(`El animal come plantas y carne`);
    }
}