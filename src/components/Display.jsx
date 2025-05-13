export default function Display(){
    return(
        <div className="display d-flex justify-content-center align-items-center">
            <input type="text" id="display" className="mb-2 border border-2 rounded pe-3 border-secondary bg-white shadow-sm fw-medium" disabled style={{height:'55px',width:'95%',textAlign:'right'}}/>
        </div>
    )
}