import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SponsorsService{

    async getSponsor(){
        const res = await api.get('api/ads')
        logger.log(res.data)
        AppState.sponsors = res.data
        logger.log(AppState.sponsors)
        

    }



}


export const sponsorsService = new SponsorsService()