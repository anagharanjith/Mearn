import User from "./User"

function Sample(){
    const data = "Message from Parent{Sample}"
    const handleSubmit=()=>{
        alert("please enter username!!!")
    }
    const handleGetName=(e)=>{
        console.log(e.target.value);
    }
    return(
        <>
        <h2>Inside Sample Component</h2>
        <label style={{margin:'50px'}} htmlFor="uname">Username : 
        <input type="text" id="uname" onChange={e=>handleGetName(e)}/></label>
        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        <User share={data}/>
        </>
    )
}

export default Sample
