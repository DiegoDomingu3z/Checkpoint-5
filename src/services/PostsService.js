import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService{

async getPost(){
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer
    logger.log(AppState.posts)
}


async changePage(url){
    const res = await api.get(url)
    logger.log(res.data)
    AppState.posts = res.data.posts
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer

}
}



export const postsService = new PostsService()