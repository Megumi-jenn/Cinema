const id=document.getElementById("idS");
const date=document.getElementById("DateS");
const Horaire=document.getElementById("heureS");
const valider=document.getElementById("valider");
const tableS=document.getElementById("tableS");
const supprimer=document.getElementById("supprimer")
const modifier=document.getElementById("modifier")

tableS.onclick=(event)=>{
    const selectedrow=event.target.closest("tr");
    const rowData=Array.from(selectedrow.children).map(cell => cell.textContent);
    id.value=rowData[0];
    date.value=rowData[1]; 
    Horaire.value=rowData[2]; 
}

modifier.onclick=() =>{
    modif.setAttribute("href","/modifier/"+id.value+"/"+ date.value+"/"+Horaire.value);
    console.log(modifier.getAttribute("href"));
}

