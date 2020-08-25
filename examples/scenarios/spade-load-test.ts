import { get, log, think, scenario, before, Context } from '../../src';

scenario(
  {
    name: 'Spade SSR flow',
    weight: 1,
  },
  before(async (context: Context) => {
    context.cookie(
      '_oauth2_proxy',
      '',
    );
  }),
  get({
    url: 'https://experience.expdevint.shift21.ffx.nz',
  }),
  log('Logged in the landing page'),
  think(2000),
);
