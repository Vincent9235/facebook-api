import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const upsertUser = async ({ firstName, lastName, userId }) => {
   return prisma.profile.upsert({
      where: {
         userId: userId,
      },
      update: {
         firstName: firstName,
         lastName: lastName,
      },
      create: {
         firstName,
         lastName,
         User: {
            connect: { id: userId },
         }
      }
   })
}

export const getById = async (userId) => {
   return prisma.profile.findUnique({
      where: {
         userId: userId
      }
   })
}

export const updateById = async ({ id, firstName, lastName }) => {
   return prisma.posts.update({
      where: {
         id,
      },
      data: {
         firstName,
         lastName
      },
   });
}

export const deleteById = async (id) => {
   return prisma.profile.delete({
      where: {
         userId: id
      }
   })
}