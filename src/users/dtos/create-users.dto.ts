import{
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength
}from 'class-validator'


export class CreateUserDto{
    @IsNotEmpty({
        message:'Informe um endereço de email'
    })
    @IsEmail({},{
        message:'Informe um endereço de email válido'
    })
    @MaxLength(200,{
        message:'O endereço de email deve ter no máximo 200 caracteeres'
    })
    email:string;


    @IsNotEmpty({
        message:'Informe o nome do usuário'
    })
    @MaxLength(200,{
        message:'O nome do usuário deve ter menos de 200 caraceres'
    })
    name:string;


    @IsNotEmpty({
        message: 'Informe uma senha',
    })
    @MinLength(6, {
        message: 'A senha deve ter no mínimo 6 caracteres',
    })
    password:string;


    @IsNotEmpty({
        message: 'Informe uma senha',
    })
    @MinLength(6, {
        message: 'A senha deve ter no mínimo 6 caracteres',
    })   
    passwordConfirmation:string;
}