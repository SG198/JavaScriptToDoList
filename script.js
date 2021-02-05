function getandupdate()
            {
                ti=document.getElementById('title').value;
                desc=document.getElementById('description').value;
                
                if(localStorage.getItem('itemJson')==null)
                {
                   
                    itemJsonArray=[];
                    itemJsonArray.push([ti,desc]);
                    localStorage.setItem('itemJson',JSON.stringify( itemJsonArray));
                }
                else
                {
                    itemJsonArraystr=localStorage.getItem('itemJson');  
                    itemJsonArray=JSON.parse( itemJsonArraystr); 
                    itemJsonArray.push([ti,desc]);
                    localStorage.setItem('itemJson',JSON.stringify( itemJsonArray));
                }
                update();
            }
            function update()
            {
                if(localStorage.getItem('itemJson')==null)
                {
                   
                    itemJsonArray=[];
                   
                    localStorage.setItem('itemJson',JSON.stringify( itemJsonArray));
                }
                else
                {
                    itemJsonArraystr=localStorage.getItem('itemJson');  
                    itemJsonArray=JSON.parse( itemJsonArraystr); 
                    
                }
               
                let tableBody=document.getElementById('tableBody');
                let str="";
                itemJsonArray.forEach((element,index) => {
                    str+=`
                    <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-primary" onclick="deleted(${index})">delete</button></td>
                   </tr>`

                    
                });
                tableBody.innerHTML=str;
            }
            add=document.getElementById("add");
            add.addEventListener("click",getandupdate);
            update();

            function deleted(itemIndex)
            {
                console.log("Delete",itemIndex);
                itemJsonArraystr=localStorage.getItem('itemJson');  
                    itemJsonArray=JSON.parse( itemJsonArraystr); 
                    itemJsonArray.splice(itemIndex,1);
                    localStorage.setItem('itemJson',JSON.stringify( itemJsonArray));
                    update();

            }

            function clearList() {
                localStorage.clear();
                update();
            }