import {useState,useEffect} from 'react';
import axios from 'axios'

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
  }

  return (
    <div>
      <h1>TO DO APP</h1>
      <p>{ JSON.stringify( todoList )}</p>
      {
        todoList.map( (item)=>(
          <p key={ item.id }>{ item.name } <button onClick={ ()=>{ toggleMe( item.id ) }} >Toggle Complete</button></p>
        ))
      }
    </div>
  );

}

export default App
