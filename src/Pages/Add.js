const Add = ()=>{
    return(
        <form className='add-form'>
             <div className='form-control'>
                <label>ProductImage
                </label>
                 <input type='text' placeholder='AddImage'/>
            </div>
            <div className='form-control'>
                <label>ProductName
                </label>
                 <input type='text' placeholder='AddName'/>
            </div>
            <div className='form-control'>
                <label>ProductPrice
                </label>
                 <input type='text' placeholder='AddPrice'/>
            </div>
            <input type='submit' value='SaveProduct' className='btn btn-block'/>
        
        </form>
    )
}
export default Add