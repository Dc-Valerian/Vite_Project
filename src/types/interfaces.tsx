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

        text?:string;
        route?:string;
        path?:string;

        text1?:string;
        route1?:string;
        path1?:string;

        call:boolean;

        email:string;
   
}
export interface iInput{
    inputTitle:string;
    inputTitle1?:string;
    inputTitle2?:string;
        sign:boolean;
        request:boolean;

        email?:string;
        password?:string;
        userName?:string;

        setEmail?
}