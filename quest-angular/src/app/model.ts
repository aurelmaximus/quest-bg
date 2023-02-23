export abstract class Personne {
    id: number; 
	version: number;
    civilite: string;
    nom: string;
    prenom: string;
    email: string;
 
    constructor(id?:number, version?: number , civilite?: string, nom?: string, prenom?: string, email? :string) {
        this.id = id;
        this.version = version;
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}

export class Stagiaire extends Personne {
    dtNaissance: string;
    niveauEtude: string;
    ordinateur: Ordinateur;
  filiere: Filiere;

    constructor(id?:number, version?: number , civilite?: string, nom?: string, prenom?: string, email? :string, dtNaissance?: string, niveauEtude?: string) {
        super(id, version, civilite, nom, prenom, email);
        this.dtNaissance = dtNaissance;
        this.niveauEtude = niveauEtude;
    }
}

export class Formateur extends Personne {
    externe: boolean;
    experience: number;


    constructor(id?:number, version?: number , civilite?: string, nom?: string, prenom?: string, email? :string, externe?: boolean, experience?: number) {
        super(id, version, civilite, nom, prenom, email);
        this.externe = externe;
        this.experience = experience;
    }
}


export class Filiere {
    id: number;
    version: number;
    libelle: string;
    debut: string;
    fin: string;

    constructor(id?:number, version?: number , libelle?: string, debut?: string, fin?: string) {
        this.id = id;
        this.version = version;
        this.libelle = libelle;
        this.debut = debut;
        this.fin = fin;
    }
    
}

export class Ordinateur {
    id: number;
    version: number;
    marque: string;
    ram: number;

    constructor(id?: number, version?: number, marque?: string, ram?: number) {
        this.id = id;
        this.version = version;
        this.marque = marque;
        this.ram = ram;
    }
}