import passport from 'passport';
import { jwtStrategy } from './strategies/jwtStrategy.js';

passport.use(jwtStrategy);
