// var fso = new ActiveXObject("Scripting.FileSystemObject"); 

// function showFolderFileList(directoryPath) { 
// var s = []; var f = fso.GetFolder(directoryPath); 
// var fc = new Enumerator(f.files);
// for (; !fc.atEnd(); fc.moveNext()){s.push(fc.item());}
// return s; 
// }
// function listFiles(directoryPath, x) { 
// var array = showFolderFileList(directoryPath);
// for(let i = 0; i < array.length; i++)
// {
  // var option = document.createElement("option"); // Creare un nuovo elemento option
  // option.text = file; // Impostare il testo dell'opzione
  // x.appendChild(option); // Aggiungere l'opzione al select
// }

 // }

function Carica()
{
var x = document.getElementById("Scenari");
const fs = require(['fs'],function(fs){});
const directoryPath = '../Scene/';
// listFiles(directoryPath,x);
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Errore durante la lettura della directory:', err);
    return -1;
  }

  files.forEach(file => {
  var option = document.createElement("option"); // Creare un nuovo elemento option
  option.text = file; // Impostare il testo dell'opzione
  x.appendChild(option); // Aggiungere l'opzione al select
  });
});
}

function CaricaScenario()
{
	var img = document.getElementById("Scenario");
	var scenari = document.getElementById("Scenari");
	
	img.src = "../Scene/"+scenari.value;
}