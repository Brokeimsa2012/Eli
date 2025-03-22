export interface Flower {
    id: number;
    name: string;
    color: string;
    petals: number;
}

export interface Garden {
    flowers: Flower[];
    location: string;
    size: number; // in square meters
}

export type ColorPalette = 'red' | 'blue' | 'yellow' | 'pink' | 'white';