import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Update a profile if user exists else create a profile
 * @param {*} firstName
 * @param {*} lastName
 * @param {*} userId
 */
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

/**
 * Find a profil by his Id
 * @param {*} userId 
 */
export const getById = async (userId) => {
   return prisma.profile.findUnique({
      where: {
         userId: userId
      }
   })
}

/**
 * Update a profile by his Id
 * @param {} id
 * @param {} firstName
 * @param {} lastName 
 */
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

/**
 * Delete a profile by his Id
 * @param {*} id 
 */
export const deleteById = async (id) => {
   await prisma.user.delete({
      where: {
         id,
      }
   })
}