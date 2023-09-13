
const matricule=document.getElementById("matricl");
const valider=document.getElementById("bouton");
const tableB=document.getElementById("tableB");
const supprimer=document.getElementById("supprimer");
const modifier=document.getElementById("modifier");

tableB.onclick=(event)=>{
    const selectedrow=event.target.closest("tr");
    const rowData=Array.from(selectedrow.children).map(cell => cell.textContent);

    matricule.value=rowData[1]; 
}
modifier.onclick=() =>{
    modif.setAttribute("href","/modifier/"+ matricule.value);
    console.log(modifier.getAttribute("href"));
}