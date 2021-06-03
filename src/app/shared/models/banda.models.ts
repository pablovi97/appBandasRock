export class Banda {

    constructor(
        public id: number |null,
        public nombre: string,
        public imagen: string |null,
        public historia: string,
        public anio: number,
        public integrantes:  string[] 
    ) { }
}
