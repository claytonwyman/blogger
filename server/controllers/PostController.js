import express from 'express'

import _postService from '../services/PostService';

export default class PostController {
    async getAllBlogs(req, res, next) {
        try {
            let allPosts = await _postService.find()
            res.send(allPosts)
        } catch (error) { next(error) }
    }
    async getPostByTag(req, res, next) {
        try {
            let postByTag = await _postService.find({ tags: { $in: [reg.query.tags] } })
            res.send(blogByTag)
        } catch (error) { next(error) }
    }
    async getPostBySlug(req, res, next) {
        try {
            let postBySlug = await _postService.findOne({ slugs: req.query.slug })
            res.send(postBySlug)
        } catch (error) { next(error) }
    }
    async getBlogById(req, res, next) {
        try {
            let blogById = await _postService.findById(req.params.blogId)
            res.send(blogById)
        } catch (error) { next(error) }
    }
    async createBlog(req, res, next) {
        try {
            let newBlog = await _postService.create(req.body)
            res.send(newBlog)
        } catch (error) { next(error) }
    }
    async editBlog(req, res, next) {
        try {
            let editedBlog = await _postService.findByIdAndUpdate(req.params.blogId, req.body, { new: true
            })
            res.send(editedBlog)
        } catch (error) { next(error) }
    }
    async deleteBlog(req, res, next) {
        try {
            let deletedBlog = await _postService.findByIdAndDelete(req.params.blogId)
            res.send("Blog Deleted")
        } catch (error) { next(error) }
    }


    constructor() {
        this.router = express.Router()
            .get('', this.getAllBlogs)
            .post('', this.createBlog)
            .get('/:blogId', this.getBlogById)
            .get('', this.getPostByTag)
            .get('', this.getPostBySlug)
            .put('/:blogId', this.editBlog)
            .delete('/:blogId', this.deleteBlog)
    }
}