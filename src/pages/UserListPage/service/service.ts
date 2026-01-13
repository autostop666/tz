import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const getUsers =() =>{
    return openApi(BASE_URL).get('/users')
};

