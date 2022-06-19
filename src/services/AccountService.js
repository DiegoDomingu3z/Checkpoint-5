import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
      logger.log(res.data, 'THIS IS ACCOUNT DATA')
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(accountData){
    const res = await api.put('account', accountData)
    logger.log(res.data, 'new account info')
    AppState.account = res.data
  }
}

export const accountService = new AccountService()
