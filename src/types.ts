
export interface HTML{
    cls?: string,
};

export interface inputFiled {
    label?: string,
    type?: string,
    placeholder?: string, 
    inputCls?: string, 
    cls?: string,
};


export interface doubleInputFiled extends inputFiled {
    label2?: string,
    type2?: string,
    placeholder2?: string,
    inputCls?: string,
    cls?: string,
    inputBoxcls?:string,
};

export interface button {
    label?: string,
    click?: ()=> void,
    cls?: string,
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


export interface iconBtn extends button{
    img?: string,
    alt?: string,
    cls?: string,
    label?: string,
    link?: string,
    unactive?:boolean,
    clsLabel?: string,
};

export interface entity extends HTML {
    id: number,
    createdAt: string,

}; 

export interface user extends entity{
    firstName: string,
    lastName: string,
    email: string,
    // password: string,
    imgSrc: string,
};

export interface task extends entity{
    title: string,
    desc: string,
    priority: string,
    catagory: string[],
    user: user,
    deadline: string,
    type?: string,
    toComment?: boolean,
};
export interface project extends entity{
    title: string,
    tasks: task[] ,
    user?: user,
};
export interface team extends entity{
    user: user,
    title: string,
    tasks: number,
    members: number,
};
