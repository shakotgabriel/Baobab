import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
interface JwtPayload {
  sub: string;
  email: string;
}
const jwtSecret = process.env.JWT_SECRET_KEY || 'default_secret';
if (!jwtSecret) {
  throw new Error('JWT_SECRET_KEY is not set!');
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    });
  }
  validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email };
  }
}
