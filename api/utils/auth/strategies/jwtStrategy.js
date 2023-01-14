import { Strategy, ExtractJwt } from 'passport-jwt';

import { config } from '../../../config/config.js';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const jwtStrategy = new Strategy(options, (payload, done) =>
  done(null, payload)
);

export { jwtStrategy };
