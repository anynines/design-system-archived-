export declare class LocalStorage {
    static getItem(itemName: string): string | null;
    static setItem(itemName: string, itemValue: string | object): void;
    static deleteItem(itemName: string): void;
}
