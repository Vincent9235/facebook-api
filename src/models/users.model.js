import { parseAsync } from '@babel/core';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = async ({email,password}) => {
    return prisma.user.findFirst({
        where: {
            email: email,
            password: password
        }
    })
}

export const createUser = async ({email,password,createdAt,updatedAt}) => {
    return prisma.user.create({
        data:{
           email,
           password,
           createdAt,
           updatedAt
        }
    })

}

export const getById = async({id}) => {
    return prisma.user.findUnique({
        where : { id }
    })
} 

export const deleteById = async({id}) => {
    return prisma.user.delete({
        where: { id }
    })
}