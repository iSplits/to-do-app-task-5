import React, { useEffect, useState} from 'react';


import '../MyComponents/style.css';

function TodoPage () {
    // PIECE OF STATE TO TRACK TODO ENTERED
    const [todo, setTodo] = useState('');

    // PIECE OF STATE TO HOLD TODOES IN AN ARRAY
    const [todoArr, setTodoArr] = useState([]);

    // THIS PIECE OF STATE KEEPS TRACK OF SELECTED TODO ID
    const [todoId, setTodoId] = useState('');

    // PIECE OF STATE TO CHECK IF A TODO HAS BEEN ADDED
    const [todoAdded, setTodoAdded] = useState(false);

  // this function will send todo data to local storage
  const sendToLs = (todoObj) => {
    let items;

    // check if any arr exist in local storage
    if(localStorage.getItem('items') === null) {
      items = [];

      // push new otp object
      items.push(todoObj);

      // set local storage
      localStorage.setItem('items', JSON.stringify(items));

      // redirect user to user dashboard
      window.location.replace('/userpage');
    } else {
      // get what is already in local storage
      items = JSON.parse(localStorage.getItem('items'));

      // push new otp object
      items.push(todoObj);

      // reset local storage
      localStorage.setItem('items', JSON.stringify(items));

      // redirect user to user dashboard
      window.location.replace('/userpage');
    }
  };

  // this function will get user data from local storage
  const getTodoDataFromLs = () => {
    let items;
    // check if any data in local storage
    if(localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
    return items[0];
  };


    // THIS FUNCTION GETS THE TODO FROM STATE AND APPENDS IT TO ui
    const getTodo = () => {
      if(todoId === '') {
        let todoObj = {
            title: todo,
            done: false,
        };
 
        todoArr.push(todoObj);

        setTodoAdded(true);

        sendToLs(todoObj);
 
        setTodo('');
      } else if (todoId !== '') {

        todoArr.map((item, index) => {
           if(todoId === index) {
               item.title = todo;
           }
           sendToLs(item)
        })
 
        setTodo('');

        setTodoId('');
      }
    };


    // THIS FUNCTION MARKS A TODO AS DONE
    const markTodo = (e, todoId) => {
        e.preventDefault()
        
        todoArr.map((item, index) => {
            if(index === todoId) {
                item.done = true;
                console.log(item);
            }
        })
    };

    // THIS FUNCTION WILL SET SELECTED TODO FOR EDITING
    const editTodo = (e, todoId) => {
       e.preventDefault();

       setTodoId(todoId);

       todoArr.map((item, index) => {
           if(index === todoId) {
               setTodo(item.title)
           }
       })
    };

    //
    const getTodoData = () => {
       let newArr = getTodoDataFromLs();
    //    setTodoArr(newArr);
    console.log(newArr);
    };

     // when component mounts please do this
     useEffect(() => {
        // call get user funtiion
        getTodoData(); 
      }, []);

    return (
        <div className='head-container'>

           <header className='header'>

                 <input 
                    className='todo-input' 
                    type='text' 
                    placeholder='enter your todo'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />   

                <button 
                   className='todo-btn'
                   onClick={getTodo}
                > 
                  Save 
                </button>      

           </header>

           <div className='body-container'>
                <ul className='list-collection'>
                    {
                        todoArr.length == 0 ? (
                            <li className='list-item'>
                
                                <p className='todo-text'>
                                 enter a todo in the header above
                                </p>

                            </li>
                        ) : 
                        todoArr.length > 0 ? (
                            todoArr.map((item, index) => (
                                <li key={index} className='list-item'>
                
                                <p 
                                 className={item.done ? 'todo-text-done' : 'todo-text'}
                                 >
                                 {item.title}
                                </p>

                                <button 
                                    className='todo-status-btn'
                                    onClick={(e) => markTodo(e, index)}
                                >
                                    mark as done
                                </button>

                                <button 
                                   className='todo-edit-btn'
                                   onClick={(e) => editTodo(e, index)}
                                >
                                    edit
                                </button>

                            </li>
                            ))
                        ) : (
                            <li className='list-item'>
                
                                <p className='todo-text'>
                                 something went wrong
                                </p>

                            </li>
                        )
                    }
                </ul>  
            </div>

        </div>
    );
};

export default TodoPage;