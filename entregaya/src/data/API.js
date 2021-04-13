export class API {
    static categorias = [];

    static login(usuario, password) {
        return new Promise( (resolve) => {
            if (usuario=="admin" && password=="1234") {
                resolve({
                    logueado: true,
                    nombreUsuario: "Juan"
                });
            } else {
                resolve({
                    logueado: false
                })
            }
        })
    }

    static comprar() {
        return new Promise( () => {
            
        })
    }

    static getCategoriaById(id) {
        let categoriasEncontradas = API.categorias.find(
            c => c.id == id
        )
        return categoriasEncontradas
    }

    static async getProductos() {        
        let response = await fetch("http://localhost:8000/api/productos");
        return await response.json();
    }

    static async getCategorias() {
        let response = await fetch("http://localhost:8000/api/categorias");
        return await response.json();
    }

    static async cacheCategorias() {
        API.categorias = await this.getCategorias();
    }
}
//TODO: Resolver categorías
API.cacheCategorias();
