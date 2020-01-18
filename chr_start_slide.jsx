// replace smart object’s content and save psd;
// 2011, use it at your own risk;
#target photoshop
#include json2.js

if (app.documents.length > 0) {
  var myDocument = app.activeDocument;
  var theName = myDocument.name.match(/(.*)\.[^\.]+$/)[1];
  var thePath = myDocument.path;
  //var theLayer = myDocument.activeLayer;
  // psd options;
  psdOpts = new PhotoshopSaveOptions();
  psdOpts.embedColorProfile = true;
  psdOpts.alphaChannels = true;
  psdOpts.layers = true;
  psdOpts.spotColors = true;
  // check if layer is smart object;

  //if (VolLayer.kind != "LayerKind.SMARTOBJECT") {
  //  alert("selected layer is not a smart object")

    // select files;
    //if ($.os.search(/windows/i) != -1) {
    //var theFile = new File("/f/thesis-bioinformatics/paper/chromosomes_plot_data/chr_1_end_tertamer/chr1_end_plot_q.tif");


    //TitleLayer = TitleGroup.layers[0];D:\thesis-bioinformatics\papers\Win_Scripting_Plug-In
    var ppath = "D:\\thesis-bioinformatics\\papers\\finally\\";

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
  //  for (var ii in nnum) {
      for (var i in num) {
        saveJPEG(thNamer);
        alert("saved Jpeg");
        myDocument.saveAs((new File("D:\\thesis-bioinformatics" + '/vol-ID/' + thNamer + "_" +".psd")),psdOpts,true);
        alert("saved psd");
        //for (var j in place) {
          for (var k in letter) {
            var TitleGroup = myDocument.layerSets.getByName('chr_place_plot_');
            var TitleGroup2 = myDocument.layerSets.getByName('chr_text');
            //VolLayer = TitleGroup.layers.getByName(thprevNames);
            var thNamer = 'chr' + num[i] + '_start' + '_plot_';
            var thNames = 'chr' + num[i] + '_start' + '_plot_' + letter[k];
            var thprevNames = 'chr' + nnum[i] + '_start' + '_plot_' + letter[k];
            VolLayer = TitleGroup.artLayers.getByName(thprevNames);
            VolLayer2 = TitleGroup2.artLayers.getByName('Chr1');
            //VolLayer.smartObject.contents = conten.NAME[j];
            //alert(VolLayer);
            myDocument.activeLayer = VolLayer;
            var theFiles = ppath + thNames + '.tif';
          //}
          //else {var theFiles = FDialog ("please select files", getFiles, true)};
          //theFiles = ['D:/thesis-bioinformatics/paper/chromosomes_plot_data/chr_1_end_tertamer/chr1_end_plot_q.tif']
          if (theFiles && thprevNames != thNames) {
            // work through the array;
            //alert(theFiles);
            //alert(theFiles.length);

            VolLayer = replaceContents(theFiles);
            VolLayer2.textItem.contents = thNamer;

            // replace smart object;
            //VolLayer = replaceContents(theFiles);
            //var theNewName = theFiles[m].name.match(/(.*)\.[^\.]+$/)[1];
            //save jpg;




          }

      }
    }



};
////// get psds, tifs and jpgs from files //////
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
  //alert();

};

function saveJPEG(name) {
  var doc = app.activeDocument;
  var file = new File("D:\\thesis-bioinformatics" + '/vol-ID/' + name + '.Jpg');

  var opts = new JPEGSaveOptions();
  opts.quality = 10;

  doc.saveAs(file, opts, true);
}
