// var addAction = {
// 	type:'SET_USER',
// 	payload:{
// 		id:1,
// 		usernmae:'tc',
// 	}
// }

// var removeAction = {
// 	type:'UNSET_USER',
// }

var initialState = null
//Create userReducer - IMMUTABLE
function userReducer(state = initialState,action){

	if(action.type == 'SET_USER'){
		//add more to state
		return action.payload

	}else if (action.type == 'UNSET_USER'){
		//remove item from state
		return null

	}else{
		//do nothing
		return state
	}
}
export default userReducer;













