import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { "API-KEY": "7efaf756-52ed-449a-8457-ba1c8873f2db" }
})

export const usersAPI = {
    // download users from server
    async getUsers (pageNumber, usersOnPage) {
        const response = await axiosConfig.get(`users?page=${pageNumber}&count=${usersOnPage}`)
        return response.data
    },

    // follow button
    async getUsersForUnfollow (userId) {
        const response = await axiosConfig.delete(`follow/${userId}`)
        return response.data
    },

    // unfollow button
    async getUsersForFollow (userId) {
        const response = await axiosConfig.post(`follow/${userId}`)
        return response.data
    },

    // get Profile for profileReducer
    async getUsersProfile (userId) {
        const response = await axiosConfig.get(`profile/${userId}`)
        console.log('response inside User API', response.data)
        return response
    },

    // // header container
    // async authOnServer () {
    //     const response = await axiosConfig.get(`auth/me`)
    //     return response.data
    // }
}


export const profileAPI = {
    // get Profile for profileReducer
    async getUsersProfile (userId) {
        const response = await axiosConfig.get(`profile/${userId}`)
        return response
    },

    async getStatus (userId) {
        const response = await axiosConfig.get(`profile/status/${userId}`)
        return response
    },

    async updateStatus (statusToPush) {
        const response = await axiosConfig.put(`profile/status`, {
            status: statusToPush
        })
        return response
    },

    async savePhoto (photoFile) {
        //debugger
        let formData = new FormData();
        formData.append('image', photoFile)
        const response = await axiosConfig.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    },
}

export const authAPI = {
    async me () {
        const response = await axiosConfig.get(`auth/me`)
        return response
    },

    async login (email, password, rememberMe = false) {
        const response = await axiosConfig.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
        return response
    },

    async logout () {
        const response = await axiosConfig.delete(`/auth/login`)
        return response
    },
}

