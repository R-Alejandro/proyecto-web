import React from "react"

class singUp extends React.Component{
    render() {
        return (
            <div>
                <form>
                    <label>
                        Nombre
                        <input type="text" name="name"/>
                    </label>
                    <label>
                        Email
                        <input type="text" name="email"/>
                    </label>
                    <label>
                        Nickname
                        <input type="text" name="Nickname"/>
                    </label>
                    <label>
                        password
                        <input type="password" name="password"/>
                    </label>
                    <label>
                        check
                        <input type="checkbox" name="check"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default singUp