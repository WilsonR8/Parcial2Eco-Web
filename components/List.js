class List {

    constructor(question){
        this.question=question

    }

    render =()=>{
        let component = document.createElement('div');
        component.className='list';

        let questCont= document.createElement('div');
        questCont.innerHTML = this.question.nq;
       

        let qCont= document.createElement('div');
        qCont.className='rate';
        qCont.innerHTML=this.question.rate;

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteBtn';
        deleteBtn.innerHTML = 'X';

        component.appendChild(qCont); 
        component.appendChild(questCont);
        component.appendChild(deleteBtn);



        deleteBtn.addEventListener('click',()=>{
            const database = firebase.database();
            database.ref('Group/Questions/'+this.question.id).set(null);

        });

       
        


        return component;
    }


}