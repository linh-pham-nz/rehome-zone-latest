import React from 'react'

const Rehome = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h2>Rehome a cat!</h2>
                <div>
                    <form>
                        <div>
                            <label>Cat name: 
                                <input type="text" name="name" />
                            </label>
                        </div>
                        <div>
                            <label>Cat breed:
                            <input type="text" name="breed" />
                            </label>
                        </div>
                        <div>
                            <label>Cat age:
                            <input type="text" name="age" />
                            </label>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Rehome


// <form>
// <div>
//     <input type='text' name='formName' >Cat's name: </input>    
// </div>
// </form>