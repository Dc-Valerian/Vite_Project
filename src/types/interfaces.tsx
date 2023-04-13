export interface iButton{
        buttontitle:string;
        bg:string;
        c:string
        onClick:()=>void;
}
export interface iCard{
        title:string;
        buttontitle:string;
        onClick:()=>void;

        inputTitle:string;
        inputTitle1?:string;
        inputTitle2?:string;
        sign:boolean;
        request:boolean;
        
}
export interface iInput{
    inputTitle:string;
    inputTitle1?:string;
    inputTitle2?:string;
        sign:boolean;
        request:boolean;
}