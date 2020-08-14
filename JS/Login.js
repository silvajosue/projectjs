class login {
    constructor(usuario, senha) {
        this.usuario = usuario,
        this.senha = senha;
    }
}
let musics = [];
let alter = '';

let musica = 'Higway to hell';
let banda = 'AC/DC';
musics.push([musica, banda]);

musica = 'Nave espacial';
banda = 'Liu';
musics.push([musica, banda]);

let admin = new login('admin', 'admin');
let nome = [], sobrenome = [], nascimento = [], usual = [], senha = [], email = [];    


document.addEventListener('click', function (evento) {
    let elemento = evento.target || evento.srcElement;

    switch (elemento.id) {
        case 'login':
            let user = document.getElementById('User').value;
            let password = document.getElementById('Password').value;

            if (user != '' && password != '') {
                if (user === admin.usuario && password === admin.senha) {
                    window.location.href = "Home.html";
                } else {
                    alert('Usuario invalido!');
                    window.location.reload();
                }
            } else{
                alert('Usuario invalido');
                window.location.reload();
                
            }
            break;
        case 'sign':
            window.location.href = "Sign.html";
            break;
        case 'Submit':

            nome.push(document.getElementById('nome').value);
            sobrenome.push(document.getElementById('sobrenome').value);
            nascimento.push(document.getElementById('data').value);
            usual.push(document.getElementById('novoUsuario').value);
            senha.push(document.getElementById('senha'));
            email.push(document.getElementById('email').value);

            let i = nome.length - 1;

            if (nome != '' && sobrenome != '' && usual != '' && senha != '' && email != '') {
                alert('Seja bem vindo a nossa comunidade ' + nome[i]);
                window.location.href = "Home.html";
            } else {
                alert('Por favor, insira todos os campos!');
                window.location.reload();
            }
            break;
        case 'exit':
            if (confirm('Deseja sair?')) {
                window.location.href = "Index.html";
            }
            break;
        case 'sSubmit':
            alert("Agradecemos o seu feedback :)");
            window.location.reload();
            break;
        case 'listar':
            musica = document.getElementById('music').value;
            banda = document.getElementById('band').value;

            capivara(musica, banda, musics);
            break;
        case 'alter':
            alter = elemento.getAttribute('rel');
            musics[alter][0] = prompt('Musica', '');
            musics[alter][1] = prompt('Banda/DJ','');
            document.getElementById('bla-bla').innerHTML = madona(musics);

            break;
        case 'delet':
            if (confirm('Tem certeza que deseja excluir?')) {
                let posi = elemento.getAttribute('rel');
                tRex(musics, posi);
                document.getElementById('bla-bla').innerHTML =
                    madona(musics);
            }
            break;
    }
});

function capivara(msc, bnd, lista) {
    lista.push([msc, bnd]);

    document.getElementById('bla-bla').innerHTML = madona(lista);
}

function madona(lista) {
    let bla = '';
    for (let line = 0; line < lista.length; line++) {
        bla += '<tr>';
        for (let column = 0; column < lista[line].length; column++) {
            bla += '<td>' + lista[line][column] + '</td>';
        }
        bla += '<td><button id="alter" class="myButton" rel="' + line + '">A</button></td>';
        bla += '<td><button id="delet" class="myButton" rel="' + line + '">X</button></td>';
        bla += '</tr>';
    }
    return bla;
}

function tRex(list, posi) {
    list.splice(posi, 1);
}


console.log(musics);