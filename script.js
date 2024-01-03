var app = angular.module('surfacearea', []);
app.controller('myCtrl', function($scope) {
  $scope.list = ['a-propos/', 'services/'];
  $scope.d2lAddress = "https://maxime-guinard.fr/"
  $scope.lastMod = "2023-05-31";
  $scope.xml = {
    header: '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    footer: "</urlset>",
    beginLine: "<url><loc>",
    endLinea: "</loc><lastmod>",
    endLineb: "</lastmod><changefreq>weekly</changefreq><priority>0.1</priority></url>"
  };
  $scope.appTitle = "XML Sitemap Generator";
 });

function selectText(xmlOutput) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(xmlOutput));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(xmlOutput));
    window.getSelection().addRange(range);
  }
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn-txt").addEventListener("click", function() {
  // Generate download of hello.txt file with some content
  var text = document.getElementById("xmlOutput").textContent;
  var filename = "sitemap.txt";

  download(filename, text);
}, false);

document.getElementById("dwn-btn-xml").addEventListener("click", function() {
  // Generate download of hello.txt file with some content
  var text = document.getElementById("xmlOutput").textContent;
  var filename = "sitemap.xml";

  download(filename, text);
}, false);