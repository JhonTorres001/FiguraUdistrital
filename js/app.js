const dvBase = document.getElementById("dvBase");
dvBase.style.display = 'none';

const formulario = document.getElementById('formulario');
/*Submit generar figura*/ 
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const Altura = document.getElementById("pAltura").value; 
    const Base = document.getElementById("pBase").value;
    const Radio = document.getElementById("pRadio").value;
    const Ancho = document.getElementById("pAncho").value;
    const Largo = document.getElementById("pLargo").value;
    const ResultadoArea = document.getElementById("resArea");
    const ResultadoPerimetro = document.getElementById("resPerimetro");

    let miLienzo = document.getElementById("mipanel");
    let lapiz = miLienzo.getContext("2d");

    debugger
    e.preventDefault();
    const x = document.getElementById("Figuras").value;

    lapiz.clearRect(0, 0, miLienzo.width, miLienzo.height);

        switch (x) {
            case 'Cuadrado':            
                ResultadoArea.innerHTML = Altura * Altura;
                ResultadoPerimetro.innerHTML  =  (Altura * 4);                     
                lapiz.beginPath();	 
                lapiz.rect(30,5,Altura,Altura);
                lapiz.textAlign = "center"; 
                lapiz.stroke();
      
                break;        
            case 'Circulo':            
                ResultadoArea.innerHTML = (Math.PI * Math.pow(Radio, 2));
                ResultadoPerimetro.innerHTML  =  Math.PI * (2 * Radio);               
                lapiz.beginPath();	  
                lapiz.arc(300,150,Radio, 0, 2*Math.PI);
                lapiz.lineWidth = 5;
                lapiz.stroke();
                break;  
            case 'Triangulo':            
                ResultadoPerimetro.innerHTML = Math.sqrt(Math.pow(Altura, 2) + Math.pow(Base, 2)) + parseInt(Altura) + parseInt(Base);
                ResultadoArea.innerHTML  =  (Altura * Base)/2;
                // Stroked triangle
                let height = 200 * Math.cos(Math.PI / 3);
                lapiz.beginPath();
                lapiz.moveTo(100, 300);
                lapiz.lineTo(300, 300);
                lapiz.lineTo(200, 300 - height);
                lapiz.closePath();
                lapiz.stroke();    
                break;
            case 'Rectangulo':            
                ResultadoArea.innerHTML = (Altura * Base) ;
                ResultadoPerimetro.innerHTML  =  ((Altura * 2) + (Base * 2));
                lapiz.beginPath();	 
                lapiz.rect(30,5,Altura,Base);
                lapiz.stroke();
                break;    
            default:
                break;
        }  
});
/*Change al cambiar de figura*/ 
document.querySelector('#Figuras').addEventListener('change', function(e) {

    e.preventDefault();
    let miLienzo = document.getElementById("mipanel");
    let lapiz = miLienzo.getContext("2d");
    lapiz.clearRect(0, 0, miLienzo.width, miLienzo.height);

    const ResultadoArea = document.getElementById("resArea");
    const ResultadoPerimetro = document.getElementById("resPerimetro");
    ResultadoArea.innerHTML = '';
    ResultadoPerimetro.innerHTML = '';

    var els = document.getElementsByClassName("parametro");

        Array.prototype.forEach.call(els, function(el) {
            // Do stuff here
            debugger;
            el.style.display ='none';
        });

    const dvAltura = document.getElementById("dvAltura"); 
    const dvBase = document.getElementById("dvBase");
    const dvRadio = document.getElementById("dvRadio");
    const dvAncho = document.getElementById("dvAncho");
    const dvLargo = document.getElementById("dvLargo");

    const x =  e.srcElement.value;
    
    switch (x) {
        case 'Cuadrado':            
            dvAltura.style.display = 'block';
            break;        
        case 'Circulo':            
            dvRadio.style.display = 'block';
            break;  
        case 'Triangulo':            
            dvAltura.style.display = 'block';
            dvBase.style.display = 'block';
            break;
        case 'Rectangulo':            
            dvAltura.style.display = 'block';
            dvBase.style.display = 'block';
            break;    
        default:
            break;
    }  

});
