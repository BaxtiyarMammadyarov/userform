import React from 'react'
import { useState } from 'react'
import "./style.css"

function Form({ list, setList }) {
    const Regex = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    const [data, setData] = useState({ fullname: "", email: "", password: "", repassword: "" });
    const [check, setCheck] = useState({ pass1: "password", pass2: "password" });
    const [title, setTitle] = useState({});
    function addToList(e) {
        e.preventDefault()
        let bool = false;
        let tt = {}
        if (data.fullname.length < 3) {
            tt.fullname = "Add uc simvoldan qisa plmamalidir";
            bool = true;
        }
        // if( data.email.match(Regex)){
        //     tt.email ="Email formati duzgun deyil";
        //     console.log("emas;lc;sc;")
        //     bool = true;

        // }
        if (data.password.length < 3) {
            tt.password = " Shifre 8 simvoldan qisa olmamlidir";
            bool = true;
        }
        if (data.repassword !== data.password) {
            tt.repassword = " Shifre ve tekrar sifre uygun deyil";
            bool = true;
        }
        if (bool) {
            setTitle(tt);
            return;
        }
        else {
            setTitle({ fullname: "", email: "", password: "", repassword: "" });
        }
        let nv = [...list];
        data.id = nv.length + 1

        nv.push({ ...data })
        setData({ fullname: "", email: "", password: "", repassword: "" })
        setList(nv)

        console.log(list)

    }
    return (

        <div className='form-div'>
            <div>Form</div>
            <div className=' input-div'>
                <span className='red'>{title.fullname}</span><br />
                <input type={"text"} id={"fullnameid"} placeholder={"Full name"} value={data.fullname} onChange={(e) => setData({ ...data, fullname: e.target.value })} />

            </div>

            <div className=' input-div'>
                <span className='red'>{title.email}</span><br />
                <input type={"text"} id={"emailId"} placeholder={"Email"} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            </div>

            <div className='pass-check '>
                <span className='red'>{title.password}</span><br />
                <input type={check.pass1} id={"passwordid"} placeholder={"Password"} value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <input className='checkBox' type={"checkbox"} id={"checkboxId"} onClick={(e) => check.pass1 === "password" ? setCheck({ ...check, pass1: "text" }) : setCheck({ ...check, pass1: "password" })} />
            </div>
            <div className='pass-check '>
                <span className='red'>{title.repassword}</span><br />
                <input type={check.pass2} id={"repasswordid"} placeholder={"Repassword"} value={data.repassword} onChange={(e) => setData({ ...data, repassword: e.target.value })} />
                <input className='checkBox' type={"checkbox"} id={"checkboxId1"} onClick={(e) => check.pass2 === "password" ? setCheck({ ...check, pass2: "text" }) : setCheck({ ...check, pass2: "password" })} />
            </div>

            <div className=' input-div'><button onClick={(e) => addToList(e)}>Add to Table</button></div>




        </div>


    )
}

export default Form
