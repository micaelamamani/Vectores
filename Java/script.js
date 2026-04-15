let personas= [
    {
        nombre: "Juan Carlos", edad: 48, altura: 1.85 
    },
];

document.getElementById('btnIngresar').addEventListener('click', nuevaPersona);

function nuevaPersona(){
    let anios, alt, nom;
    anios = parseInt(document.getElementById('IDEdad').value);
    alt = parseFloat(document.getElementById('IDAltura').value);
    nom = String(document.getElementById('IDNom').value).toUpperCase();
 
 let objPersona = {
    nombre: nom,
    edad: anios,
    altura: alt
}

 personas.push(objPersona);
 console.log(personas);
 document.getElementById('IDNom').Value = "";
 document.getElementById('IDEdad').Value = "";
 document.getElementById('IDAltura').Value = "";
};

 document.getElementById('btnMostrarTodo').addEventListener('click', ()=>{
    personas.forEach( per=>{
        console.log(`nombre: ${per.nombre},
        edad: ${per.edad}, altura: ${per.altura}`);
    });
 });