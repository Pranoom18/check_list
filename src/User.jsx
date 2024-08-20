import { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function User() {
    const [ver, setVer] = useState(false);

    return (
        <div className="ddd">
            <div className="ccc"> 
                <div className="ll" style={{ height: '23px',width: '120px',color: 'rgba(229,117,51,255)' }}>Check List  

            </div>
                <div className="aa">
                    <input type="text" style={{height: '23px',width: '172px',borderColor:'rgba(229,117,51,255)',backgroundColor:"white"}}placeholder="Search Checklist               🔎"  />
                    
                    <button onClick={() => setVer(true)} style={{ height:'30px',marginLeft:'10px',width: '100px',color: 'white', backgroundColor: 'rgba(229,117,51,255)' ,borderColor:'rgba(255,255,255,255)' }}>
                        Add New
                    </button>
                </div> 
            </div>
            <div className="ggg"> 
                <div className="ttt">                    
                    <p>S.No</p> 
                    <p>Heading</p>
                    <p>Actions</p>
                </div>
            </div>
            
            <Modal isOpen={ver} onRequestClose={() => setVer(false)} style={{
                content: {
                    backgroundColor: 'rgb(245,245,244)',
                    color: 'rgba(0, 0, 0, 0.699)',
                    height: "90%",
                    width: '55%',
                    marginLeft: '20%',
                    padding: '10px'
                }
            }}>
                <p style={{ fontSize: '1.2rem', paddingBottom: '0',marginRight:'10px' ,color:'rgba(0, 0, 0, 0.386)'}}>Add New Design Form</p>
                <div className="box" style={{ backgroundColor: 'white' }}>
                    <p style={{ fontSize: '1rem', textAlign: 'center',borderRadius:'5px', backgroundColor: 'rgba(0, 0, 0, 0.685)', color: 'white', height: '29px',paddingTop:'4px', margin: '0' }}>
                        Add New Design Form 
                        <button 
                        onClick={() => setVer(false)} 
                        style={{
                            backgroundColor: 'transparent', 
                            border: 'none', 
                            fontSize: '1.5rem', 
                            cursor: 'pointer', 
                            color: 'white',
                            position: 'absolute',
                            top: '71px',
                            right: '47px'
                        }}
                    >
                        ✖
                    </button>

                    </p><br></br>
                    <div className="boxx"> 
                        <label>Department</label>
                        <input style={{ borderColor:'rgba(245,245,244)',marginTop:'15px' ,marginBottom:'15px' ,backgroundColor: 'rgba(245,245,244)', width: '90%',height:'35px' }} type="text" placeholder="Select type" />
                        
                        <label>Category</label>
                        <input style={{ borderColor:'rgba(255,255,255,255)' ,marginTop:'15px' ,marginBottom:'15px' , backgroundColor: 'rgba(245,245,244)', width: '90%',height:'35px'}} type="text" placeholder="Select type" />
                        
                        <label>Heading</label>
                        <input style={{ borderColor:'rgba(255,255,255,255)' ,marginTop:'15px' ,marginBottom:'15px' ,backgroundColor: 'rgba(245,245,244)', width: '90%' ,height:'35px'}} type="text" placeholder="Select type" />
                        
                        {/* <label>Form No.</label> */}<br></br>
                        <label> Form No.</label><br></br>
                        <input style={{borderColor:'rgba(255,255,255,255)' ,marginTop:'15px' ,marginBottom:'15px' , backgroundColor: 'rgba(245,245,244)', width: '90%',height:'35px' }} type="text" placeholder="Select type" />
                    </div>   
                </div>
                <br></br>
                <center>
                    {/* <button 
                        style={{
                            backgroundColor: 'rgba(229,117,51,255)',
                            color: 'black',
                            fontSize: '1rem',
                            borderRadius: '10px',
                            height: '30px',
                            width: '300px'
                        }}
                        onClick={() => setVer(false)}
                    >
                        Submit
                    </button> */}
                    <button onClick={() => setVer(false)} style={{ height:'30px',marginLeft:'10px',width: '100px',color: 'white', backgroundColor: 'rgba(229,117,51,255)',borderColor:'rgba(255,255,255,255)' }}>
                        Submit
                    </button>
                </center>
            </Modal>
        </div>
    );
}

export default User;
