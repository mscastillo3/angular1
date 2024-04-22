export class Serie {
    id: number;
    name: string;  
    channel: string;  
    seasons: number;  
    description: string; 
    webpage: string;  
    poster: string;
    constructor( id: number,  nombre: string,  striming: string,  temporadas: number,  tipo: string, paginaWeb: string,  imagenP: string) 
    {
        this.id = id;
        this.name = nombre;  
        this.channel =striming;  
        this.seasons =   temporadas;  
        this.description = tipo; 
        this.webpage = paginaWeb;  
        this.poster = imagenP;
    }

    /**
     * name
     */

}
