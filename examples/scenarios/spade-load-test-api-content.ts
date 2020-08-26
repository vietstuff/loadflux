import { get, log, think, scenario, before, Context } from '../../src';

scenario(
  {
    name: 'Spade API Content flow',
    weight: 1,
  },
  before(async (context: Context) => {
    context.cookie(
      '_oauth2_proxy',
      '',
    );
  }),
  get({
    url: 'https://experience.expdevint.shift21.ffx.nz/spade/api/1.1069/content',
    expect: async (expect, response) => {
      expect(response.body).toContain('Stuff');
    }
  }),
  log('Logged in the landing page'),
  think(2000),
);
