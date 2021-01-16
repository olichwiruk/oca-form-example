import { renderForm } from "odca-form"
import ocaSchema from "./oca/schema.js"

console.log(renderForm([ocaSchema.schemaBase, ...ocaSchema.overlays]))
