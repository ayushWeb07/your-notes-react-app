module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['y+XqQ8yzbNf8sNtVuz7Ndw==', 'ButyNYK42L8yiDcu44+w+A==', 'N0iORueQ50osD8blTaDM2w==', 'WS53+Ch1ucNzHz/xcR2XiQ=='],
  },
});
