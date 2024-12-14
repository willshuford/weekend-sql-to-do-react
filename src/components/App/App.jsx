import {useState,useEffect} from 'react';
import axios from 'axios'
import'./App.css';

function App () {
  const [todoList, setTodoList ] = useState([]);

  useEffect( () =>{
    fetchTodoList()
  }, [] );

  function fetchTodoList(){
    console.log ( 'in fetchTodoList' );
    axios.get( '/api/todo' ).then( function( response ){
      setTodoList( response.data );
    }).catch( function( err ){
      console.log( err );
      alert( 'error getting to do list' );
    })
  }

  function toggleMe( id ){
    console.log( 'in toggleMe:', id );
    const objectToSend = {
      id: id 
    }
    axios.put('/api/todo', objectToSend).then(function(){
      console.log('back from PUT:', response.data);
      fetchTodoList();
    }).catch(function(err){
      console.log(err);
      alert('error updating todo item');
    })
  }

  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
      {
        todoList.map( (item)=>(
          <p className={`complete-${item.complete}` }key={ item.id }>{ item.name } <button onClick={ ()=>{ toggleMe( item.id ) }} >Toggle Complete</button></p>
        ))
      }
    </div>
  );

}

export default App
