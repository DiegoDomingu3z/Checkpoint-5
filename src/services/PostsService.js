import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService{

async getPost(query = {}){
    const res = await api.get('api/posts/', {params: query})
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
    logger.log(AppState.posts)
}


async searchPost(query = ''){
    AppState.query = query
    const res = await api.get(`api/posts?query=${query}`)
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
}


async createPost(postData){
    const res = await api.post('api/posts', postData)
    logger.log(res.data)
    AppState.posts.unshift(res.data)

}


async deletePost(id){
    const res = await api.delete('api/posts/' + id)
    logger.log(res.data)
    AppState.posts =  AppState.posts.filter(p => p.id != id)
}


async changePage(url){
    const res = await api.get(url)
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer

}

async postLike(id){
    const res = await api.post(`api/posts/${id}/like`)
    logger.log(res.data, 'liking in service')
    AppState.likes = res.data.likes
    let like = AppState.posts.findIndex(l => l.id === id)
    AppState.posts.splice(like, 1, res.data)
}

}



export const postsService = new PostsService()