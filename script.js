var form = document.querySelector('#form');
form.addEventListener('submit',(ele)=>{
    ele.preventDefault()
    parent = document.querySelector('.table');
    var row_data = document.createElement('tr');
    var data = ['FirstName','LastName','Address','Pincode','Gender','State','Country'];
    for(var i of data){
        d1 = document.querySelector(`#${i}`);
        child = document.createElement('td');
        child.innerText = d1.value;
        row_data.append(child);
        d1.value ='';
    }
    var food = document.querySelectorAll('[type="checkbox"]')
    var td = document.createElement('td');
    for(var i of food){
        if(i.checked){
            td.append(i.value);
        }
    }
    row_data.append(td);
    parent.append(row_data);

})


