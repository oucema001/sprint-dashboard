import { Auth } from "aws-amplify"
import admin_api from './admin_api'
import graphql_api from './graphql_api'

export default {
    async fetchLoginUser() {
        return Auth.currentAuthenticatedUser()
    },

    async updatePassword(user, oldPassword, newPassword) {
        return Auth.changePassword(
            user,
            oldPassword,
            newPassword
          );
    },

    async completeNewPassword(user, password) {
        return Auth.completeNewPassword(
            user,
            password
          )
    },

    async createNewUser(user) {
        return admin_api.createUser(user.email)
    },

    async addUserToUsersGroup(user) {
        return admin_api.addUserToGroup(user.email, 'Users')
    },

    async getUserGroups(user) {
        return admin_api.getUserGroups(user.email)
    },

    async getAllUsers() {
        return admin_api.getAllUsers()
    },

    async getAllAdminUsers(){
        return admin_api.getAllUsersByGroup('Admins')
    },

    async makeUserAdmin(email){
        return admin_api.addUserToGroup(email, 'Admins')
    },

    // Graphql

    async getAllUserProfiles() {
        return graphql_api.fetchAllUsers()
    },

    async getUserById(id) {
        return graphql_api.fetchUser(id)
    },

    async createUserProfile(data) {
        return graphql_api.createUser(data)
    },

    async updateUser(data) {
        return graphql_api.updateUser(data)
    },

    async createSprint(data) {
        return graphql_api.createSprint(data)
    }
}
