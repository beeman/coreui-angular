export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/coreui-angular.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.CoreUIAngular',
  globals: {
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router'
  }
}
