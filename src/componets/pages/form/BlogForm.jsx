import { useForm } from "react-hook-form";
import supabase from "./Supabase";
import toast, { Toaster } from 'react-hot-toast';


function BlogFrom() {
    const handleSubmit = async () => {
        const prev = document.getElementById("prev")["value"];
        const title = document.getElementById("newtitle")["value"];
        const desc = document.getElementById("newdesc")["value"];
        await supabase
            .from('Blog')
            .update({ title: title, description: desc })
            .eq('title', prev)
            .then(() => {
                toast("Update Successful");
            })
        const forms = document.getElementsByClassName("mt-3");
        forms[1].reset();
    }

    return (
        <form className='mt-3'>
            <div className="form-group mb-2">
                <input id="prev" type="text" name="prevtitle" className='form-control' placeholder='Previous Title' required />
            </div>
            <div className="form-group mb-2">
                <input id="newtitle" type="text" name="email" className='form-control' placeholder='New Title' required />
            </div>
            <div className="form-group mb-2">
                <input id="newdesc" type="text" name="phone" className='form-control' placeholder='Description' required />
            </div>
            <div className="form-group">
                <p onClick={() => { handleSubmit() }} type="submit" value="Send" className='th-btn'>Submit</p>
            </div>
            <Toaster />
        </form>
    )
}

export default BlogFrom;