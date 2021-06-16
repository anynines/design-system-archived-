import { Theme, Mode } from './types/types';
export declare const getTheme: <T extends Theme>(theme: T) => T;
export declare const getMode: (mode: Mode, storagePrefix: string) => Mode;
export declare const getToggledTheme: <T extends Theme>(theme: T) => T;
