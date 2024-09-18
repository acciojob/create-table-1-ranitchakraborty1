function insert_Row() {
    //Write your code here
	
	let table = document.getElementById('sampleTable');
	
	let newRow = table.insertRow();
	
	let leftCell = newRow.insertCell(0);
	leftCell.innerHTML ="New Cell1";
	let rightCell = newRow.insertCell(1);
	rightCell.innerHTML ="New Cell2";
	
	
  
  
}
