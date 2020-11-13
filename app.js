const db=firebase.firestore();
const ref = db.ref("apartment");
new Vue({
    //ในel เอาid มาใส่
    el:'#addapartment',
    data:{
        nameapartment:'ice',
        messages:[],
        emailowner:'',
        address:'',
        phone:'',
        picture:''

    },
    methods:{
        Onsubmit:function(){
            ref.push({nameapartment:this.nameapartment,address:this.address,phone:this.phone,emailowner:this.emailowner,picture:this.picture})
            console.log(this.messages);
        },
        
    },
    created(){

    }
})
// 
// const table= document.querySelector('#tbresult');
// const card = document.querySelector('#cardresult');
// db.collection('user').get().then((snapshot) =>{
//     snapshot.forEach(doc=>{
//         showData(doc);
//     });
// });

// //เอาข้อมูลในdb ไปแสดงในตารางtable
// function showData(doc){
//     var row = table.insertRow();
//     var cell1=row.insertCell(0);
//     var cell2=row.insertCell(1);
//     var cell3=row.insertCell(2);
//     var cell4=row.insertCell(3);
//     var cell5=row.insertCell(4);
//     var cell6=row.insertCell(5);
//     cell1.innerHTML=doc.data().idcard;
//     cell2.innerHTML=doc.data().name;
//     cell3.innerHTML=doc.data().lastname;
//     cell4.innerHTML=doc.data().gender;
//     cell5.innerHTML=doc.data().phone;
//     cell6.innerHTML=doc.data().phone;
// }