import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Create post
 * @param {*} message 
 * @param {*} createdAt 
 * @param {*} updatedAt 
 * @param {*} authorId 
 */
export const createPosts = async({message,createdAt,updatedAt,authorId}) => {
   return prisma.post.create({
      data:{
         message,
         Author:{ 
            connect: {id: authorId},
         },
         createdAt,
         updatedAt
      }
   })

}

/**
 * Get all posts
 */
export const getAll = async () => {
   return prisma.post.findMany({})
}

/**
 * Get a post by his Id
 * @param {*} id 
 */
export const getById = async(id) => {
   return prisma.post.findUnique({
      where:{
         id: id
      }
   })
}

/**
 * Get a post by the Id of his author
 * @param {*} id 
 */
export const getByAuthorId = async(id) => {
   return prisma.post.findMany({
      where:{
         authorId: id
      }
   })
}

/**
 * Update a post
 * @param {*} id
 * @param {*} message
 * @param {*} updatedAt  
 */
export const updateById = async({id,message,updatedAt}) => {
   return prisma.post.update({
      where: {
        id,
      },
      data: {
        message,
        updatedAt,
      },
    });
}

/**
 * Delete a post
 * @param {*} id 
 */
export const deleteById = async(id) => {
   return prisma.post.delete({
      where:{
         id: id
      }
   })
}