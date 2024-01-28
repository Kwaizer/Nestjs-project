import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;
    
    @ApiProperty({example: '12345', description: 'User password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'No shorter than 4, no longer than 16'})
    readonly password: string;
}