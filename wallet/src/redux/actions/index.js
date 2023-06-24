export const NAV_ACTION = 'NAV_ACTION'


export const selectMonth = (id) => {
    return (dispatch)=>{
        console.log('xxxxxxxxxx id',id);
        dispatch({
            type: NAV_ACTION,
            payload: id
        })
    }
}

