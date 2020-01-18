# photoshop-scripting
A PSX photoshop scripting code for replacing image and text , also saving a jpg file and psd file in the result folder where the input is taken from a list which can be either read from a file also.

## Video demo (Click Image)
[![](https://raw.githubusercontent.com/avialxee/photoshop-scripting/master/screenshot_Photoshop_125.png)](https://youtu.be/1z4UZH3L5Cs "photoshop-scripting")

### Code 
```
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
    var num = "c:/here/goes/file/path/for/taking/input/file"
    var nnum = "c:/here/goes/file/path/for/taking/input/file"
    var lletter = "c:/here/goes/file/path/for/taking/input/file"
    var letter = "c:/here/goes/file/path/for/taking/input/file"
  
  
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
```
