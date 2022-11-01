
import { Container, Button } from "react-bootstrap"
import {useState} from "react";

const Add = ()=>{
    return(
        <Container style={{backgroundColor:'#888888', width:'40%', height:'70vh'}} >
        <form style={{marginTop:'8rem', position:'absolute', width:'30%',}} className='add-form'>
             <div >
                <label>ProductImage
                </label>
                 <input type='text' placeholder='AddImage'/>
            </div>
            <div >
                <label>ProductName
                </label>
                 <input type='text' placeholder='AddName'/>
            </div>
            <div>
                <label>ProductPrice
                </label>
                 <input type='text' placeholder='AddPrice'/>
            </div>
            <Button>Add Product</Button>
        
        </form>
        </Container>
    )
}
export default Add