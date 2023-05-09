export interface SubjectSelect {
    id:   string;
    name: string;
}

export interface Subject {
    id:               string;
    code:             string;
    name:             string;
    theoreticalHours: string;
    laboratoryHours:  string;
    career:           number;
}

export interface Paginable {
    total:      number;
    page:       number;
    totalPages: number;
    capacity:   number;
    subjects:   any[];
}
