const btn_form = document.querySelector("form>button")
console.log(btn_form)
const form = document.querySelector("form")
btn_form.addEventListener('click', (el)=>{
    el.preventDefault()

    var filhosForm = [...document.querySelectorAll("form>*")]
    var nome = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    var telefone = document.getElementById("telefone").value;

    // Validação do nome (não pode estar vazio)

    filhosForm.map((el)=>{
        if(el.value == ""){
            alert("Por favor, preencha todos os campos!")
        }
    })

    // Validação do email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    // Validação da senha (pelo menos 6 caracteres)
    if (senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres.");
        return false;
    }

    // Validação do telefone (formato numérico com ou sem traços)
    var telefonRePattern = /^\d{10}|\d{3}-\d{4}-\d{3}$/;
    if (!telefone.match(telefonePattern)) {
        alert("Por favor, insira um telefone válido (XXXXXXXXXX ou XXXX-XXXX-XXX).");
        return false;
    }

    // Se todas as validações passarem, o formulário será enviado
    return true;
    form.submit()
})




