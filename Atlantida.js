function AT2017() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {


            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 &&  dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11  || dia == 12 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18 ||dia == 19) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25||dia == 26  ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 &&   dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 12:
                if (dia == 1 ||dia == 2||dia == 3 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 ||dia == 17)  {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if ( dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 ||dia == 24) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";


                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }






    function at2018() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if ( dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if ( dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if ( dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if ( dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2 &&  dia == 26 || dia == 27 || dia == 28)
                     mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;
            case 4:
                if (mes == 4 && dia == 1  ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4 &&  dia == 30)
                    mensajefinal = "Fiscalia de Atlántida 2°";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5 &&  dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5 &&  dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5 &&  dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia ==  26 || dia == 27 ) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5 &&  dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 &&  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6 &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16||dia == 17 ) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 &&  dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23||dia == 24 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6 &&  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 2°";
                break;
            case 7:
                if (mes == 7 && dia == 1 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21||dia == 22 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7 &&  dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ||dia == 26) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8 &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 9:
                if (mes == 9 && dia == 1||dia == 2 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ||dia == 9) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9 &&  dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ||dia == 16) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 &&  dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9 &&  dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 1°";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10 &&  dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ||  dia == 21) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10 && dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Atlántida 2°";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 &&  dia == 12  || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25 ) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 12:
                if (dia == 1 ||dia == 2) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if ( dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16)  {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)  {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if ( dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";

                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }






    function at2019() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2 && dia == 25 || dia == 26 || dia == 27 || dia == 28)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4 && dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 2°";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5 && dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5 && dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Atlántida 2°";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 && dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6 && dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6 && dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Atlántida 2°";
                break;
            case 7:
                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7 && dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8 && dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8 && dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 9:
                if (mes == 9 && dia == 1) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9 && dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 && dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9 && dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 && dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10 && dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10 && dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10 && dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10 && dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Atlántida 2°";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 12:
                if (dia == 1) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                    mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                    mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Atlántida 1°";
                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }
 







    function AT2020() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia ==  29  )
                     mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 3:

                if (mes == 3 && dia == 1   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&    dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&  dia == 9 || dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&   dia == 16 || dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&dia == 23 || dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                }  else if (mes == 3  &&  dia == 30 || dia == 31   )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 &&dia == 6 || dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  && dia == 13 || dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4  && dia == 20 || dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  && dia == 27 || dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&   dia == 4 || dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&   dia == 11 || dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&   dia == 18 || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&dia == 25 || dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";




                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&   dia == 8 || dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 &&   dia ==  15 || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&    dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6  &&   dia == 29 || dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 1°";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 && dia == 6 || dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  && dia == 13 || dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7  && dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  &&dia == 27 || dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  &&  dia == 3 || dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  &&   dia == 10 || dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  && dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  && dia == 24  || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  &&    dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&   dia == 7 || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13    ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 &&    dia == 14  || dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20     ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&    dia == 21 ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9  &&     dia ==  28 || dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia de Atlántida 2°";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4     ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  &&   dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11    ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  && dia == 12 ||  dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  &&    dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  &&   dia == 26 || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 11:

                if (mes == 11 && dia == 1    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  &&  dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&  dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  &&  dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&    dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29   ){
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  &&    dia == 30   )
                     mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  &&    dia == 7 || dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12 &&      dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  &&   dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 )   {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12  &&   dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia de Atlántida 1°";




                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }
 









    function AT2021() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
 

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8||dia == 9    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&  dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&   dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 ||  dia == 23 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29 ||  dia == 30  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                }  else if (mes == 3  &&  dia == 31   )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12  || dia == 13 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  &&dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4  &&  dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  &&  dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3   || dia == 4 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&  dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10  ||dia == 11 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17  ||  dia == 18) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&   dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6  &&   dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21  || dia == 22) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&   dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ||  dia == 29 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6  &&  dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 1°";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 && dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12  ||dia == 13 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19|| dia == 20 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  &&  dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9|| dia == 10   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  &&   dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16 ||dia == 17    ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  && dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ||dia == 24   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31   )
                     mensajefinal = "Fiscalia de Atlántida 1°";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&  dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13   ||  dia == 14   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 &&   dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20    || dia == 21   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&    dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||  dia ==  28) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9  &&     dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia de Atlántida 2°";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4   ||  dia == 5  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  &&   dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11  ||  dia == 12  ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  && dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25  || dia == 26   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  &&  dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 11:

                if (mes == 11 && dia == 1  ||  dia == 2   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  && dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ||  dia == 9 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  || dia == 16) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&     dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29||   dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 2°";


                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  &&     dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13   || dia == 14  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20 ||dia == 21   ) {
                     mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  &&    dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27||dia == 28    )   {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia de Atlántida 1°";



 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }






 function AT2022() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";


        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4  ) {
                  mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&  dia == 5  ||dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11  ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 12   ||dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18  ) {
                 mensajefinal = "Fiscalia de Atlántida 1°";
            } else if (mes == 1  &&   dia == 19 ||dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25    ) {
                 mensajefinal = "Fiscalia de Atlántida 2°";
            } else if (mes == 1  &&  dia == 26|| dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                 mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 2:

                if (mes == 2 && dia == 1   ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  &&   dia == 2 ||dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  &&  dia == 9 ||dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15   ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 2  && dia == 16  ||dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 2  && dia == 23  || dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                      mensajefinal = "Fiscalia de Atlántida 1°";
                break;

            case 3:

                if (mes == 3 && dia == 1   ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&    dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&dia == 9 ||   dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 3  &&   dia == 16|| dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 3  &&  dia == 23 ||dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                }  else if (mes == 3  &&  dia == 30  || dia == 31   )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4 && dia == 6 ||dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  &&  dia == 13 ||dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 4  &&  dia == 20 ||dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 4  &&  dia == 27 ||dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&  dia == 4|| dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&  dia == 11|| dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 5  &&   dia == 18  || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 5  &&dia == 25|| dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";




                break;
            case 6:
                if (mes == 6 && dia == 1  ||dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&    dia == 8|| dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6 &&  dia ==  15  || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 6  &&  dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 6  &&   dia == 29 ||dia == 30  )
                      mensajefinal = "Fiscalia de Atlántida 1°";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7 && dia == 6  || dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  &&  dia == 13 ||dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 7  && dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26 ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 7  &&dia == 27 ||  dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                      mensajefinal = "Fiscalia de Atlántida 1°";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  &&  dia == 3 ||dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  && dia == 10 ||  dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16    ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 8  &&dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 8  && dia == 24 || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31 ){
                      mensajefinal = "Fiscalia de Atlántida 1°";
                  } else if (mes == 8  &&   dia == 31   )
                     mensajefinal = "Fiscalia de Atlántida 2°";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&  dia == 7  || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13     ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9 && dia == 14   ||  dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20       ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 9  &&   dia == 21  ||dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 9  &&     dia ==  28  || dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia de Atlántida 2°";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  &&   dia == 5  || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11    ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  && dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 10  && dia == 19   ||   dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25     ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 10  &&dia == 26  || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Atlántida 2°";

                break;

            case 11:

                if (mes == 11 && dia == 1   ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  && dia == 2  ||  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&   dia == 9  ||dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 11  &&  dia == 16  ||dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 11  &&    dia == 23  ||dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29  ){
                     mensajefinal = "Fiscalia de Atlántida 2°";
                  } else if (mes == 11  &&      dia == 30  )
                    mensajefinal = "Fiscalia de Atlántida 1°";



                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  &&dia == 7    ||  dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13    ) {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12 &&    dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20    ) {
                      mensajefinal = "Fiscalia de Atlántida 1°";
                } else if (mes == 12  && dia == 21   ||dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27   )   {
                     mensajefinal = "Fiscalia de Atlántida 2°";
                } else if (mes == 12  &&  dia == 28 || dia == 29 || dia == 30 || dia == 31  )
                      mensajefinal = "Fiscalia de Atlántida 1°";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }








 function CC2017() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {


            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11 &&  dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11  || dia == 12 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18 ||dia == 19) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25||dia == 26  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11 &&   dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 12:
                if (dia == 1 ||dia == 2||dia == 3 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 ||dia == 17)  {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if ( dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 ||dia == 24) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";


                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









     function CC2018() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if ( dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if ( dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if ( dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if ( dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2 &&  dia == 26 || dia == 27 || dia == 28)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;
            case 4:
                if (mes == 4 && dia == 1  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4 &&  dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5 &&  dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5 &&  dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5 &&  dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia ==  26 || dia == 27 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5 &&  dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6 &&  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6 &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16||dia == 17 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6 &&  dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23||dia == 24 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6 &&  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;
            case 7:
                if (mes == 7 && dia == 1 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21||dia == 22 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7 &&  dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ||dia == 26) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8 &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;

            case 9:
                if (mes == 9 && dia == 1||dia == 2 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9 &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ||dia == 9) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9 &&  dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ||dia == 16) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9 &&  dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9 &&  dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10 &&  dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ||  dia == 21) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10 && dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11 &&  dia == 12  || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;

            case 12:
                if (dia == 1 ||dia == 2) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if ( dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16)  {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)  {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if ( dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }
 







    function   CC2019() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2 && dia == 25 || dia == 26 || dia == 27 || dia == 28)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4 && dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5 && dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5 && dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6 && dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6 && dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6 && dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;
            case 7:
                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7 && dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8 && dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8 && dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;

            case 9:
                if (mes == 9 && dia == 1) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9 && dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9 && dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9 && dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9 && dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10 && dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10 && dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10 && dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10 && dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 12:
                if (dia == 1) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (dia == 30 || dia == 31)
                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









    function CC2020() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 3º";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia Ciudad de la Costa 2º";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 3º";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia ==  29  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                break;

            case 3:

                if (mes == 3 && dia == 1   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3  &&    dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3  &&  dia == 9 || dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3  &&   dia == 16 || dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3  &&dia == 23 || dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                }  else if (mes == 3  &&  dia == 30 || dia == 31   )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4 &&dia == 6 || dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4  && dia == 13 || dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4  && dia == 20 || dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4  && dia == 27 || dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5  &&   dia == 4 || dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5  &&   dia == 11 || dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5  &&   dia == 18 || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5  &&dia == 25 || dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";




                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6  &&   dia == 8 || dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6 &&   dia ==  15 || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6  &&    dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6  &&   dia == 29 || dia == 30  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7 && dia == 6 || dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7  && dia == 13 || dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7  && dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7  &&dia == 27 || dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8  &&  dia == 3 || dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8  &&   dia == 10 || dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8  && dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8  && dia == 24  || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8  &&    dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9  &&   dia == 7 || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13    ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9 &&    dia == 14  || dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20     ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9  &&    dia == 21 ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9  &&     dia ==  28 || dia == 29 || dia == 30   )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4     ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10  &&   dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11    ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10  && dia == 12 ||  dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10  &&    dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10  &&   dia == 26 || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;

            case 11:

                if (mes == 11 && dia == 1    ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11  &&  dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11  &&  dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11  &&  dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11  &&    dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29   ){
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11  &&    dia == 30   )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 12  &&    dia == 7 || dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 12 &&      dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 12  &&   dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 )   {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 12  &&   dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









     function CC2021() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 3º";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia Ciudad de la Costa 2º";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 3º";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                }  else if (mes == 3  &&  dia == 31   )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6  &&    dia == 30  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 12  &&    dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                     mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";




                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









 function CC2022() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                mensajefinal = "Fiscalia Ciudad de la Costa 2º";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia Ciudad de la Costa 3º";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia Ciudad de la Costa 1º";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                }  else if (mes == 3  &&  dia == 31   )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 6  &&    dia == 30  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 12  &&    dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                    mensajefinal = "Fiscalia Ciudad de la Costa 3º";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                     mensajefinal = "Fiscalia Ciudad de la Costa 1º";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                    mensajefinal = "Fiscalia Ciudad de la Costa 2º";




               
               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







 function DT2017() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {


            case 11:

                if (mes == 11 && dia == 1  || dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&   dia == 8  || dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14  ) {
                    mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 15   || dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 22 || dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 ||  dia ==  28  ) {
                    mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&   dia == 29 ||  dia == 30    )
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4  || dia == 5  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&   dia == 6 || dia == 7 || dia == 8  || dia == 9 || dia == 10 || dia == 11  || dia == 12  ) {
                    mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&    dia == 13 ||  dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&     dia ==20  || dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24 )   {
                    mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&  dia == 25 ||  dia == 26 || dia == 27|| dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }















   function DT2018() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 1 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 || dia == 6 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 && dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11||dia == 12 || dia == 13 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 &&  dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 &&  dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25|| dia == 26 || dia == 27 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 && dia == 28 )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1 || dia == 2 || dia == 3|| dia == 4 || dia == 5 || dia == 6 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 && dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 &&  dia == 14 || dia == 15 || dia == 16 || dia == 17||dia == 18 || dia == 19 || dia == 20 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3 &&  dia == 21 || dia == 22 || dia == 23 || dia == 24 ||dia == 25 || dia == 26 || dia == 27) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 &&  dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 || dia == 9 || dia == 10 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15 || dia == 16 || dia == 17 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 &&dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 25 || dia == 26 || dia == 27 || dia == 28 ||dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if (mes == 5 && dia == 1) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 &&  dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 && dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 || dia == 14 || dia == 15 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 && dia == 16 || dia == 17 || dia == 18 || dia == 19|| dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26||dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 &&   dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||dia == 3 || dia == 4 || dia == 5) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 &&  dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 && dia == 13 || dia == 14 || dia == 15 || dia == 16 ||dia == 17 || dia == 18 || dia == 19) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23|| dia == 24 || dia == 25 || dia == 26 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 && dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 &&  dia == 16 || dia == 17  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 &&dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22|| dia == 23 || dia == 24 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 && dia == 25 || dia == 26 || dia == 27 || dia == 28 ||dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 && dia == 8 || dia == 9 || dia == 10 || dia == 11 ||dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 &&  dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 &&  dia == 22 || dia == 23 || dia == 24 || dia == 25 ||dia == 26 || dia == 27 || dia == 28) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 &&  dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 ||dia == 2 ||dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 &&   dia == 5 || dia == 6 || dia == 7 || dia == 8  ||dia == 9 ||dia == 10 || dia == 11 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 &&dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23 || dia == 24 || dia == 25 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 && dia == 26 || dia == 27 || dia == 28 || dia == 29  || dia == 30 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&  dia == 3 || dia == 4  ||  dia == 5 || dia == 6 ||  dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 10  || dia == 11   ||  dia == 12 ||  dia == 13  ||dia == 14 || dia  ==  15 || dia == 16   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  && dia == 17 || dia == 18  ||  dia == 19 || dia == 20 ||  dia == 21 || dia == 22 || dia == 23  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 24  || dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30  ){
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 31 )
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 11:

                if (mes == 11 && dia == 1   ||   dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  && dia == 7 || dia == 8   ||  dia == 9 || dia == 10||dia == 11 || dia == 12 || dia == 13   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&   dia == 14 || dia == 15   || dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 21 ||dia == 22 || dia == 23 || dia == 24  || dia == 25 ||  dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&    dia ==  28 || dia == 29 ||   dia == 30   )
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1  || dia == 2 || dia  == 3 || dia == 4 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&    dia == 5 || dia == 6  || dia == 7 || dia == 8   ||dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12 &&   dia == 12 || dia == 13  ||     dia == 14  || dia ==  15 ||dia == 16 ||  dia == 17 || dia == 18  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&    dia == 19 || dia == 20  ||dia == 21 ||  dia == 22 || dia == 23 ||   dia == 24 )   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&dia == 25 ||  dia == 26 || dia == 27  || dia == 28 ||  dia == 29  || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia  de  1° Turno";


               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







    function DT2019() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 1 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 &&  dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11||dia == 12 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18||dia == 19 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25  ||dia == 26) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 && dia == 27 || dia == 28 )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1 || dia == 2 || dia == 3|| dia == 4 || dia == 5 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 || dia == 12 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 ||dia == 18 || dia == 19) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25 || dia == 26 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 4:
                if (mes == 4 && dia == 1 || dia == 2 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 || dia == 9 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15 || dia == 16) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 &&  dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 ||dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6 || dia == 7) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 &&  dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 &&  dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 &&  dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 && dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||dia == 3 || dia == 4) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16||dia == 17 || dia == 18  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23||dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14  || dia == 15) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 &&dia == 16 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21|| dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 && dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 ||dia == 29 || dia == 30 ){
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 &&  dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 || dia == 6) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 &&  dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 ||dia == 12 || dia == 13 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 && dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19 || dia == 20 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 && dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ||dia == 26 || dia == 27) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 &&  dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1||dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 &&  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8||dia == 9 || dia == 10 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ||dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 &&  dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23 || dia == 24) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 &&  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29  || dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";



                break;

            case 10:
                if (mes == 10 && dia == 1    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                }  else if (mes == 10 &&  dia == 2 || dia == 3 || dia == 4  ||  dia == 5 || dia == 6  || dia == 7 || dia == 8 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 9 || dia == 10  || dia == 11   ||  dia == 12 ||  dia == 13 ||dia == 14 || dia  ==  15) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 16 || dia == 17 || dia == 18  ||  dia == 19 || dia == 20  || dia == 21 || dia == 22 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 23 || dia == 24  || dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1   ||   dia == 2 || dia == 3  || dia == 4 || dia == 5) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&dia == 6 || dia == 7 || dia == 8   ||  dia == 9 || dia == 10 || dia == 11 || dia == 12  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 13 || dia == 14 || dia == 15   || dia == 16 || dia == 17 || dia == 18 || dia == 19) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  && dia == 20 || dia == 21 ||dia == 22 || dia == 23 || dia == 24  || dia == 25 ||  dia == 26 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&   dia == 27 || dia ==  28 || dia == 29 ||   dia == 30   )
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1    || dia == 2 || dia  == 3) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&   dia == 4 || dia == 5 || dia == 6  || dia == 7 || dia == 8  || dia == 9 || dia == 10 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12 &&   dia == 11 || dia == 12 || dia == 13  ||     dia == 14  || dia ==  15 || dia == 16 ||  dia == 17  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&   dia == 18 || dia == 19 || dia == 20  ||dia == 21 ||  dia == 22  || dia == 23 || dia == 24)   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&  dia == 25 ||  dia == 26 || dia == 27  || dia == 28 ||  dia == 29||dia == 30 || dia == 31 ) {

                }
                mensajefinal = "Fiscalia  de  1° Turno";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }








   
     function DT2020() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 1 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 && dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2 && dia == 26 || dia == 27 || dia == 28 || dia == 29)
                     mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5 && dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5 && dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 && dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 && dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 && dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 && dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 && dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8 && dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 && dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 && dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 && dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 ){
                    mensajefinal = "Fiscalia  de  1° Turno";
                }  else if (mes == 9  &&   dia == 30   )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4  ||  dia == 5 || dia == 6    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11   ||  dia == 12 ||  dia == 13) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&  dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  ||  dia == 19 || dia == 20  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 ||  dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1   ||   dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ||  dia == 9 || dia == 10  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15   || dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  && dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 || dia == 24 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&    dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 ||   dia == 30   )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&    dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 || dia == 8  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12 &&   dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13  ||     dia == 14  || dia ==  15  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20  ||dia == 21 ||  dia == 22  )   {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27  || dia == 28 ||  dia == 29  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  && dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







   function DT2021() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                 mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                 mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8||dia == 9    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&  dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&   dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 ||  dia == 23 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29 ||  dia == 30  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                }  else if (mes == 3  &&  dia == 31   )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12  || dia == 13 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&  dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&  dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3   || dia == 4 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&  dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10  ||dia == 11 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17  ||  dia == 18) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&   dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&   dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21  || dia == 22) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&   dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ||  dia == 29 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&  dia == 30  )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12  ||dia == 13 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19|| dia == 20 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&  dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9|| dia == 10   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&   dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16 ||dia == 17    ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  && dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ||dia == 24   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31   )
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&  dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13   ||  dia == 14   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 &&   dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20    || dia == 21   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&    dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||  dia ==  28) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&     dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4   ||  dia == 5  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11  ||  dia == 12  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  && dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25  || dia == 26   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&  dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1  ||  dia == 2   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  && dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ||  dia == 9 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  || dia == 16) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&     dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29||   dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&     dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13   || dia == 14  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20 ||dia == 21   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&    dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27||dia == 28    )   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




              break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }






 function DT2022() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";


        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4  ) {
                 mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&  dia == 5  ||dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11  ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&  dia == 12   ||dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18  ) {
                mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&   dia == 19 ||dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25    ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&  dia == 26|| dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  &&   dia == 2 ||dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 9 ||dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 16  ||dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  && dia == 23  || dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&    dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&dia == 9 ||   dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&   dia == 16|| dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&  dia == 23 ||dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                }  else if (mes == 3  &&  dia == 30  || dia == 31   )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 6 ||dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&  dia == 13 ||dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&  dia == 20 ||dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&  dia == 27 ||dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&  dia == 4|| dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&  dia == 11|| dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&   dia == 18  || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&dia == 25|| dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ||dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&    dia == 8|| dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&  dia ==  15  || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&  dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&   dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 && dia == 6  || dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  &&  dia == 13 ||dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  && dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  &&dia == 27 ||  dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&  dia == 3 ||dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  && dia == 10 ||  dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16    ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  && dia == 24 || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31 ){
                     mensajefinal = "Fiscalia  de  1° Turno";
                  } else if (mes == 8  &&   dia == 31   )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&  dia == 7  || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13     ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 && dia == 14   ||  dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20       ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&   dia == 21  ||dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&     dia ==  28  || dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 5  || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11    ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  && dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  && dia == 19   ||   dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25     ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&dia == 26  || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  && dia == 2  ||  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&   dia == 9  ||dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 16  ||dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&    dia == 23  ||dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29  ){
                     mensajefinal = "Fiscalia  de  2° Turno";
                  } else if (mes == 11  &&      dia == 30  )
                   mensajefinal = "Fiscalia  de  1° Turno";



                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&dia == 7    ||  dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&    dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20    ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  && dia == 21   ||dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27   )   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&  dia == 28 || dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









 function TT2017() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {


            case 11:

                if (mes == 11 && dia == 1  || dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&   dia == 8  || dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 15   || dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&  dia == 22 || dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 ||  dia ==  28  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&   dia == 29 ||  dia == 30    )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4  || dia == 5  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 6 || dia == 7 || dia == 8  || dia == 9 || dia == 10 || dia == 11  || dia == 12  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12 &&    dia == 13 ||  dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&     dia ==20  || dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24 )   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&  dia == 25 ||  dia == 26 || dia == 27|| dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }








      function TT2018() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                 mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  && dia == 6 ||dia == 7 || dia == 8 || dia == 9 ||dia == 10 || dia == 11 || dia == 12 || dia == 13 ||dia == 14 || dia == 15 || dia == 16|| dia == 17 || dia == 18  ){
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&   dia == 19 ||dia == 20 ||dia == 21 || dia == 22 || dia == 23  || dia == 24 || dia == 25 || dia == 26 ||dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                 mensajefinal = "Fiscalia  de  3° Turno";



                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ||  dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 7 || dia == 8 || dia == 9  ||   dia == 10 ||   dia == 11 || dia == 12 || dia == 13  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  &&dia == 14 || dia == 15 || dia == 16   ||  dia == 17||   dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 21 || dia == 22 || dia == 23||  dia == 24|| dia == 25 || dia == 26 || dia == 27  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&   dia ==  28 || dia ==  29  )
                     mensajefinal = "Fiscalia  de  3° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1 || dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  &&    dia == 7 || dia == 8 ||  dia == 9 || dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&  dia == 14 || dia == 15 || dia == 16 || dia == 17 ||  dia == 18|| dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&    dia == 21 || dia == 22 || dia == 23 || dia == 24 ||  dia == 25 || dia == 26 || dia == 27 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  && dia ==  28 || dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 4 || dia == 5|| dia == 6 || dia == 7   ||  dia == 8 ||dia == 9 || dia == 10  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&  dia == 11 || dia == 12||dia == 13 || dia == 14 ||   dia ==  15 || dia == 16 || dia == 17  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4  &&  dia == 18 || dia == 19||dia == 20 || dia == 21  ||  dia == 22 ||dia == 23 || dia == 24    ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&  dia == 25 || dia == 26||dia == 27 || dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&   dia == 2 || dia == 3||  dia == 4 || dia == 5  ||dia == 6 ||dia == 7  || dia == 8) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  &&    dia == 9 || dia == 10|| dia == 11 || dia == 12  ||  dia == 13 || dia == 14|| dia ==  15  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&  dia == 16 || dia == 17  || dia == 18 || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  && dia == 23 || dia == 24||dia == 25 || dia == 26 ||  dia == 27|| dia ==  28 || dia == 29  ){
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  &&  dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  1° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  && dia == 6 || dia == 7  ||  dia == 8 || dia == 9  || dia == 10 ||dia == 11 || dia == 12 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&  dia == 13 || dia == 14 || dia ==  15 || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&   dia == 20 || dia == 21 || dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  && dia == 27 || dia ==  28 ||   dia == 29 || dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3  || dia == 4 || dia == 5||  dia == 6 || dia == 7  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 &&  dia == 8 || dia == 9 || dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 ||   dia ==  15  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7  &&  dia == 16 || dia == 17  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  &&  dia == 18 || dia == 19||dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  && dia == 25 || dia == 26|| dia == 27 || dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3 || dia == 4  ||  dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&   dia == 8 || dia == 9 ||dia == 10 || dia == 11 ||  dia == 12 || dia == 13 || dia == 14  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&    dia  ==  15 || dia == 16  || dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&  dia == 22 || dia == 23   ||  dia == 24  || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  && dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3   || dia == 4 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&   dia == 5 || dia == 6 || dia == 7 || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9 &&    dia == 12 ||dia == 13 || dia == 14  || dia ==  15 ||dia == 16 || dia == 17 || dia == 18  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&    dia == 19 || dia == 20  || dia == 21 ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&   dia == 26 || dia == 27  ||  dia ==  28 || dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2     ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&  dia == 3 || dia == 4  || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&  dia == 10  || dia == 11 || dia == 12 ||  dia == 13 || dia == 14 || dia  ==  15 || dia == 16   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 17 || dia == 18  || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&  dia == 24  || dia == 25  || dia == 26 || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1  || dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&   dia == 7 || dia == 8  || dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&   dia == 14 || dia == 15   || dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 21 ||dia == 22 || dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&    dia ==  28 || dia == 29 ||  dia == 30    )
                     mensajefinal = "Fiscalia  de  3° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&    dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&      dia == 12 || dia == 13 ||  dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&  dia == 19 || dia == 20  || dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24  )   {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&  dia == 25 ||  dia == 26 || dia == 27|| dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  2° Turno";




                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







     function TT2019() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1: if (dia == 1 ||  dia == 2 ||dia == 3 || dia == 4 || dia == 5  ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&dia == 6 || dia == 7 || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12  ||  dia == 13 || dia == 14 || dia == 15  || dia == 16 || dia == 17 || dia == 18) {
                 mensajefinal = "Fiscalia  de  3° Turno";
            } else if (mes == 1  &&  dia == 19   ||  dia == 20 || dia == 21|| dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29  || dia == 30 || dia == 31  )
                mensajefinal = "Fiscalia  de  1° Turno";


                break;




            case 2:

                if (mes == 2 && dia == 1 || dia == 2  || dia == 3 || dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  &&  dia == 6  ||dia == 7 || dia == 8 || dia == 9 || dia == 10 ||  dia == 11  || dia == 12  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&   dia == 13|| dia == 14 || dia == 15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  &&  dia == 20  ||dia == 21 || dia == 22 || dia == 23  ||  dia == 24 || dia == 25 ||dia == 26)  {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 27  || dia ==  28   )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||   dia == 2 || dia == 3 ||dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  && dia == 6 || dia == 7 || dia == 8  ||  dia == 9 || dia == 10 || dia == 11  ||  dia == 12) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  &&    dia == 13|| dia == 14 || dia == 15  ||   dia == 16 || dia == 17||dia == 18|| dia == 19   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  && dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 ||dia == 25 || dia == 26  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  && dia == 27 || dia ==  28 || dia == 29 ||  dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  3° Turno";
                break;

            case 4:
                if (mes == 4 && dia == 1 || dia == 2  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4 && dia == 3  ||dia == 4 || dia == 5  || dia == 6 || dia == 7   || dia == 8 ||dia == 9  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  &&   dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14|| dia ==  15 || dia == 16) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&   dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 ||  dia == 22 ||dia == 23  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4  &&  dia == 24 ||dia == 25 || dia == 26  || dia == 27 || dia ==  28    ||dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 5:
                if (mes == 5  &&  dia == 1  ||  dia == 2 || dia == 3  || dia == 4 || dia == 5 ||dia == 6 ||dia == 7    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  && dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  &&  dia ==  15 || dia == 16 || dia == 17 ||  dia == 18 || dia == 19   || dia == 20 ||dia == 21  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  && dia == 22  ||dia == 23 || dia == 24  ||   dia == 25 || dia == 26 || dia == 27|| dia ==  28   ){
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  && dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia  de  3° Turno";
                break;

            case 6:
                if (mes == 6 && dia == 1 || dia == 2   || dia  == 3 || dia == 4 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&   dia == 5||dia == 6 || dia == 7 ||  dia == 8 || dia == 9   ||  dia == 10 ||dia == 11 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 &&  dia == 12||dia == 13 || dia == 14 || dia ==  15 || dia == 16|| dia == 17 ||  dia == 18  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  && dia == 19 ||dia == 20 || dia == 21   ||  dia == 22 || dia == 23 ||  dia == 24 ||dia == 25     ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&  dia == 26|| dia == 27 || dia ==  28  || dia == 29 || dia == 30  )
                    mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 7:
                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6 || dia == 7 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7 &&   dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12  ||  dia == 13 || dia == 14 || dia ==  15  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  &&    dia == 16 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  &&    dia == 17||dia == 18 || dia == 19|| dia == 20 || dia == 21 ||dia == 22 ||  dia == 23    ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7  &&   dia == 24 ||dia == 25 || dia == 26|| dia == 27 || dia ==  28 ||dia == 29 ||  dia == 30   ){
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  &&    dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1 || dia == 2  || dia == 3 || dia == 4 ||dia == 5 || dia == 6 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&    dia == 7  ||  dia == 8 || dia == 9   || dia == 10 || dia == 11  ||dia == 12 || dia == 13  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&   dia == 14 || dia  ==  15 || dia == 16||   dia == 17 || dia == 18 ||  dia == 19 || dia == 20  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&   dia == 21 ||  dia == 22 || dia == 23  ||  dia == 24  || dia == 25  || dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&    dia ==  28  ||dia == 29 || dia == 30 ||  dia == 31  )
                     mensajefinal = "Fiscalia  de  3° Turno";
                break;

            case 9:
                if (mes == 9 && dia == 1  || dia == 2  || dia  == 3 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9  &&     dia == 4 ||dia == 5 || dia == 6 ||dia == 7 || dia == 8 ||  dia == 9 || dia == 10   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 &&      dia == 11||  dia == 12 ||dia == 13|| dia == 14  || dia ==  15  ||   dia == 16 || dia == 17   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&  dia == 18 || dia == 19 || dia == 20  ||dia == 21 ||  dia == 22 ||  dia == 23 || dia == 24    ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9  &&   dia == 25||  dia == 26 || dia == 27 ||  dia ==  28 || dia == 29 ||   dia == 30   )
                    mensajefinal = "Fiscalia  de  1° Turno";



                break;

            case 10:
                if (mes == 10 && dia == 1   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 2 || dia == 3 || dia == 4   ||  dia == 5 || dia == 6 ||dia == 7 || dia == 8     ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&dia == 9  ||  dia == 10  || dia == 11 ||  dia == 12 ||  dia == 13||dia == 14 || dia  ==  15  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&   dia == 16||dia == 17 || dia == 18  ||  dia == 19 || dia == 20  || dia == 21 || dia == 22 ){
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&  dia == 23 || dia == 24  || dia == 25 ||  dia == 26 || dia == 27|| dia ==  28 || dia == 29   ){
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1   ||  dia == 2 || dia == 3 ||dia == 4 || dia == 5   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&  dia == 6||dia == 7 || dia == 8  ||dia == 9 || dia == 10 ||  dia == 11 || dia == 12  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&    dia == 13 || dia == 14 || dia == 15||  dia == 16 || dia == 17||dia == 18 || dia == 19   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 20 || dia == 21 ||dia == 22 ||dia == 23 || dia == 24  || dia == 25 ||  dia == 26  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&   dia == 27  ||dia ==  28 || dia == 29 ||  dia == 30  )
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 12:

                if (mes == 12 && dia == 1  || dia == 2 || dia  == 3  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  && dia == 4   || dia == 5 || dia == 6||   dia == 7 || dia == 8 || dia == 9 || dia == 10  ) {
                    mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&  dia == 11  || dia == 12 || dia == 13  ||    dia == 14  || dia ==  15 || dia == 16 ||  dia == 17  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&    dia == 18 || dia == 19 || dia == 20 ||dia == 21 ||  dia == 22  ||dia == 23 ||   dia == 24  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&dia == 25 ||  dia == 26 || dia == 27   || dia == 28  || dia == 29 || dia == 30  || dia == 31  )
                    mensajefinal = "Fiscalia  de  3° Turno";



               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }









    function TT2020() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia  de  3° Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12  || dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&   dia == 19 || dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31  )
                 mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  &&   dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 ||   dia == 10 ||   dia == 11  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17||   dia == 18  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24|| dia == 25  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  &&   dia == 26 || dia == 27 || dia ==  28 || dia ==  29  )
                    mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 || dia == 3 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ||dia == 9 || dia == 10 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&   dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 ||dia == 16 || dia == 17 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  &&     dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23 || dia == 24    ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  &&dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29 ||  dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6 || dia == 7    ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4 && dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ||   dia == 13 || dia == 14 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  && dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||  dia == 20 || dia == 21 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 || dia ==  28 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4  &&   dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3   || dia == 4 || dia == 5 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&  dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&    dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17   ||  dia == 18 || dia == 19   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  && dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24 ||  dia == 25 || dia == 26   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&   dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||  dia == 8 || dia == 9 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6 &&     dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14||dia ==  15 || dia == 16)  {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&   dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&   dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ||  dia == 29 || dia == 30  )
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  || dia == 6 || dia == 7  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7 &&  dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ||  dia == 13 || dia == 14 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  &&  dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19  || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7  && dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  ||  dia == 27 || dia ==  28) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  && dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2  ||  dia == 3 || dia == 4 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  ||dia == 10 || dia == 11  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&    dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16  || dia == 17 || dia == 18  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&    dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ||   dia == 24  || dia == 25  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 || dia == 31   )
                     mensajefinal = "Fiscalia  de  3° Turno";
                break;


            case 9:
                if (mes == 9 && dia == 1  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&    dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7 || dia == 8  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&    dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13  ||  dia == 14  || dia ==  15  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9 &&   dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20  ||  dia == 21 ||  dia == 22   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9  &&   dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27  ||  dia ==  28 || dia == 29 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&     dia == 30   )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4  ||   dia == 5 || dia == 6   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&  dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11  ||  dia == 12 ||  dia == 13 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&  dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  ||    dia == 19 || dia == 20) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25   ||   dia == 26 || dia == 27) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  && dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1    || dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ||  dia == 9 || dia == 10  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 || dia == 17) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  && dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ||  dia == 23 || dia == 24 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&  dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 ||    dia == 30  )
                    mensajefinal = "Fiscalia  de  1° Turno";
                break;

            case 12:

                if (mes == 12 && dia == 1  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||   dia == 7 || dia == 8 ){
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13   || dia == 14  || dia ==  15 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12 &&      dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20  ||  dia == 21 ||  dia == 22) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&  dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia == 28 ||  dia == 29 )   {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  3° Turno";

               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







     function TT2021() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia  de  3° Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                 mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia  de  3° Turno";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                 mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia  de  2° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                }  else if (mes == 3  &&  dia == 31   )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  3° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&    dia == 30  )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia  de  3° Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                     mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&    dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                     mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                     mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                     mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia  de  1° Turno";




               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }





 function TT2022() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
               mensajefinal = "Fiscalia  de  2° Turno";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                mensajefinal = "Fiscalia  de  3° Turno";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                mensajefinal = "Fiscalia  de  1° Turno";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
               mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                    mensajefinal = "Fiscalia  de  3° Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                }  else if (mes == 3  &&  dia == 31   )
                   mensajefinal = "Fiscalia  de  2° Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia  de  1° Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 6  &&    dia == 30  )
                    mensajefinal = "Fiscalia  de  3° Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                    mensajefinal = "Fiscalia  de  1° Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                   mensajefinal = "Fiscalia  de  2° Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                    mensajefinal = "Fiscalia  de  1° Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                   mensajefinal = "Fiscalia  de  2° Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                    mensajefinal = "Fiscalia  de  3° Turno";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&    dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                   mensajefinal = "Fiscalia  de  2° Turno";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                    mensajefinal = "Fiscalia  de  3° Turno";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                    mensajefinal = "Fiscalia  de  1° Turno";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                   mensajefinal = "Fiscalia  de  2° Turno";




               
               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }










 function PT2017() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {


            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11 &&  dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11  || dia == 12 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18 ||dia == 19) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25||dia == 26  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11 &&   dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 12:
                if (dia == 1 ||dia == 2||dia == 3 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 ||dia == 17)  {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if ( dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 ||dia == 24) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 1°Turno";


                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }




      function pT2018() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if ( dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if ( dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if ( dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if ( dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2 &&  dia == 26 || dia == 27 || dia == 28)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3 &&  dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3 &&  dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;
            case 4:
                if (mes == 4 && dia == 1  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4 &&  dia == 30)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5 &&  dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5 &&  dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5 &&  dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia ==  26 || dia == 27 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5 &&  dia == 28 || dia == 29 || dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2 || dia == 3 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6 &&  dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9||dia == 10 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6 &&  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16||dia == 17 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6 &&  dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23||dia == 24 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6 &&  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;
            case 7:
                if (mes == 7 && dia == 1 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7 &&  dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 ||dia == 15) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7 &&  dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21||dia == 22 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7 &&  dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7 &&  dia == 30 || dia == 31)
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8 &&  dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ||dia == 19) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8 &&  dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 ||dia == 26) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8 &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;

            case 9:
                if (mes == 9 && dia == 1||dia == 2 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9 &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 ||dia == 9) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9 &&  dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 ||dia == 16) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9 &&  dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 ||dia == 23) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9 &&  dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Pando 1°Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 ||dia == 7) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10 &&  dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 ||  dia == 21) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10 && dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11 &&  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 ||dia == 11 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11 &&  dia == 12  || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17  ||  dia == 18) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24||dia == 25 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11 &&  dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Pando 1°Turno";

                break;

            case 12:
                if (dia == 1 ||dia == 2) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if ( dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16)  {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)  {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if ( dia == 31)
                     mensajefinal = "Fiscalia de Pando 2°Turno";

               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }







   function PT2019() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";
        switch (mes) {
            case 1:
                if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 2:
                if (mes == 2 && dia == 1 || dia == 2 || dia == 3) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2 && dia == 25 || dia == 26 || dia == 27 || dia == 28)
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;

            case 3:
                if (mes == 3 && dia == 1 || dia == 2 || dia == 3) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4 && dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;
            case 5:
                if (mes == 5 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5 && dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5 && dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5 && dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5 && dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;
            case 6:
                if (mes == 6 && dia == 1 || dia == 2) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6 && dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6 && dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6 && dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6 && dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;
            case 7:
                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7 && dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7 && dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7 && dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7 && dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                break;

            case 8:
                if (mes == 8 && dia == 1 || dia == 2 || dia == 3 || dia == 4) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8 && dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8 && dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8 && dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8 && dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 9:
                if (mes == 9 && dia == 1) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9 && dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9 && dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9 && dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9 && dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9 && dia == 30)
                    mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10 && dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10 && dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10 && dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10 && dia == 28 || dia == 29 || dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 11:
                if (mes == 11 && dia == 1 || dia == 2 || dia == 3) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11 && dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11 && dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16 || dia == 17) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11 && dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11 && dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30)
                     mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 12:
                if (dia == 1) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (dia == 30 || dia == 31)
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }








     function PT2020() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                mensajefinal = "Fiscalia de Pando 3°Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12  || dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 ) {
                mensajefinal = "Fiscalia de Pando 1°Turno";
            } else if (mes == 1  &&   dia == 19 || dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26 || dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31  )
                mensajefinal = "Fiscalia de Pando 2°Turno";


                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia ==  29  )
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3  &&    dia == 2 || dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3  &&  dia == 9 || dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3  &&   dia == 16 || dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3  &&dia == 23 || dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29   ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                }  else if (mes == 3  &&  dia == 30 || dia == 31   )
                    mensajefinal = "Fiscalia de Pando 3°Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4 &&dia == 6 || dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4  && dia == 13 || dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4  && dia == 20 || dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4  && dia == 27 || dia ==  28  ||  dia == 29 ||dia == 30  )
                    mensajefinal = "Fiscalia de Pando 1°Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5  &&   dia == 4 || dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5  &&   dia == 11 || dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5  &&   dia == 18 || dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5  &&dia == 25 || dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 6:
                if (mes == 6 && dia == 1 || dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6  &&   dia == 8 || dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6 &&   dia ==  15 || dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6  &&    dia == 22 || dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6  &&   dia == 29 || dia == 30  )
                    mensajefinal = "Fiscalia de Pando 1°Turno";

                break;


            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7 && dia == 6 || dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7  && dia == 13 || dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7  && dia == 20 || dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7  &&dia == 27 || dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                    mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8  &&  dia == 3 || dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8  &&   dia == 10 || dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8  && dia == 17 || dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8  && dia == 24  || dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30   ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8  &&    dia == 31 )
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9  &&   dia == 7 || dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13    ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9 &&    dia == 14  || dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20     ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9  &&    dia == 21 ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9  &&     dia ==  28 || dia == 29 || dia == 30   )
                    mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4     ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10  &&   dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11    ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10  && dia == 12 ||  dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10  &&    dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25   ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10  &&   dia == 26 || dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1    ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11  &&  dia == 2 || dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11  &&  dia == 9 || dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11  &&  dia == 16 || dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11  &&    dia == 23 || dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29   ){
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11  &&    dia == 30   )
                    mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 12  &&    dia == 7 || dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13  ) {
                    mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 12 &&      dia == 14  || dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 12  &&   dia == 21 ||  dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 )   {
                    mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 12  &&   dia == 28 ||  dia == 29 || dia == 30 || dia == 31  )
                    mensajefinal = "Fiscalia de Pando 3°Turno";




                 break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }






     function PT2021() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                 mensajefinal = "Fiscalia de Pando 3°Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
                 mensajefinal = "Fiscalia de Pando 1°Turno";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                 mensajefinal = "Fiscalia de Pando 2°Turno";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                 mensajefinal = "Fiscalia de Pando 3°Turno";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
                mensajefinal = "Fiscalia de Pando 1°Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                }  else if (mes == 3  &&  dia == 31   )
                     mensajefinal = "Fiscalia de Pando 1°Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Pando 3°Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6  &&    dia == 30  )
                     mensajefinal = "Fiscalia de Pando 2°Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                     mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                     mensajefinal = "Fiscalia de Pando 1°Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                     mensajefinal = "Fiscalia de Pando 3°Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                     mensajefinal = "Fiscalia de Pando 1°Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                     mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 12  &&    dia == 8 ||  dia == 9 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                     mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                     mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                     mensajefinal = "Fiscalia de Pando 1°Turno";




                break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }




 function PT2022() {
     let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let mensajefinal = " ";

        switch (mes) {
            case 1: if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ) {
                mensajefinal = "Fiscalia de Pando 1°Turno";
            } else if (mes == 1  &&   dia == 6 ||dia == 7 || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12   ) {
               mensajefinal = "Fiscalia de Pando 2°Turno";
            } else if (mes == 1  &&  dia == 13 ||dia == 14 || dia == 15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ) {
                 mensajefinal = "Fiscalia de Pando 3°Turno";
            } else if (mes == 1  &&   dia == 20 ||dia == 21 || dia == 22 || dia == 23 || dia == 24 || dia == 25 || dia == 26   ) {
                mensajefinal = "Fiscalia de Pando 1°Turno";
            } else if (mes == 1  &&  dia == 27 || dia == 28 || dia == 29 || dia == 30 || dia == 31    )
               mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 2:

                if (mes == 2 && dia == 1 || dia == 2   ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2  &&  dia == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9    ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 2  && dia == 10 ||   dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15 || dia == 16   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 2  && dia == 17||   dia == 18 || dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23   ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 2  &&  dia == 24|| dia == 25 || dia == 26 || dia == 27 || dia ==  28   )
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                break;

            case 3:

                if (mes == 3 && dia == 1  ||  dia == 2 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3  &&    dia == 3||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8  || dia == 9  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 3  && dia == 10 ||  dia == 11  ||  dia == 12 || dia == 13 || dia == 14 || dia == 15  ||  dia == 16 ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 3  && dia == 17 ||  dia == 18|| dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 3  && dia == 24 ||  dia == 25 || dia == 26 || dia == 27 || dia ==  28 || dia == 29  ||  dia == 30 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                }  else if (mes == 3  &&  dia == 31   )
                   mensajefinal = "Fiscalia de Pando 2°Turno";

                break;
            case 4:
                if (mes == 4 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6  ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4 && dia == 7   ||  dia == 8 ||dia == 9 || dia == 10 || dia == 11 || dia == 12||dia == 13  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 4  &&  dia == 14 ||   dia ==  15 || dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 4  && dia == 21  ||  dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27 ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 4  && dia ==  28  ||  dia == 29 ||dia == 30  )
                     mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 5:

                if  (mes == 5 && dia == 1 || dia == 2 || dia == 3  ||dia == 4 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5  &&    dia == 5  ||dia == 6 ||dia == 7  || dia == 8 || dia == 9 || dia == 10|| dia == 11  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 5  &&  dia == 12  ||  dia == 13 || dia == 14|| dia ==  15 || dia == 16 || dia == 17 || dia == 18  ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 5  &&    dia == 19  ||  dia == 20 ||dia == 21|| dia == 22 || dia == 23 || dia == 24  ||dia == 25  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 5  && dia == 26 ||  dia == 27|| dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                    mensajefinal = "Fiscalia de Pando 1°Turno";




                break;
            case 6:
                if (mes == 6 && dia == 1  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6  &&    dia == 2 ||  dia  == 3 || dia == 4 || dia == 5 || dia == 6 || dia == 7 ||dia == 8 ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6  &&   dia == 9  || dia == 10 ||dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia ==  15) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 6 &&    dia == 16  || dia == 17 ||  dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 6  &&     dia == 23   ||  dia == 24 ||dia == 25 || dia == 26 || dia == 27 || dia ==  28|| dia == 29  ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 6  &&    dia == 30  )
                     mensajefinal = "Fiscalia de Pando 3°Turno";

                break;
            case 7:

                if (mes == 7 && dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5 ||dia == 6   ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7 &&  dia == 7  || dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 7  && dia == 14 ||   dia ==  15  ||  dia == 16 || dia == 17 || dia == 18 || dia == 19 ||dia == 20 ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 7  &&  dia == 21 || dia == 22 ||  dia == 23 || dia == 24  || dia == 25 || dia == 26  || dia == 27) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 7  && dia ==  28  ||  dia == 29 ||  dia == 30  || dia == 31 )
                    mensajefinal = "Fiscalia de Pando 1°Turno";

                break;

            case 8:

                if (mes == 8 && dia == 1  ||  dia == 2 || dia == 3  ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8  &&   dia == 4  ||  dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9  || dia == 10) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 8  &&    dia == 11 ||  dia == 12 || dia == 13 || dia == 14 || dia  ==  15 || dia == 16   || dia == 17 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 8  &&  dia == 18  ||   dia == 19 || dia == 20 || dia == 21 || dia == 22 || dia == 23  || dia == 24   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 8  &&  dia == 25  ||   dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 ||  dia == 31  )
                   mensajefinal = "Fiscalia de Pando 2°Turno";


                break;

            case 9:
                if (mes == 9 && dia == 1 || dia == 2  || dia  == 3 || dia == 4 || dia == 5 || dia == 6  || dia == 7 ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9  &&   dia == 8 ||  dia == 9 || dia == 10 || dia == 11 || dia == 12 ||dia == 13 ||dia == 14 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 9 &&    dia ==  15 ||dia == 16 || dia == 17 || dia == 18 || dia == 19 || dia == 20 || dia == 21) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 9  &&     dia == 22 ||dia == 23 || dia == 24  || dia == 25 || dia == 26 || dia == 27 ||dia ==  28   ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 9  &&   dia == 29 || dia == 30   )
                    mensajefinal = "Fiscalia de Pando 1°Turno";


                break;

            case 10:
                if (mes == 10 && dia == 1 || dia == 2 || dia == 3 || dia == 4 ||dia == 5 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10  &&    dia == 6 || dia == 7 || dia == 8 || dia == 9 || dia == 10  || dia == 11 || dia == 12) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 10  &&   dia == 13 || dia == 14 || dia  ==  15 || dia == 16 || dia == 17 || dia == 18  || dia == 19  ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 10  &&     dia == 20 || dia == 21 || dia == 22 || dia == 23 || dia == 24  || dia == 25 || dia == 26   ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 10  &&    dia == 27 ||dia ==  28 || dia == 29 || dia == 30 || dia == 31 )
                   mensajefinal = "Fiscalia de Pando 2°Turno";

                break;

            case 11:

                if (mes == 11 && dia == 1 ||  dia == 2) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11  &&  dia == 3 ||dia == 4 || dia == 5 || dia == 6 || dia == 7 || dia == 8 || dia == 9) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 11  &&  dia == 10  ||  dia == 11 || dia == 12 || dia == 13 || dia == 14 || dia == 15  ||dia == 16 ) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 11  &&   dia == 17 ||dia == 18 || dia == 19 || dia == 20 || dia == 21 ||dia == 22 || dia == 23 ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 11  &&  dia == 24 ||dia == 25 ||  dia == 26 || dia == 27 || dia ==  28 || dia == 29 || dia == 30 )
                     mensajefinal = "Fiscalia de Pando 3°Turno";

                break;

            case 12:

                if (mes == 12 && dia == 1 ||  dia == 2 || dia  == 3 || dia == 4 || dia == 5 || dia == 6  ||  dia == 7) {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 12  &&    dia == 8 || dia == 9 || dia == 10 || dia == 11 || dia == 12 || dia == 13 ||  dia == 14   ) {
                   mensajefinal = "Fiscalia de Pando 2°Turno";
                } else if (mes == 12 &&     dia ==  15 || dia == 16 ||  dia == 17 || dia == 18 || dia == 19 || dia == 20|| dia == 21    ) {
                     mensajefinal = "Fiscalia de Pando 3°Turno";
                } else if (mes == 12  &&   dia == 22 ||dia == 23 ||   dia == 24 ||dia == 25 ||  dia == 26 || dia == 27|| dia == 28   )   {
                    mensajefinal = "Fiscalia de Pando 1°Turno";
                } else if (mes == 12  &&   dia == 29 || dia == 30 || dia == 31  )
                   mensajefinal = "Fiscalia de Pando 2°Turno";




               
               break;
                 default:
       mensajefinal = "El dia o la zona son incorrectos ";
       }
 
 
         document.getElementById("demo").innerHTML=mensajefinal;
 }