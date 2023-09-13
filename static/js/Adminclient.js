const id=document.getElementById("id_C");
const nom=document.getElementById("nomC");
const age=document.getElementById("ageC");
const valider=document.getElementById("valider");
const tableC=document.getElementById("tableC");
const supprimer=document.getElementById("supprimer");
const modif=document.getElementById("modifier");

tableC.onclick=(event)=>{
    const selectedrow=event.target.closest("tr");
    const rowData=Array.from(selectedrow.children).map(cell => cell.textContent);
    id.value=rowData[0];
    nom.value=rowData[1]; 
    age.value=rowData[2]; 
}
modif.onclick=() =>{ 
    modifier.setAttribute("href","/update/"+ id.value +"/"+ nom.value +"/" +age.value);
    console.log(modif.getAttribute("href"));
}
