

export interface CustomButtonProps {

    containerStyle?: any;
    text: string;
    textStyle?:any;
    onClick: ()=> void;
}

export interface RegistrationStepProps {
    id: number;
    title: string;
    icon?: any
}

export interface AuthLayoutProps{
    children: React.ReactNode
}

export interface RootLayoutProps{
    children: React.ReactNode
}
