
export default {
    namespaced: true,
    state: {
        user: false,
        isAuth: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            if (user) {
                state.isAuth = true;
                return true;
            } else {
                state.isAuth = false;
            }
        },
        LOGOUT(state) {
            state.user = false;
            state.isAuth = false;
        },
    },
    actions: {
        async getUser({ commit, dispatch }) {
            try {
                let storageAuth = window.localStorage.getItem('logged');
                storageAuth = JSON.parse(storageAuth);
                if (!storageAuth) {
                    dispatch('logout');
                    return false;
                }
                const user = {
                    username: storageAuth.username,
                    email: storageAuth.email,
                    firstname: storageAuth.firstname,
                    lastname: storageAuth.lastname,
                    internshipResponses: storageAuth.internshipResponses,
                    university: storageAuth?.university,
                    role: storageAuth.role,
                    organization: storageAuth?.organization
                };
                console.log('usr: ' + user)
                commit('SET_USER', user);

                // console.log(storageToken)
                // GET USER INITIAL INFO HERE.
                await dispatch('internship/getInternships', null, {root: true});

            } catch (err) {
                console.log(err);
                dispatch('logout');
            }
        },
        async login({commit}, user) {
            console.log('User login action running..')
            try {
                window.localStorage.setItem("logged", JSON.stringify(user));
                commit('SET_USER', user)
                return true;
            }
            catch (err) {
                console.log(err)
                return false;
            }
        },
        logout: ({ commit }) => {
            commit('SET_USER', null, null);
            commit('LOGOUT');
            window.localStorage.removeItem("logged");
        }
    },
    getters: {
        allUser(state) {
            return state.user
        }
    }
}