//Carregar os elementos a partir de iniciar a página
window.onload = function () {
    //Aqui eu atribuo um estado como falso ao intervalo
    let estado = false;

    //Função do cronômetro
    function meuCronometro(horaUser, minutoUser, segundosUser) {
        //Se este estado estiver falso executa o intervalo
        if (estado == false) {

            //Faço um intervalo de 1 segundo
            var cronometro = setInterval(function () {

                //Adiciono os valores de entrada o usuário
                document.getElementById('hora').value = horaUser.toString().padStart(2, "0");
                document.getElementById('minuto').value = minutoUser.toString().padStart(2, "0");
                document.getElementById('segundo').value = segundosUser.toString().padStart(2, "0");

                //Verefico se o segundo é maior que 0
                if (segundosUser > 0) {
                    //Verefico se os segundos é maior ou igual a 10 para a contagem regressiva
                    if (horaUser == 0 && minutoUser == 0 && segundosUser <= 10) {
                        //Oculto os inputs de horas e minutos
                        document.getElementById('hora').style.display = 'none';
                        document.getElementById('minuto').style.display = 'none';
                        document.getElementById('pontos1').style.display = 'none';
                        document.getElementById('pontos2').style.display = 'none';

                        //Mostro no input os segundos!
                        document.getElementById('segundo').value = segundosUser.toString().padStart(2, "0");

                        //Aqui eu faço um efeito na minha página na contagem regressiva
                        if (segundosUser == 10) {
                            document.querySelector('section').style = "background: #0F0529";
                        } else if (segundosUser == 9) {
                            document.querySelector('section').style = "background: #4A2574";
                        } else if (segundosUser == 8) {
                            document.querySelector('section').style = "background: #7338A0";
                        } else if (segundosUser == 7) {
                            document.querySelector('section').style = "background: #924DBF";
                        } else if (segundosUser == 6) {
                            document.querySelector('section').style = "background: #9E72C3";
                        } else if (segundosUser == 5) {
                            document.querySelector('section').style = "background: #262254";
                        } else if (segundosUser == 4) {
                            document.querySelector('section').style = "background: #11001C";
                        } else if (segundosUser == 3) {
                            document.querySelector('section').style = "background: #1A0129";
                        } else if (segundosUser == 2) {
                            document.querySelector('section').style = "background: #220135";
                        } else {
                            document.querySelector('section').style = "background: #0F0529";
                        }
                        //Decremento 1 nos segundos
                        segundosUser--;
                    }
                    else {
                        //Caso esteja maior que 0 decrementa os segundos
                        segundosUser--;
                    }
                }

                /*Aqui eu decremento 1 ao minuto caso os segundos são zerados
                E coloco 59 ao segundos para repetir o intervalo*/
                if (minutoUser > 0 && segundosUser == 0) {
                    segundosUser = 59;
                    minutoUser--;
                }

                //Aqui é a mesma lógica mas para as horas
                if (minutoUser == 0 && segundosUser == 0 && horaUser > 0) {
                    minutoUser = 59;
                    segundosUser = 59;
                    horaUser--;
                }
            }, 1000);
        }
        //Faço um ouvinte ao meu botão de parar
        document.getElementById('parar').addEventListener('click', () => {
            //Se o usuario clica em parar ele para o intervalo atribuindo como true o estado
            estado = true;
            clearInterval(cronometro);
        });
    }

    //Adiciono um ouvinte ao meu botão continuar
    document.getElementById('continuar').addEventListener('click', () => {
        //Verefico se o intervalo estiver rodando, se estiver apenas retorno
        if (estado == false) return;

        var valorH = document.getElementById('hora').value;
        var valorM = document.getElementById('minuto').value;
        var valorS = document.getElementById('segundo').value;

        //Caso não estiver rodando, atribuo o estado como falso e chamo a função novamente
        estado = false;
        meuCronometro(valorH, valorM, valorS);
    });


    /*Adiciono um ouvinte ao meu botão de inserir que preenche os campos e adiciona
    para minha função cronômetro*/
    document.getElementById('inserir').addEventListener('click', () => {
        var valorH = document.getElementById('hora').value;
        var valorM = document.getElementById('minuto').value;
        var valorS = document.getElementById('segundo').value;

        if (validarEntrada(valorH, valorM, valorS)) {
            meuCronometro(valorH, valorM, valorS);
        } else {
            alert("Preenche os campos com seus tempos corretos!");
        }
    });

    //Faço a validação de entrada caso os horários não seguem o padrão
    function validarEntrada(hora, minuto, segundo) {
        if (hora > 24 || hora < 0) return 0;
        else if (minuto > 59 || minuto < 0) return 0;
        else if (segundo > 59 || segundo < 0) return 0;
        return 1;
    }
}