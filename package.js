var path = require('path');
Package.describe({
  summary: "JQuery Select2"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.use('jquery-ui');
  api.add_files(path.join('select2/select2.png'), 'client');
  api.add_files(path.join('select2/select2x2.png'), 'client');
  api.add_files(path.join('select2/select2-spinner.gif'), 'client');
  api.add_files(path.join('select2/select2.css'), 'client');
  api.add_files(path.join('select2/select2.js'), 'client');
});
