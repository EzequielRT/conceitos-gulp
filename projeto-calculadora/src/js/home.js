window.onload = () => {
    document.getElementById('calcular').addEventListener('click', ()=>{

        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        
        if(n1 >= 0 && n2 >= 0) {
            let resultado = n1 + n2;

            document.getElementById('resultado').innerHTML = resultado;
        } else {
            alert('Preencha os dois campos!');
        }

    });
};