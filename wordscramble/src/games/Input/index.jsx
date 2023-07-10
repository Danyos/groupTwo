const Filed=({getData})=>{



    return(
        <>
            <h2>i'm input component</h2>
            <button onClick={()=>getData('refresh')}>Refresh</button>
            <button onClick={()=>getData('worning')}>worning</button>
            <button onClick={()=>getData('success')}>Next</button>
        </>
    )
}

export default Filed