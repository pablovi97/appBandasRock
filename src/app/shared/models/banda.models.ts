export class Banda {

    constructor(
        public id: number |null,
        public nombre: string,
        public imagen: string |null,
        public historia: string,
        public anio: number,
        public video:string,
        public integrantes:  string[] 
    ) { }
}
