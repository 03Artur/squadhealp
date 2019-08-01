import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from '../../constants'


export default function createToken(payload, expires_in) {
    return jwt.sign(payload, TOKEN_PRIVATE_KEY, {expiresIn: expires_in});
}