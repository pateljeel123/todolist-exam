const express=require("express")
const { GetToDo, AddToDo, UpdateTheToDo, DeleteToDo } = require("../controller/list.controller")


const expressRoutes=express.Router()
 
expressRoutes.get("/task",GetToDo)
expressRoutes.post("/adddata",AddToDo)
expressRoutes.put("/updatedata/:id",UpdateTheToDo)
expressRoutes.delete("/deletedata/:id",DeleteToDo)

module.exports=expressRoutes