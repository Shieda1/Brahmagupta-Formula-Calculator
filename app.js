// https://calculator.swiftutors.com/brahmagupta-formula-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofanInscribedQuadrilateralRadio = document.getElementById('areaofanInscribedQuadrilateralRadio');
const LengthofQuadrilateralSideaRadio = document.getElementById('LengthofQuadrilateralSideaRadio');
const LengthofQuadrilateralSidebRadio = document.getElementById('LengthofQuadrilateralSidebRadio');
const LengthofQuadrilateralSidecRadio = document.getElementById('LengthofQuadrilateralSidecRadio');
const LengthofQuadrilateralSidedRadio = document.getElementById('LengthofQuadrilateralSidedRadio');

let areaofanInscribedQuadrilateral;
let LengthofQuadrilateralSidea = v1;
let LengthofQuadrilateralSideb = v2;
let LengthofQuadrilateralSidec = v3;
let LengthofQuadrilateralSided = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

areaofanInscribedQuadrilateralRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Quadrilateral Side a';
  variable2.textContent = 'Length of Quadrilateral Side b';
  variable3.textContent = 'Length of Quadrilateral Side c';
  variable4.textContent = 'Length of Quadrilateral Side d';
  LengthofQuadrilateralSidea = v1;
  LengthofQuadrilateralSideb = v2;
  LengthofQuadrilateralSidec = v3;
  LengthofQuadrilateralSided = v4;
  result.textContent = '';
});

LengthofQuadrilateralSideaRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Inscribed Quadrilateral';
  variable2.textContent = 'Length of Quadrilateral Side b';
  variable3.textContent = 'Length of Quadrilateral Side c';
  variable4.textContent = 'Length of Quadrilateral Side d';
  areaofanInscribedQuadrilateral = v1;
  LengthofQuadrilateralSideb = v2;
  LengthofQuadrilateralSidec = v3;
  LengthofQuadrilateralSided = v4;
  result.textContent = '';
});

LengthofQuadrilateralSidebRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Inscribed Quadrilateral';
  variable2.textContent = 'Length of Quadrilateral Side a';
  variable3.textContent = 'Length of Quadrilateral Side c';
  variable4.textContent = 'Length of Quadrilateral Side d';
  areaofanInscribedQuadrilateral = v1;
  LengthofQuadrilateralSidea = v2;
  LengthofQuadrilateralSidec = v3;
  LengthofQuadrilateralSided = v4;
  result.textContent = '';
});

LengthofQuadrilateralSidecRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Inscribed Quadrilateral';
  variable2.textContent = 'Length of Quadrilateral Side a';
  variable3.textContent = 'Length of Quadrilateral Side b';
  variable4.textContent = 'Length of Quadrilateral Side d';
  areaofanInscribedQuadrilateral = v1;
  LengthofQuadrilateralSidea = v2;
  LengthofQuadrilateralSideb = v3;
  LengthofQuadrilateralSided = v4;
  result.textContent = '';
});

LengthofQuadrilateralSidedRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Inscribed Quadrilateral';
  variable2.textContent = 'Length of Quadrilateral Side a';
  variable3.textContent = 'Length of Quadrilateral Side b';
  variable4.textContent = 'Length of Quadrilateral Side c';
  areaofanInscribedQuadrilateral = v1;
  LengthofQuadrilateralSidea = v2;
  LengthofQuadrilateralSideb = v3;
  LengthofQuadrilateralSidec = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofanInscribedQuadrilateralRadio.checked)
    result.textContent = `Area of an Inscribed Quadrilateral = ${computeAreaofanInscribedQuadrilateral().toFixed(2)}`;

  else if(LengthofQuadrilateralSideaRadio.checked)
    result.textContent = `Length of Quadrilateral Side a = ${computeLengthofQuadrilateralSidea().toFixed(2)}`;

  else if(LengthofQuadrilateralSidebRadio.checked)
    result.textContent = `Length of Quadrilateral Side b = ${computeLengthofQuadrilateralSideb().toFixed(2)}`;

  else if(LengthofQuadrilateralSidecRadio.checked)
    result.textContent = `Length of Quadrilateral Side c = ${computeLengthofQuadrilateralSidec().toFixed(2)}`;

  else if(LengthofQuadrilateralSidedRadio.checked)
    result.textContent = `Length of Quadrilateral Side d = ${computeLengthofQuadrilateralSided().toFixed(2)}`;
})

// calculation

function computeAreaofanInscribedQuadrilateral() {
  return Math.sqrt((computeP() - Number(LengthofQuadrilateralSidea.value)) * (computeP() - Number(LengthofQuadrilateralSideb.value)) * (computeP() - Number(LengthofQuadrilateralSidec.value)) * (computeP() - Number(LengthofQuadrilateralSided.value)));
}

function computeLengthofQuadrilateralSidea() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeLengthofQuadrilateralSideb() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeLengthofQuadrilateralSidec() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeLengthofQuadrilateralSided() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}

function computeP() {
  return (Number(LengthofQuadrilateralSidea.value) + Number(LengthofQuadrilateralSideb.value) + Number(LengthofQuadrilateralSidec.value) + Number(LengthofQuadrilateralSided.value)) / 2;
}