
    

     function Jurisdicciones() {
        let dto = parseInt(document.getElementById("dto").value);
       let secc = parseInt(document.getElementById("secc").value);
       let mensajefinal = " ";
           switch (dto) {
               case 1:
                   if (secc  == 1 || secc == 2 || secc == 3 || secc == 4 || secc == 9 || secc == 10 ||secc== 11 || secc == 12 ) {
                        mensajefinal = "Fiscalias Departamentales de Artigas";
                   } else if (  secc == 5 || secc == 6 ||secc== 7 || secc == 8 )
                        mensajefinal = "Fiscalia Departamental de Bella Unión";
   
                   break;
   
               case 2:
                   if (secc == 1 || secc == 2 || secc == 3 || secc == 11 || secc == 12 || secc == 13 ||secc== 15 ) {
                        mensajefinal ="Fiscalias Departamentales de Canelones";
                   } else if (  secc == 8 || secc == 17 ||secc== 22 || secc == 23 || secc == 24) {
                        mensajefinal = "Fiscalias Departamentales de Atlantida";
                   } else if (  secc == 18 || secc == 26 ||secc== 27 ) {
                        mensajefinal = "Fiscalias Departamentales de Ciudad de la Costa";
                   } else if (   secc == 28 ) {
                        mensajefinal = " Al Norte Pando y Tol.  Al sur C. de la Costa";
                   } else if (  secc ==  7 ||secc== 9 || secc == 10 || secc == 14 ||  secc == 25 ) {
                        mensajefinal ="Fiscalias Departamental Pando  ";
                    } else if (  secc == 6  ||secc== 16 || secc== 20 ) {
                         mensajefinal ="Fiscalia de Toledo";
                   } else if (  secc == 4 || secc == 5 ||secc== 19 || secc == 21  )
                        mensajefinal = "Fiscalia Departamental de Las Piedras";
                   break;
   
   
               case 3:
                   if (secc  == 1 || secc == 2 ||  secc == 4 ||secc == 5 ||secc == 6 ||secc== 7 || secc == 8 || secc == 10 ||secc== 11 || secc == 14 || secc == 15 ) {
                        mensajefinal = "Fiscalias Departamentales de Cerro Largo";
                   } else if (  secc == 3 ||secc == 13 || secc == 16 ||secc == 12 ) {
                        mensajefinal = "Fiscalia Departamental de Rio Branco";
           } else if (  secc == 4 ||secc == 9  )
                mensajefinal = "No es claro si va a C. Larg o R.Br";
                   break;
   
               case 4:
                   if ( secc == 1 || secc == 7 || secc == 14 ) {
                        mensajefinal = "Fiscalia Departamental de Colonia";
                   } else if (  secc == 3 || secc == 4 ||secc== 9 || secc == 10 ||secc== 11 || secc == 12 || secc == 13 ) {
                        mensajefinal = "Fiscalia Departamental de Carmelo";
                   } else if (  secc == 2 || secc == 5 ||secc== 6 || secc == 8 ||secc== 15 || secc == 16 || secc == 17 || secc == 18 )
                        mensajefinal = "Fiscalia Departamental de Rosario";
   
                   break;
   
               case 5:
                   if ( secc == 1 || secc == 3 ||  secc == 5 || secc == 6 ||secc== 10 || secc == 11 ) {
                        mensajefinal = "Fiscalias Departamentales de Maldonado";
                   } else if (  secc == 2 || secc == 4 ||secc== 7 || secc == 8  ||secc== 9 ||  secc == 13){
                        mensajefinal = "Fiscalia Departamental de San Carlos";
                 } else if (   secc == 12 )
                mensajefinal = "De lag del Sauce a r.104 Mal. De esta a lim. Rocha S.Carlos";
                   break;
   
               case 6:
                   if (secc == 1 || secc == 2 || secc == 3 || secc == 4 || secc == 5 || secc == 12 ) {
                        mensajefinal = "Fiscalias Departamentales de Fray Bentos";
                   } else if (   secc == 6 ||secc== 7 || secc == 8 || secc == 9  || secc == 10 || secc == 11)
                        mensajefinal = "Fiscalia Departamental de  Young";
                   break;
               case 7:
                   if (secc == 2 || secc == 5 || secc == 6 || secc == 9 || secc == 13  ) {
                        mensajefinal = "Fiscalias Departamentales de Chuy";
                   } else if (  secc == 1 || secc == 3 || secc== 4 || secc == 7 || secc == 8 ||secc== 10 || secc == 11|| secc == 12)
                        mensajefinal = "Fiscalia Departamental de Rocha";
                   break;
   
               case 8:
                   if ( secc == 1  || secc == 3 || secc == 4 || secc == 5 ||secc== 8 ||  secc == 9  ) {
                        mensajefinal = "Fiscalias Departamentales de San Jose";
                   } else if (  secc == 2 || secc == 6 ||secc== 7 || secc == 10 )
                        mensajefinal = "Fiscalia Departamental de Libertad";
                   break;
   
               case 9:
                   if ( secc == 1 || secc == 2 || secc == 3 || secc == 6 || secc == 7 || secc == 8  || secc == 10 ||secc== 11 || secc == 12 ) {
                        mensajefinal = "Fiscalias Departamentales de Mercedes";
                   } else if (secc == 4 ||  secc == 5 || secc == 9   )
                        mensajefinal = "Fiscalia Departamental de  Dolores";
                   break;
   
               case 0:
                   if ( secc == 1 || secc == 2 || secc == 5|| secc == 6 || secc == 7 || secc == 8 || secc == 10 ||secc== 12 || secc == 13 || secc == 14 ) {
                        mensajefinal = "Fiscalias Departamentales de Tacuarembo";
                   } else if (  secc == 3 ||secc == 4 ||  secc == 9 || secc == 11 )
                        mensajefinal = "Fiscalia Departamental de Paso de los Toros";
                        break;
                        default:
              mensajefinal = "El dto o la seccional no son incorrectos ";
              }
        
        
                document.getElementById("demo").innerHTML=mensajefinal;
        }
        