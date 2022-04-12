module.exports= function(app){

    routes.get('/',(req,res) =>{

        res.statusCode=200;
        res.setHeader('Content-Type', 'application/html');
        res.json({
    
            users:[{
            name: 'deco',
            email: 'deco@deco.com',
            id:1
            }]
    
        });
    
    });
    
    routes.get('/admin', (req,res)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/html');
        res.json({
    
            users:[{name: 'admin'}]
            
        });
    
    })
    

}
