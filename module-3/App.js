import React from 'react'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            badge: [{   
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            id: 1,
            minChar: 3
            }]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        console.log("testing...")

        if(this.state.firstName.length < this.state.minChar){
            alert("You must have at least 3 characters in each field.   ")
        }
        event.preventDefault()
    }

    handleClick(event){
        console.log("i'm working!")

        return(
            <div className="templateParent" >
                    <this.Badge 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                    birthPlace={this.state.birthPlace}
                    favFood={this.state.favFood}
                    about={this.state.about}
                    />
            </div>
        )
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state.firstName)
        console.log(this.state.badge.map(p => {
            return p
        }))
    }

    Badge(props){
        return (
            <div className="templateMain">
                <div id="templateForm">

                    <h3 id="badgeTitle">Badge:</h3>

                    <p>Name: {props.firstName} {props.lastName}</p>

                    <p>Email: {props.email}</p>
 
                    <p>Place of birth: {props.birthPlace}</p>

                    <p>Phone Number: {props.phone}</p>

                    <p>Favorite Food: {props.favFood}</p> 
                
                    <p>About Me: {props.about}</p>
                
                </div>   
            </div>
        )
    }

    render(){
        const newBadge = this.state.badge.map(prop => 
        <this.Badge 
            firstName={prop.firstName}
            lastName={prop.lastName}
            email={prop.email}
            phone={prop.phone}
            birthPlace={prop.birthPlace}
            favFood={prop.favFood}
            about={prop.about} 
            key={prop.id}
        />)

        return (
            <div className="parent">
                <h1 id="mainTitle">React Name Badge</h1>

                <div id="formMain">
                    <form id="formTemplate" onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            placeholder="First Name"
                        />

                        <input 
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        />

                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />

                        <input 
                            type="text"
                            name="birthPlace"
                            value={this.state.birthPlace}
                            placeholder="Place of Birth"
                            onChange={this.handleChange}
                        />

                        <input 
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            placeholder="Phone Number"
                            onChange={this.handleChange}
                        />

                        <input 
                            type="text"
                            name="favFood"
                            value={this.state.favFood}
                            placeholder="Favorite Food"
                            onChange={this.handleChange}
                        />  
                    
                        <textarea 
                            id="textArea"
                            name="about"
                            value={this.state.about}
                            placeholder="Tell Us About Yourself"
                            onChange={this.handleChange} 
                        />

                        <button 
                            id="formButton" 
                            onClick={this.handleClick}
                            // disabled={this.state.value}
                        >
                        Submit
                        </button>
                </form>   
            </div>
            
            <div className="templateParent" >
                    {newBadge}
            </div>
        </div>
        )
    }
    
}

export default App
