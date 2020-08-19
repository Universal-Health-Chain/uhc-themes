interface ITheme {
    color: {
        black: string;
        white: string;
        gray: string;
        primary: string;
        secondary: string;
        dangerPrimary: string;
        dangerSecondary: string;
    };
}
declare let theme: ITheme;
export declare const setPrimaryColor: (color: string) => void;
export declare const setSecondaryColor: (color: string) => void;
export default theme;
