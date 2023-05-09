import resquest from "../http-common"

const findAll = () => {
    return resquest.get("/posts")
}

const save = (blog) => {
    return resquest.post("/posts",blog)
}

export const blogService = {
    findAll,
    save
}