Package.describe({
  name: 'steveturner:autoform-wizard',
  summary: 'A multi step form component for AutoForm.',
  version: '0.7.1',
  git: 'https://github.com/steveturner/meteor-wizard.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'underscore',
    'tracker',
    'reactive-var',
    'templating',
    'blaze',
    'session',
    'ejson',
    'localstorage'
  ], 'client');
  
  api.use('aldeed:autoform@5.0.0', 'client');
  
  api.addFiles([
    'wizard.html',
    'wizard.js',
    'router.js',
    'cache.js'
  ], 'client');
  
  if (api.export)
    api.export('Wizard', 'client');
});