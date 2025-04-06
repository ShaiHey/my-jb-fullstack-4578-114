import config from "config";
import dropboxAuth, { DoneCallback, Profile } from "passport";
import { Strategy } from 'passport-dropbox-oauth2'

const dropboxConfig = {...config.get<object>('dropbox')}

dropboxAuth.use(new Strategy(dropboxConfig, async function(accessToken: string, refreshToken: string, profile, done: DoneCallback) {
    try {
        
    } catch (error) {
        
    }
}))

export default dropboxAuth;