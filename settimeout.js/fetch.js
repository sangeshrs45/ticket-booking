fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
.then((res)=>res.json())
.then((data) => {
    let datas = data.data
    let table = document.createElement('table')
    table.className = 'table table-striped'; 
    let head = document.createElement('thead');
    let headrow = document.createElement('tr');

    Object.keys(datas[0]).forEach(key => {
        // console.log(key)
        let th = document.createElement('th');
        th.innerText = key
        th.className='heading'
        th.style.background="black"     
        th.style.color='white'    
        headrow.appendChild(th)
    })
    head.appendChild(headrow)
    table.appendChild(head)

    let tbody =  document.createElement('tbody')
    datas.forEach((dataItem) => {
        let row = document.createElement('tr')

        Object.values(dataItem).forEach(value => {
            let td = document.createElement('td')
            td.innerText = value;
            row.appendChild(td)
        });
        tbody.appendChild(row)
    });
    table.appendChild(tbody);

    document.getElementById('all').appendChild(table);
} )

.catch((err)=>(err))
