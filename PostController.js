import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOnePost(req, res) {
    try {
      const post = await PostService.getOnePost(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async deletePost(req, res) {
    try {
      const removedPost = await PostService.deletePost(req.params.id);
      return res.json(removedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new PostController();
