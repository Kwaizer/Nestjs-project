import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Role } from "./roles.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{

    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ForeignKey(() => Role)
    @ApiProperty({example: 'ADMIN', description: 'Unique user role'})
    @Column({type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @ApiProperty({example: 'Admin', description: 'Role description'})
    @Column({type: DataType.INTEGER})
    userId: number;

}