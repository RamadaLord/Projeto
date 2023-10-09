import express, {Request, Response, NestFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'

app.use((err: Error, req:Request, res:Response, next: NestFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status:'Erro',
        message: 'Erro Interno'
    })
})

app.listen(process.env.PORT|| 2222,()=>
console.log('Servidor online'))