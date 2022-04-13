
function DNAStrand(dna) {
    let dnaListChar = dna.split("")
    let newDna = [];
    dnaListChar.map(function (element) {
        if (element == "A") {
            newDna.push("T")
        } else if (element == "T") {
            newDna.push("A")
        } else if (element == "C") {
            newDna.push("G")
        } else if (element == "G") {
            newDna.push("C")
        }
    })
    return newDna.join("")
}
console.log(DNAStrand("ATTGC"))
//nesse teste usei o método split para transformar a string em array e depois usei o método joi para unir novamente






/*
Outras oluções que vi
========================================
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
==========================================
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
==========================================
function DNAStrand(dna) {
  return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}
==========================================
function DNAStrand(dna){
  return dna.toLowerCase().replace(/a/g,'T').replace(/t/g,'A').replace(/g/g,'C').replace(/c/g,'G');
}
==========================================


*/