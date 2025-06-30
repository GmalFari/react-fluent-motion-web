
/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "ar"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["app", "src"],
    },
  ],
  format: "po",
};
