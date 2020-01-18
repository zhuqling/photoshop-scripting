// replace smart object’s content and save psd;
// 2020, use it at your own risk;
#target photoshop
#include json2.js

if (app.documents.length > 0) {
  var myDocument = app.activeDocument;
  var theName = myDocument.name.match(/(.*)\.[^\.]+$/)[1];
  var thePath = myDocument.path;

  psdOpts = new PhotoshopSaveOptions();
  psdOpts.embedColorProfile = true;
  psdOpts.alphaChannels = true;
  psdOpts.layers = true;
  psdOpts.spotColors = true;

//lists for desired filename input
    var num = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "X",
      "Y"
    ];
    var nnum = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "X"
    ];
    var lletter = [
      "q",
      "p",
      "o",
      "n",
      "m",
      "l",
      "u",
      "t",
      "k",
      "j",
      "i",
      "h",
      "g",
      "f",
      "d",
      "c",
      "b",
      "ae",
      "ad",
      "ac",
      "ab",
      "aa",
      "a",
      "z",
      "y",
      "x",
      "w",
      "v"
    ];
    var letter = [
      "q",
      "p",
      "o",
      "n",
      "m",
      "l",
      "u",
      "t",
      "k",
      "j",
      "i",
      "h",
      "g",
      "f",
      "d",
      "c",
      "b",
      "ae",
      "ad",
      "ac",
      "ab",
      "aa",
      "a",
      "z",
      "y",
      "x",
      "w",
      "v"
    ];
  
  
// main code starts here : 

      for (var i in num) {
        saveJPEG(thNamer);
        alert("saved Jpeg");
        myDocument.saveAs((new File("D:\\thesis-bioinformatics" + '/vol-ID/' + thNamer + "_" +".psd")),psdOpts,true);
        alert("saved psd");
        
          for (var k in letter) {
            var TitleGroup = myDocument.layerSets.getByName('chr_place_plot_');
            var TitleGroup2 = myDocument.layerSets.getByName('chr_text');
           
            var thNamer = 'chr' + num[i] + '_start' + '_plot_';
            var thNames = 'chr' + num[i] + '_start' + '_plot_' + letter[k];
            var thprevNames = 'chr' + nnum[i] + '_start' + '_plot_' + letter[k];
            VolLayer = TitleGroup.artLayers.getByName(thprevNames);
            VolLayer2 = TitleGroup2.artLayers.getByName('Chr1');
           
            myDocument.activeLayer = VolLayer;
            var theFiles = ppath + thNames + '.tif';
          
          if (theFiles && thprevNames != thNames) 
          {         
            VolLayer = replaceContents(theFiles);
            VolLayer2.textItem.contents = thNamer;
            }

      }
    }



};
//get psds, tifs and jpgs from files //
function getFiles(theFile) {
  if (theFile.name.match(/\.(psd|tif)$/i)) {
    return true
  };
};
////// replace contents //////
function replaceContents(newFile) {
  // =======================================================
  var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
  var desc3 = new ActionDescriptor();
  var idnull = charIDToTypeID("null");
  desc3.putPath(idnull, new File(theFiles));
  var idPgNm = charIDToTypeID("PgNm");
  desc3.putInteger(idPgNm, 1);

  executeAction(idplacedLayerReplaceContents, desc3, DialogModes.NO);
  

};

function saveJPEG(name) {
  var doc = app.activeDocument;
  var file = new File("D:\\thesis-bioinformatics" + '/vol-ID/' + name + '.Jpg');

  var opts = new JPEGSaveOptions();
  opts.quality = 10;

  doc.saveAs(file, opts, true);
}
