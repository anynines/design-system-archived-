import { DesignSystemContextElements } from './types/types';
export declare const createDesignSystemContext: <T extends {
    name?: string;
    globals?: {
        font?: {
            name?: string;
            light?: string;
            regular?: string;
            bold?: string;
        };
        colors?: {
            primary?: string;
            notice?: string;
            success?: string;
            warning?: string;
            error?: string;
            whiteFix?: string;
            white?: string;
            light?: string;
            dark?: string;
            black?: string;
            pageBgColor?: string;
            layoutBgColor?: string;
            boxBgColor?: string;
            elementBgColor?: string;
            textColor?: string;
        };
        radius?: string;
        contentMaxWidth?: string;
        border?: string;
        shadow?: string;
        transition?: string;
        logos?: {
            vertical?: {
                dark?: string;
                light?: string;
            };
            horizontal?: {
                dark?: string;
                light?: string;
            };
        };
        spacing?: {
            baseUnit?: string;
            fixedUnit?: string;
        };
        typography?: {
            baseUnit?: string;
            headingLineHeight?: string;
            bodyLineHeight?: string;
        };
    };
}>() => DesignSystemContextElements<T>;
