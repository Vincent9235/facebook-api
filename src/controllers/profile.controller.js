import * as ProfileModel from '../models/profile.model';

export const returnProfile = async(_request, response) => {
  const id = _request.params.id;
  
  response.json({
    profile: await ProfileModel.getById(id)
  })
}

export const updateProfile = async (_request,response) => {
    const profileData = _request.body;
    const {id} = _request.params;
    const profile = await ProfileModel.upsertUser({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        userId: id
    });
    response.status(201).json(profile);
}

export const updatePosts = async (_request, response) => {
  const postsData = _request.body;
  const {id} = _request.params;

  const posts = await PostsModel.updateById({
    id: id,
    message: postsData.message,
    updatedAt: new Date()
  })
  response.json({ posts });
}

export const deleteUser = async(_request, response) => {
  const id = _request.params.id;
  const profile = await ProfileModel.deleteById(id)
  response.json({});
}