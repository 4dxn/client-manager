(function() {
	const formulario = document.querySelector("#formulario");
	formulario.addEventListener("submit", validarCliente);

	function validarCliente(e) {
		e.preventDefault();

		const nombre = document.querySelector("#nombre").value;
		const email = document.querySelector("#email").value;
		const telefono = document.querySelector("#telefono").value;
		const empresa = document.querySelector("#empresa").value;

		const cliente = { nombre, email, telefono, empresa }

		if (!validar(cliente)) {
			console.log("Todos los campos son obligatorios");
			return;
		}
		console.log("La validación fue exitosa");
	}

	function validar(objeto) {
		return Object.values(objeto).every(input => input !== '');
	}
})();
