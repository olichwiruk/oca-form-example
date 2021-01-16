import { renderForm } from "oca.js-vue"
import ocaSchema from "./oca/schema.js"

console.log(renderForm([ocaSchema.schemaBase, ...ocaSchema.overlays]))
