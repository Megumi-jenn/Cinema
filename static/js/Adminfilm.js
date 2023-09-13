const Titre=document.getElementById("title");
const Realisateur=document.getElementById("rlst");
const valider=document.getElementById("bouton");
const tableF=document.getElementById("tableF");
const supprimer=document.getElementById("supprimer");
const modifier=document.getElementById("modifier");

tableF.onclick=(event)=>{
    const selectedrow=event.target.closest("tr");
    const rowData=Array.from(selectedrow.children).map(cell => cell.textContent);
    Titre.value=rowData[1];  
}

modifier.onclick=() =>{
    modif.setAttribute("href","/modifier/"+ Titre.value+"/"+Realisateur.value);
    console.log(modifier.getAttribute("href"));
}