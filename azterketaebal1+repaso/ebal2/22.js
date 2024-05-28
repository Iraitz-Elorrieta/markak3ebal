//FUNTZIO BIETAN BEHARKO DITUGUN ALDAGAIAK

let zbkia = document.getElementById("zbkia");//Fakturan, lerro bakoitzak izango duen zenbakia da. 
let bez = document.getElementById("bez");
let produktua = document.getElementById("produktua");
let kopurua = document.getElementById("kopurua");
let tiketa = document.getElementById("tiketa");

let lista = new Set(); // edozein motatako balio bakarrak gordetzeko balio duen objektua


// AUKERATZEN DEN ARTIKULU BAKOITZA
function gorde() {
  //Lehenengo artikulua aukeratzen denean, goiburua idatzi behar da. 
  if (zbkia.value == 1) {
    tiketa.innerHTML = "Zbkia\tProduktua\tKopurua\tSalneurria\tZenbatekoa";
  }
  
  let artikulua = produktua.options[produktua.selectedIndex].text;
  
  // Objektu bat definitzen da, akeratzen diren artikulu guztiak gordetzeko balio du, ondoren fakturara errez eraman ahal izateko. 
  // Objektua sortzearekin batera balioak esleitzen dizkiot.
  let obj = { zbkia: zbkia.value, 
              produktua: artikulua, 
              kopurua: kopurua.value, 
              prezioa: produktua.value };
  lista.add(obj); //Lista aldagai globala da, ondoren faktura funtzioak erregistratu diren datu guztiak gorde ahalko ditu.


  tiketa.innerHTML += "\n" + zbkia.value + "\t" + artikulua + (artikulua == "Kamiseta" ? "\t" : "\t\t") + kopurua.value + "\t" + produktua.value + "\t\t" + (produktua.value * kopurua.value).toFixed(2);
  zbkia.value++;
}

// FAKTURA SORTUKO DA ARTIKULU GUZTIAK AUKERATU ONDOREN
function faktura() {
	
  let totala = 0;
  let table = document.getElementById("taula");
  let gorputza;

	// Taula sortzeko JS kodea. Beti izango da berdina. Posiblea zen taula aldez aurretik sortuta egotea eta hemen erakustea, besterik ez. 
  if (table) {
    gorputza = table.tBodies[0];
    gorputza.innerHTML = "";
  } else {
    table = document.createElement("table");
    document.body.appendChild(table);
    table.setAttribute("id", "taula");
    table.style.border = "1px solid black";
    let head = table.createTHead();
    let row = head.insertRow();
    let cell = row.insertCell();
    cell.outerHTML = "<th>Zbkia</th>";//cell.innerHTML jarriko bagenu, txertatuko genuke <td> barruan Zbkia edukia. OuterHTML-rekin gainidazten dugu <th> etiketa <td> etiketa gainean
    cell = row.insertCell();
    cell.outerHTML = "<th>Produktua</th>";
    cell = row.insertCell();
    cell.outerHTML = "<th>Kopurua</th>";
    cell = row.insertCell();
    cell.outerHTML = "<th>Salneurria</th>";
    cell = row.insertCell();
    cell.outerHTML = "<th>Zenbatekoa</th>";
    gorputza = table.createTBody();
  }

	// Foreach egituraren antzekoa. Objektu baten balioak errekorritzeko balio duen egitura: for .. of ..
  for (let obj of lista) {
    let prezioa = (obj.prezioa * obj.kopurua).toFixed(2);
    totala += parseFloat(prezioa);
    let row = gorputza.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = obj.zbkia;
    cell = row.insertCell();
    cell.innerHTML = obj.produktua;
    cell = row.insertCell();
    cell.innerHTML = obj.kopurua;
    cell = row.insertCell();
    cell.innerHTML = obj.prezioa;
    cell = row.insertCell();
    cell.innerHTML = prezioa;
    tr = document.createElement("tr");
  }

	// Fakturaren emaitza finala kalkulatzeko
  let bezValue = (totala * bez.value / 100).toFixed(2);
  let row = gorputza.insertRow();
  let cell = row.insertCell();
  cell = row.insertCell();
  cell = row.insertCell();
  cell = row.insertCell();
  cell.outerHTML = "<th>BEZ</th>";
  cell = row.insertCell();
  cell.innerHTML = bezValue;
  row = gorputza.insertRow();
  cell = row.insertCell();
  cell = row.insertCell();
  cell = row.insertCell();
  cell = row.insertCell();
  cell.outerHTML = "<th>Guztira</th>";
  cell = row.insertCell();
  cell.innerHTML = totala.toFixed(2);

}