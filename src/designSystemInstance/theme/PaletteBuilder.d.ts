export interface RGBMap {
    r: number;
    g: number;
    b: number;
}
export interface RGBAMap extends RGBMap {
    a: number;
}
export declare const buildCssVariablesFromPalette: (paletteMap: any) => string;
export declare const buildPrimaryPaletteFromHexColor: (inputColorValue: string, colorName: string) => string;
export declare const buildContrastPaletteFromHexColor: (inputColorValue: string, colorName: string) => string;
