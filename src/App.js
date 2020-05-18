import React from 'react';
import  {CardList} from './components/card-list/card-list'
import  { Input } from './components/input/input'
import './App.css'
class App extends React.Component{
  constructor(props){
   super(props);
   this.state={
    monsters:[],
    searchField:''
   }
   this.onHandleChange=this.onHandleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  onHandleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){ 
    
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 style={{marginTop:0}}>Monsters Rolodexs</h1>
        <Input type="search" placeholder="Search" handleChange={this.onHandleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
