const nomclient=document.getElementById("nomClient");
const ageclient=document.getElementById("ageClient");
const chaises=document.getElementById("siege");
const valider=document.getElementById("valider");
const tableR=document.getElementById("tableR");
const supprimer=document.getElementById("supprimer");

tableR.onclick=(event)=>{
    const selectedrow=event.target.closest("tr");
    const rowData=Array.from(selectedrow.children).map(cell => cell.textContent);
    nomclient.value=rowData[1]; 
    ageclient.value=rowData[2]; 
    chaises.value=rowData[3];  
}


