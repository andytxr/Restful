module.exports=(app)=>{

    app.get('/users',(req,res) =>{

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
    
    app.get('/users/admin', (req,res)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/html');
        res.json({
    
            users:[{name: 'admin'}]
            
        });
    
    })
    

}
