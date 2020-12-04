const database = firebase.database();

const sendBtn = document.getElementById('sendBtn');
const nq = document.getElementById('newquestion');
const hist= document.getElementById('history');
const cq=document.getElementById('CurrentQuestion');

const send = () => {
    if(nq.value === ''){
        alert('No hay una pregunta para enviar');
        return;
    }

    let referencia= database.ref('Group/Questions').push();
    let question = {
        id:referencia.key,
        nq:newquestion.value,

    };
referencia.set(question);

nq.value='';

}

sendBtn.addEventListener('click',send);

//Lectura

database.ref('Group/Questions').on('value', function(data){
    hist.innerHTML = ' ';
    data.forEach(
        question=>{
            let valor = question.val();
            console.log(valor.nq);
            let fila = new List(valor);
            hist.appendChild(fila.render());
        }
    );
});


database.ref('Group/Questions').on('value', function(data){
    data.forEach(
        question=>{
            let valor = question.val();
            cq.innerHTML=valor.nq + " " + valor.rate;
        }
    );
});