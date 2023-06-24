const app = require("../App")
const session = require("supertest")
const agent = session(app)

describe("TEST DE RUTAS",()=>{

  describe('GET /rickandmorty/character/:id', ()=>{
    it("responde con status: 200", async ()=>{
        await agent.get("/rickandmorty/character/1"),expect(200)
    })
    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async ()=>{
        //extrae la respuesta por body no por data como en axios, si no se especifica que acceda al body da un objeto muy grande. esto pasa por el uso de supertest. tambien se puede hacer destructuring
        const {body} = await agent.get("/rickandmorty/character/1") 
        const atributes = ["id", "name", "species", "gender", "status", "origin", "image"]
        const keys = Object.keys(body)

        atributes.forEach((atribute)=> {
            expect(keys).toContainEqual(atribute)
        })
    })
    it("si hay un error responde con status: 500", async()=>{
        await agent.get("/rickandmorty/character/milo").expect(500)
    })
  })
  describe("GET /rickandmorty/login",()=>{
    it("la informacion sea correcta a la hora de hacer login", async()=>{
        const {body} = await agent.get("/rickandmorty/login?email=andresinfernoxii@gmail.com&password=titito666")
        expect(body.access).toEqual(true)
    })
    it("la informacion no es correcta a la hora de hacer login", async()=>{
        const {body} = await agent.get("/rickandmorty/login?email=anresinfernoxii@gmail.com&password=tito666")
        expect(body.access).toEqual(false)
    })
  })
  describe('POST /rickandmorty/fav',()=>{
    const char1={id:1, name:'Milonesa'}
    const char2={id:2, name:'gusi98'}
    it('Devuelve un array con el personaje',async()=>{
        const {body}= (await agent.post('/rickandmorty/fav').send(char1));
        expect(body).toContainEqual(char1); //el toContain evalua el valor dentro del contain, evalua 1 objeto; por lo que se debe utilizar el Equal para omitir las [] que se abren al final de la respuesta
    })
    it('Al enviar mas de un elemento devuelve todos los elementos',async()=>{
        const {body}= (await agent.post('/rickandmorty/fav').send(char2));
        expect(body).toContainEqual(char1);
        expect(body).toContainEqual(char2);
    })
})
  describe("DELETE /rickandmorty/fav/:id",()=>{
    
    const character1 = {id:1, name:"Milonesa"}
    const character2 = {id:2, name:"gusi98"}

    it("si no se envia un Id correcto, devuelve el mismo array",async()=>{
        const {body} = await agent.delete("/rickandmorty/fav/12666")

        expect(body).toContainEqual(character1)
        expect(body).toContainEqual(character2)
    })
    it("elimina correctamente al personaje que contenga el ID", async()=>{
        const {body} = await agent.delete("/rickandmorty/fav/1")

        expect(body).not.toContainEqual(character1)
    })
  })
})