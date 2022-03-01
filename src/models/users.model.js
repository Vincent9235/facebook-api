import { parseAsync } from '@babel/core';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = async ({ email, password }) => {
    return prisma.user.findFirst({
        where: {
            email: email,
            password: password
        }
    })
}

/**
 * Create User and his Profile in DB
 * @param { email, password, createdAt, updateAt} 
 * @returns user
 */
export const createUser = async ({ email, password, createdAt, updatedAt }) => {
    const user = await prisma.user.create({
        data: {
            email,
            password,
            createdAt,
            updatedAt
        }
    })

    await prisma.profile.create({
        data: {
            firstName: "",
            lastName: "",
            userId: user.id,
            createdAt,
            updatedAt
        }
    })
    return user
}

/**
 * Get user by his Id
 * @param {id} param0 
 */
export const getById = async ({ id }) => {
    return prisma.user.findUnique({
        where: { id }
    })
}

/**
 * Delete user from DB
 * @param {*id}   
 */
export const deleteById = async ({ id }) => {
    return prisma.user.delete({
        where: { id }
    })
}