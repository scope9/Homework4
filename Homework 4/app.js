const employeeList = [

    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ];

  let command ='';

  const runCommand = function (event) {
      event.preventDefault();
      switch (command) {
          case 'print':
            let htmlStr = '';
            for (let i = 0; i < employeeList.length; i++){
                htmlStr += `<p> ${employeeList[i].name} </p>`;
                htmlStr += `<p> ${employeeList[i].officeNum} </p>`;

            }
     
            render(htmlStr);
        

            break;

            case 'verify':


            render('verify');

                let userName = $('input').val();

                let htmlStr = 'no';

                for (let i = 0; i < employeeList.length; i++){

                if(employeeList[i].name === userName) {


                htmlStr = 'yes';




                }

                }
                

        }




        // case 'delete':
                // let userName
                // const delete = employeeList.findIndex)e => e.name.toLowerCase()=== username.toLowerCase
                // employeeList.splice(0, index);
                // employeeList.forEach(e => renderEmployee(e)); 

                // break;




            // case 'update':
           // let userName;
           // const index = employeeList.findIndex(e => e.name.toLowerCase() === username.toLowerCase
           // employeeList[index][field] = value;

                // break;
           

           // case 'contains'
           //let userName;
           // employeeList.forEach(e => e.name.toLowerCase().include(userName.toLowerCase))
            // break;

            const verify = function () {
                runCommand = 'verify';
                $('input').addClass('show');
            }

            const print = function () {

                runCommand = 'print';
                $('input').removeClass('show');


            }

            const render = function(htmlStr){
                $('#list').html(htmlStr);
            
            }


            $('#verify').on('click', verify);
            $('#print').on('click', print);
            $('#submit').on('click', runCommand);

 
 
 
 
 
 
 
 
 
    }