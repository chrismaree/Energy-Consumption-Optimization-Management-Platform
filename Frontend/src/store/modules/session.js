// import Authenticator from '../../../utils/Authenticator';

import jwt_decode from 'jwt-decode';

// const auth = new Authenticator()

const state = {
    authenticated: false,
    accessToken: "",
    idToken: "",
    expiresAt: "",
    profile: {
        email: "",
        picture: "",
        nickname: "",
        role: "",
    },
}

const getters = {
    authenticated(state) {
        return state.authenticated
    },
    accessToken(state) {
        console.log("token")
        return state.accessToken
    },
}

const mutations = {
    authenticated(state, authData) {
        // let time = new Date(); // for now
        // if (time.getSeconds() > authData.expiresIn * 1000 + new Date().getTime()) {
        //     console.log("Token is expired")
        //     this.logout()
        //     return
        // }

        state.authenticated = true
        state.accessToken = authData.accessToken
        state.idToken = authData.idToken
        state.expiresAt = authData.expiresIn * 1000 + new Date().getTime()

        //profile info is within the idToken. we extract this then use the defined
        // name space to extract the other profile info
        let rawProfile = jwt_decode(authData.idToken)['https://registree.com/user_metadata']
        state.profile.email = rawProfile['email']
        state.profile.picture = rawProfile['picture']
        state.profile.nickname = rawProfile['nickname']
        //roles from auth0 are returned as an array. for Alpha, we only assign one role to each user type so subindex the array
        state.profile.role = rawProfile['roles'][0]
    },

    logout(state) {
        state.authenticated = false
        state.accessToken = null
        state.idToken = false
        state.expiresAt = 0
        state.profile.email = ""
        state.profile.picture = ""
        state.profile.nickname = ""
        state.profile.role = ""
    },
    setSessionRole(state, role) {
        state.profile.role = role
    }

}

const actions = {
    login() {
        auth.login()
    },

    logout({
        dispatch,
        commit
    }) {

        commit('logout')
    },

    handleAuthentication({
        commit
    }) {
        auth.handleAuthentication().then(authResult => {
            commit('authenticated', authResult)
        }).catch(err => {
            console.log(err)
        })
    },

}

export default {
    state,
    getters,
    mutations,
    actions
}