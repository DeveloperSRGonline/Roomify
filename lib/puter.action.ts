import puter from "@heyputer/puter.js";

export const signIn = async () => await puter.auth.signIn();

export const signOut = async () => puter.auth.signOut();

// helper function get current user
export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser()
    } catch (error) {
        return null;// if user is not logged in
    }
}