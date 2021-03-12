/* we started building the createStore function.
currently this factory function 
1.takes in  no argument
2.set up a local(private) variable to hold the state.
3.sets up a 'getState' function
4.Return an object that publically exposes the getState() function.
*/

function createStore(){
    //the store should have 4 parts
    // 1.the state
    // 2. Get the state
    // 3. listen to changes on the state
    //4. update the state
    
     let state
      const getState=() => state
         return{
           getState
           
         }
    
      }
  
    
  