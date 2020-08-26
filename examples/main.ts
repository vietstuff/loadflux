import { runner } from '../src';
import './scenarios/spade-load-test';
import './scenarios/spade-load-test-api-content';

runner.sustain(30);
