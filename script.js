//Scrip.js
const urlBase = "https://shows-bar-f328c-default-rtdb.firebaseio.com/"

function adicionar()
{
    const nome = $("#nome").val();
    const depoimento = $("#depoimento").val();

    if(nome == "" || nome == null || depoimento == "" || depoimento == null)
        {
            alert("Preencha todos os campos para fazer um depoimento")
            return
        }

const dados = JSON.stringify({nome, depoimento})

    $.post(`${urlBase}.json`, dados, ()=>{
        alert("Dados adicionados com sucesso!");
        $("#nome").val("");
        $("#depoimento").val("");
        listar();
    });
}

function listar()
{
    $.get(`${urlBase}.json`, data =>{
        $("#depoimentos").html("");
        for(const id in data)
            {
                const usuario = data[id];
                $("#depoimentos").append(
                    `
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header" style="height: 40px";>
                                <Strong>${usuario.nome}</Strong>
                            </div>
                            <div class="card-body" style="height: 100px;>
                                <figure>
                                <blockquote class="blockquote">
                                    <p>${usuario.depoimento}</p>
                                </blockquote>
                                </figure>
                            </div>
                        </div>
                    </div>
                    `
                );
            }
    });
}


$(document).ready(() => 
    {
        listar();
    });