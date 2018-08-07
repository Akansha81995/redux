import React from 'react';

class Layout extends React.Component
{
    constructor()
    {
        super();
        this.secondName = "Agarwal"

    }
    getVal(val)
    {
        return "CalledMethod" + val
    }
    render()
    {
        const  name ="Akansha"
        return(
            <div>
            <h1>hi {name} {this.secondName}</h1>
            <p>{this.getVal(1)}</p>
            
            </div>
         
        );
    }
}
export default Layout