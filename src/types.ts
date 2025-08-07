

export interface inputFiled {
    label?: string,
    type?: string,
    placeholder?: string,
};


export interface doubleInputFiled extends inputFiled {
    label2?: string,
    type2?: string,
    placeholder2?: string,
};

export interface button {
    label?: string,
    click?: ()=> void,
};  
export interface filterButton extends button {
    label?: string,
    click?: ()=> void,
    active?: boolean 
};  



export interface link {
    label?:string,
    to?: string,
};


export interface iconBtn{
    img?: string,
    alt?: string,
    cls?: string,
    label?: string,
};