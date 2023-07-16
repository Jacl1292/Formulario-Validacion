let Form = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input')
let enviar = true;

const expresiones = {
    card: /^[0-9]{16}$/,
    CVC: /^[0-9]{4}$/,
    amount: /^\d+(\.\d{1,2})?$/,
    inputName: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
    inputName2: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
    inputCity: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
    inputcod:/^\d{5}$/,
    opinion: /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/,

}

const validar =(e)=>{
    
switch (e.target.name) {
    case "card" :
          validarcampo(expresiones.card, e.target, Form.card, 'form-group-card' )
        break;
        case "CVC" :
          validarcampo(expresiones.CVC, e.target, Form.CVC, 'form-group-CVC' )
        break;
        case "amount" :
            validarcampo(expresiones.amount, e.target, Form.amount, 'form-group-amount' )
        break;
        case "inputName" :
            validarcampo(expresiones.inputName, e.target, Form.inputName, 'form-group-inputName' )
        break;
        case "inputName2" :
            validarcampo(expresiones.inputName2, e.target, Form.inputName2, 'form-group-inputName2' )
        break;
        case "inputCity" :
            validarcampo(expresiones.inputCity, e.target, Form.inputCity, 'form-group-inputCity' )
        break;
        case "inputcod" :
            validarcampo(expresiones.inputcod, e.target, Form.inputcod, 'form-group-inputcod' )
        break;
        
}
}

const validarcampo = (expresion, input, campo, explica ) =>{
    if(expresion.test(input.value)){
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        document.querySelector('#'+ explica +' .d-none').classList.remove('d-block')
        document.querySelector('#alerta .d-none').classList.remove('d-block')
    } else{
        enviar= false;
        campo.focus();
        campo.classList.add('is-invalid');
        document.querySelector('#'+ explica +' .d-none').classList.add('d-block')
        document.querySelector('#alerta .d-none').classList.add('d-block')
    }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validar);
  input.addEventListener('blur' , validar);
});

Form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
})
