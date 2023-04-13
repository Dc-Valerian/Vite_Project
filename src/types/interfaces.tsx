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
        
}
export interface iInput{
        title:string;
        title1?:string;
        title2?:string;
        sign:boolean;
        request:boolean;
}