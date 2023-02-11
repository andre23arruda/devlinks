let toggleMode = () => {
	const html = document.documentElement
	html.classList.toggle("light")

	const img = document.querySelector("#profile img")

	// if (html.classList.contains("light")) {
	// 	img.setAttribute("src", "./assets/avatar-light.jpg")
	// 	img.setAttribute(
	// 		"alt",
	// 		"Foto de Carlos Henrique Sorrindo de oculos, usuando camisa azul"
	// 	)
	// } else {
	// 	img.setAttribute("src", "https://github.com/carloscrw.png")
	// 	img.setAttribute(
	// 		"alt",
	// 		"Foto de Carlos Henrique Sorrindo, usuando camisa azul"
	// 	)
	// }
}
