//Carregar os elementos a partir de iniciar a página
window.onload = function () {
    
    //Função do cronômetro
    function meuCronometro(horaUser, minutoUser, segundosUser) {
        //Faço um intervalo de 1 segundo
        var cronometro = setInterval(function () {

            //Faço um ouvinte ao meu botão de parar
            document.getElementById('parar').addEventListener('click', () => {
                clearInterval(cronometro);
            });

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
                        document.querySelector('body').style = "background: #0F0529";
                    } else if (segundosUser == 9) {
                        document.querySelector('body').style = "background: #4A2574";
                    } else if (segundosUser == 8) {
                        document.querySelector('body').style = "background: #7338A0";
                    } else if (segundosUser == 7) {
                        document.querySelector('body').style = "background: #924DBF";
                    } else if (segundosUser == 6) {
                        document.querySelector('body').style = "background: #9E72C3";
                    } else if (segundosUser == 5) {
                        document.querySelector('body').style = "background: #262254";
                    } else if (segundosUser == 4) {
                        document.querySelector('body').style = "background: #11001C";
                    } else if (segundosUser == 3) {
                        document.querySelector('body').style = "background: #1A0129";
                    } else if (segundosUser == 2) {
                        document.querySelector('body').style = "background: #220135";
                    } else {
                        document.querySelector('body').style = "background: #0F0529";
                    }
                    //Decremento 1 nos segundos
                    segundosUser--;
                }
                else {
                    //Caso esteja maior que 0 decrementa os segundos
                    segundosUser--;
                }
            }
            //Aqui eu decremento 1 ao minuto caso os segundos são zerados
            //E coloco 60 ao segundos para repetir o intervalo
            if (minutoUser > 0 && segundosUser == 0) {
                segundosUser = 60;
                minutoUser--;
            }
            //Aqui é a mesma lógica mas para as horas
            if (minutoUser == 0 && horaUser > 0) {
                minutoUser = 60;
                horaUser--;
            }
        }, 1000);

    }

    /*Adiciono um ouvinte ao meu botão de inserir que preenche os campos e adiciona
    para minha função cronômetro*/
    document.getElementById('inserir').addEventListener('click', () => {
        var valorH = document.getElementById('hora').value;
        var valorM = document.getElementById('minuto').value;
        var valorS = document.getElementById('segundo').value;

        if (validarEntrada(valorH, valorM, valorS) == 1) {
            
            meuCronometro(valorH, valorM, valorS);
        } else{
            alert("Preenche os campos com seus tempos corretos!");
        }
    });

    document.getElementById('continuar').addEventListener('click', () => {
        var valorH = document.getElementById('hora').value;
        var valorM = document.getElementById('minuto').value;
        var valorS = document.getElementById('segundo').value;

        if (validarEntrada(valorH, valorM, valorS) == 1) {
            meuCronometro(valorH, valorM, valorS);
        }
        else {
            alert("Preenche os campos com seus tempos corretos!");
        }
    });

    function validarEntrada(hora, minuto, segundo) {
        if (hora > 24 || hora < 0) {
            return 0;
        }
        else if (minuto > 60 || minuto < 0) {
            return 0;
        }
        else if (segundo > 60 || segundo < 0) {
            return 0;
        }
        return 1;
    }

}