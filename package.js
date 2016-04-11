Package.describe({
  name: 'jorisroling:scrolling',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor implementation of jquery.scrolling',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jorisroling/meteor-scrolling.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lib/scrolling/jquery.scrolling.js','client');
  api.addFiles('lib/infinitscroll/jquery.infinitescroll.js','client');
  // api.addFiles('meteor-scrolling.js');
});

