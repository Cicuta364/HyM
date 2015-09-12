var Monstruo = function(raza, vida, ataque){
	this.raza = raza;
	this.vida = vida;
	this.poderAtaque = ataque;
}

monstruo = new Monstruo('Orco', 100, 20)

var Heroe = function(nombre, raza, nivel, experiencia, vida, ataque){
	this.nombre = nombre;
	this.raza = raza;
	this.nivel = nivel;
	this.experiencia = experiencia;
	this.vida = vida;
	this.poderAtaque = ataque;
}

heroe = new Heroe('Feanor', 'Elfo', 1, 0, 200, 50)

Heroe.prototype.ataque = function(monstruo) {
//function ataque_heroe() {
	monstruo.vida = monstruo.vida - heroe.poderAtaque;
	alert('Has atacado ' + heroe.poderAtaque + ' de daño');
	if (monstruo.vida <= 0) {
		alert('Has eliminado al enemigo');
		heroe.experiencia = (heroe.experiencia + 200);
		alert('Has ganado 200 de experiencia');
	}
	if (heroe.experiencia % 1000 == 0 && heroe.experiencia !== 0) {
		alert('Has subido de nivel');
		heroe.nivel = (heroe.nivel + 1);
		heroe.vida = (heroe.vida * heroe.nivel);
		heroe.ataque = (heroe.poderAtaque * heroe.nivel);
		alert('Ahora tu ataque es ' + heroe.ataque + ' y tu vida es ' + heroe.vida );
	}
};




Monstruo.prototype.ataque = function(heroe){
//function ataque_monstruo() {
	heroe.vida = (heroe.vida - monstruo.poderAtaque);
		alert('Has recibido ' + monstruo.poderAtaque + ' de daño')
	if (heroe.vida <= 0) {
		alert('Has sucumbido a la oscuridad');
	}
};

function posion (){
	heroe.vida = (heroe.vida + 60)
	alert('Recuperas 60 de vida')
};


function nuevo_monstruo(){
monstruo = new Monstruo('Orco', 100, 20)
alert('Un nuevo enemigo te desafia')
}